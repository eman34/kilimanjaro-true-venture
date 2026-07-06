import type { Metadata } from "next";

/* Internal design scratch pages — keep them out of search engines. */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function DesignPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
