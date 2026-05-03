import InfiniteSlider from './InfiniteSlider';

export default function LogoCloud({ logos, className = '' }) {
  return (
    <div
      dir="ltr"
      className={`overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)] ${className}`}
    >
      <InfiniteSlider gap={32} reverse duration={22}>
        {logos.map((logo, index) => (
          <img
            key={`logo-${logo.alt}-${index}`}
            src={logo.src}
            alt={logo.alt}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={logo.width || 'auto'}
            height={logo.height || 'auto'}
            className="pointer-events-none h-12 select-none object-contain opacity-100 mix-blend-screen will-change-transform md:h-14"
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
