type SeamColor = "paper" | "parchment" | "olive";

const FILL: Record<SeamColor, string> = {
  paper: "text-paper",
  parchment: "text-parchment",
  olive: "text-olive",
};

const BG: Record<SeamColor, string> = {
  paper: "bg-paper",
  parchment: "bg-parchment",
  olive: "bg-olive",
};

/* Wavy seam where two section backgrounds meet. The two colors interlock
   along the torn line (tessellated) rather than a strip sitting on top.

   Two placements:
   - Between two sections:  <SectionDivider from="paper" to="parchment" />
     The band paints the lower section's color; the wave descending into it
     is the upper section's color.
   - Flush at the top of a section whose own background should show through
     (e.g. CTABanner's gradient):  <SectionDivider from="parchment" /> */
export default function SectionDivider({
  from,
  to,
}: {
  from?: SeamColor;
  to?: SeamColor;
}) {
  if (from && to) {
    return (
      <div className={BG[to]}>
        <Wave className={FILL[from]} />
      </div>
    );
  }
  return <Wave className={FILL[from ?? "paper"]} />;
}

function Wave({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 1440 28"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block w-full h-5 md:h-7 fill-current ${className}`}
    >
      <path d="M0,0 L1440,0 L1440,10 C1380,18 1310,7 1230,13 C1140,21 1060,5 970,11 C880,19 800,4 700,10 C610,17 520,5 430,12 C340,20 250,6 160,12 C90,17 40,8 0,14 Z" />
    </svg>
  );
}
