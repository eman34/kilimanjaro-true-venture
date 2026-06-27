/* Inline sub-tour card, shared by Zanzibar (packages + day trips) and
   Cultural (experiences). Sub-tours are comparison objects, not
   destinations — display-only, no per-item image, no link. Optional slots
   (durationLine, price, bestFor) render only when the field is present. */

export interface SubTourCardProps {
  eyebrow: string;
  name: string;
  durationLine?: string;
  price?: string;
  priceUnit?: string;
  summary: string;
  bestFor?: string;
  items: string[];
}

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-gold-deep shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function SubTourCard({
  eyebrow,
  name,
  durationLine,
  price,
  priceUnit,
  summary,
  bestFor,
  items,
}: SubTourCardProps) {
  return (
    <article className="bg-parchment rounded-2xl p-6 md:p-8 border border-taupe/20 hover:border-gold/40 transition-colors flex flex-col">
      <p className="text-gold-deep text-[11px] uppercase tracking-[0.18em] font-semibold mb-2">
        {eyebrow}
      </p>
      <h3 className="text-xl md:text-2xl font-bold text-olive leading-snug">
        {name}
      </h3>
      {durationLine && (
        <p className="text-olive/65 text-sm mt-1">{durationLine}</p>
      )}

      {price && (
        <p className="text-olive mt-4">
          <span className="text-olive/65 text-xs uppercase tracking-wider font-semibold mr-2">
            From
          </span>
          <span className="font-bold text-2xl text-gold-deep">{price}</span>
          {priceUnit && <span className="text-olive/65 text-sm"> {priceUnit}</span>}
        </p>
      )}

      <p className="text-olive/80 text-sm leading-relaxed mt-4">{summary}</p>

      {bestFor && (
        <p className="text-olive/65 text-sm mt-3">
          <span className="font-semibold text-olive/80">Best for:</span> {bestFor}
        </p>
      )}

      {items.length > 0 && (
        <ul className="mt-5 pt-5 border-t border-taupe/40 space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-olive/85 text-sm"
            >
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
