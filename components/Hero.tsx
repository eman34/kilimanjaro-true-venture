import Image from "next/image";

interface HeroProps {
  title: string;
  tagline?: string;
  backgroundImage?: string;
}

export default function Hero({ title, tagline, backgroundImage }: HeroProps) {
  return (
    <section className="relative aspect-[15/8] sm:aspect-[2/1] md:aspect-[3/1] min-h-[220px] w-full">
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest-deep to-forest" />
      )}
      <div className="absolute inset-0 bg-forest/30" />
      <div className="absolute inset-0 flex items-end">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pb-8 md:pb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-paper leading-[1.1] tracking-tight drop-shadow-md">
            {title}
          </h1>
          {tagline && (
            <p className="mt-2 md:mt-3 text-sm md:text-base text-paper/85 font-medium tracking-wide drop-shadow-sm">
              {tagline}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
