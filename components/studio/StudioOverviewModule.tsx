'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Interactive3DViewport, ThreeDSceneMode } from './Interactive3DViewport';

export interface StudioOverviewModuleProps {
  id: string;
  title: string;
  subtitle: string;
  serviceHref: string;
  skills: string[];
  caseStudyTitle: string;
  caseStudyHref: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  badge?: string;
}

// Map service slugs/IDs to 3D scene modes
function getSceneMode(id: string, href: string): ThreeDSceneMode {
  if (id.includes('experience') || href.includes('experience-design')) return 'experience-design';
  if (id.includes('creative') || href.includes('creative-strategy')) return 'creative-strategy';
  if (id.includes('digital') || href.includes('digital-products')) return 'digital-products';
  if (id.includes('ai') || href.includes('ai-intelligent') || id.includes('service-4')) return 'ai-intelligent-experiences';
  if (id.includes('cgi') || href.includes('cgi-immersive') || id.includes('service-5')) return 'cgi-immersive';
  if (id.includes('config') || href.includes('product-configurators') || id.includes('service-6')) return 'product-configurators';
  return 'general';
}

export function StudioOverviewModule({
  id,
  title,
  subtitle,
  serviceHref,
  skills: _skills,
  caseStudyTitle,
  caseStudyHref,
  description,
  imageSrc: _imageSrc,
  imageAlt: _imageAlt,
}: StudioOverviewModuleProps) {
  const sceneMode = getSceneMode(id, serviceHref);
  const isImageMode = id === 'service-1' || id === 'service-2';

  return (
    <section
      id={id}
      className="relative w-full min-h-screen flex items-center py-20 sm:py-28 px-6 sm:px-12 lg:px-20 bg-[#000000] text-white border-b border-white/10 overflow-hidden"
    >
      {/* Ambient background lighting: brightens the entire section with the image's luminous warmth */}
      {isImageMode && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Full-bleed blurred atmospheric backdrop */}
          <div className="absolute -inset-[20%] opacity-40 sm:opacity-50 filter blur-[90px] sm:blur-[140px] scale-125 transform-gpu">
            <Image
              src={_imageSrc}
              alt=""
              fill
              priority={id === 'service-1'}
              className="object-cover"
            />
          </div>

          {/* Warm radial light bloom radiating across the section */}
          <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[85vw] h-[85vw] max-w-[1200px] max-h-[1200px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.22)_0%,rgba(245,158,11,0.1)_45%,transparent_75%)] blur-3xl pointer-events-none" />

          {/* Soft directional gradient scrim ensuring editorial typography on the left remains perfectly readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-transparent pointer-events-none" />

          {/* Vertical edge fades to smoothly transition to adjoining chapters */}
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
        </div>
      )}

      <div className="w-full max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* LEFT COLUMN: Title (Outline + Solid Subtitle), Link, Description, Case Study Link */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-10 sm:space-y-12 pr-0 lg:pr-8">
          {/* Title Container */}
          <div className="space-y-4">
            <h2 className="font-clash text-4xl sm:text-6xl md:text-7xl lg:text-[4.6vw] font-normal leading-[1.05] tracking-tight">
              <span className="outline-text-white block">
                {title}
              </span>
              <span className="text-white font-normal block mt-2 sm:mt-3 text-3xl sm:text-5xl md:text-6xl lg:text-[3.8vw]">
                {subtitle}
              </span>
            </h2>

            <div className="pt-2">
              <Link
                href={serviceHref}
                className="group inline-flex items-center gap-3 text-base sm:text-lg font-clash text-white/90 hover:text-white transition-all duration-300 hover:translate-x-2"
              >
                <span>Go to Service</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 408 408"
                  className="fill-white transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M354.2,219.4H-1.1v-32.1h353.5c-10.5-8-21.6-17.3-32.8-29.7c-23.5-23.5-44.5-54.4-57.5-84.7h38.3 c6.2,14.8,14.2,30.9,26,46.3c23.5,32.1,53.8,61.2,81.6,76.6V212c-13.6,8-27.8,18.5-43.3,32.1c-29.7,27.8-55,60.6-65.5,90.8h-37.7 c6.2-15.4,14.2-31.5,24.7-45.7C307.3,258.4,333.2,233.7,354.2,219.4z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-xl">
            <p className="font-clash text-lg sm:text-xl md:text-2xl text-white/80 font-light leading-relaxed">
              {description}
            </p>
          </div>

          {/* Case Study Link */}
          <div className="pt-4 border-t border-white/10">
            <span className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-2">
              Selected Project
            </span>
            <Link
              href={caseStudyHref}
              className="font-clash text-lg sm:text-xl text-white hover:text-white/80 hover:underline underline-offset-4 font-normal transition-colors"
            >
              {caseStudyTitle} &rarr;
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-6 xl:col-span-6 flex justify-center items-center">
          {isImageMode ? (
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[1/1] max-w-[680px] flex items-center justify-center">
              {/* Diffused warm light bloom directly behind the image */}
              <div className="absolute -inset-8 sm:-inset-14 rounded-full bg-gradient-to-tr from-amber-500/30 via-orange-400/20 to-violet-500/25 blur-3xl -z-10 pointer-events-none" />

              {/* Seamless borderless image with smooth radial feathered edge blend */}
              <div className="relative w-full h-full [mask-image:radial-gradient(ellipse_at_center,black_45%,rgba(0,0,0,0.85)_65%,transparent_96%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_45%,rgba(0,0,0,0.85)_65%,transparent_96%)]">
                <Image
                  src={_imageSrc}
                  alt={_imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover scale-105"
                />
                {/* Subtle soft edge vignette so outer perimeter seamlessly blends into the brightened background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.35)_75%,black_100%)] pointer-events-none" />
              </div>
            </div>
          ) : (
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[1/1] max-w-[650px] flex items-center justify-center overflow-hidden">
              <Interactive3DViewport mode={sceneMode} className="w-full h-full" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
