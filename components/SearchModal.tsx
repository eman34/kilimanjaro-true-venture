"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

interface PagefindData {
  url: string;
  excerpt: string;
  meta?: { title?: string };
}

interface PagefindResult {
  id: string;
  data: () => Promise<PagefindData>;
}

interface PagefindAPI {
  search: (query: string) => Promise<{ results: PagefindResult[] }>;
}

interface DisplayResult {
  url: string;
  excerpt: string;
  title: string;
}

// Module-level cache survives mount/unmount cycles of the modal so the Pagefind
// library only downloads once. In dev mode with HMR, a hard refresh resets this
// if the library upgrades unexpectedly.
let pagefindCache: PagefindAPI | null = null;

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<DisplayResult[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">(
    "idle"
  );
  const [searchError, setSearchError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    if (pagefindCache) {
      setStatus("ready");
      return;
    }
    if (status !== "idle") return;
    setStatus("loading");
    (async () => {
      try {
        // @ts-expect-error pagefind.js is loaded at runtime from public/_pagefind/
        const pf = (await import(/* webpackIgnore: true */ /* turbopackIgnore: true */ "/_pagefind/pagefind.js")) as PagefindAPI;
        pagefindCache = pf;
        setStatus("ready");
      } catch {
        setStatus("error");
      }
    })();
  }, [open, status]);

  useEffect(() => {
    if (!open) return;
    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    inputRef.current?.focus();
    return () => {
      previouslyFocusedRef.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (status !== "ready" || !pagefindCache || !query.trim()) {
      setResults([]);
      setSearchError(null);
      return;
    }
    let cancelled = false;
    const handle = setTimeout(async () => {
      try {
        const search = await pagefindCache!.search(query);
        if (cancelled) return;
        const top5 = search.results.slice(0, 5);
        const data = await Promise.all(top5.map((r) => r.data()));
        if (cancelled) return;
        setResults(
          data.map((d) => ({
            url: d.url,
            excerpt: d.excerpt,
            title: d.meta?.title ?? d.url,
          }))
        );
        setSearchError(null);
      } catch {
        if (cancelled) return;
        setResults([]);
        setSearchError("Search hit an error. Check your connection and try again.");
      }
    }, 150);
    return () => {
      cancelled = true;
      clearTimeout(handle);
    };
  }, [query, status]);

  if (!open) return null;

  return (
    <div
      ref={backdropRef}
      onClick={(e) => {
        if (e.target === backdropRef.current) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      className="fixed inset-0 z-50 flex items-start justify-center bg-wine/40 px-4 pt-20 sm:pt-24"
    >
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-taupe bg-paper shadow-2xl">
        <div className="flex items-center gap-2 border-b border-taupe p-4">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tours, gallery, pages…"
            aria-label="Search query"
            className="flex-1 bg-transparent text-lg text-wine placeholder:text-rose focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="-mr-1 rounded-md p-2 text-rose transition-colors hover:bg-parchment hover:text-wine focus-visible:bg-parchment focus-visible:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {status === "loading" && (
            <p className="p-4 text-sm text-rose">Loading search…</p>
          )}
          {status === "error" && (
            <p className="p-4 text-sm text-rose">
              Search index isn&apos;t available. In development, run{" "}
              <code className="rounded bg-parchment px-1 font-mono text-xs text-wine">
                npm run build
              </code>{" "}
              once to generate it.
            </p>
          )}
          {status === "ready" && !query.trim() && (
            <p className="p-4 text-sm text-rose">
              Start typing to search across tours, gallery, and pages.
            </p>
          )}
          {status === "ready" && searchError && (
            <p className="p-4 text-sm text-rose">{searchError}</p>
          )}
          {status === "ready" && !searchError && query.trim() && results.length === 0 && (
            <p className="p-4 text-sm text-rose">
              No results for &ldquo;{query}&rdquo;.
            </p>
          )}
          {results.length > 0 && (
            <ul className="divide-y divide-taupe">
              {results.map((r) => (
                <li key={r.url}>
                  <Link
                    href={r.url}
                    onClick={onClose}
                    className="block p-4 transition-colors hover:bg-parchment focus-visible:bg-parchment focus-visible:outline-none"
                  >
                    <p className="font-medium text-wine">{r.title}</p>
                    <p
                      className="mt-1 line-clamp-2 text-sm text-rose"
                      dangerouslySetInnerHTML={{ __html: r.excerpt }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
