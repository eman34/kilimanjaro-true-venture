import Link from "next/link";

/* "Continue to another part of the site" CTA. Reuses the site-wide .btn-primary
   look (gold fill → gold-deep on hover) so it matches the Get in Touch button. */

export default function SectionLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`btn-primary ${className}`}>
      {children}
    </Link>
  );
}
