import { useEffect, useState, type FormEvent } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowDownRight,
  ArrowRight,
  Menu,
  X,
  Phone,
  CircleCheck,
  MessageCircle,
  Mail,
  MapPin,
  Clock3,
  ChevronDown,
} from 'lucide-react';
import { Link, useLocation } from 'wouter';

import {
  blogPosts,
  servicePageContent,
  type BlogImageKey,
  type BlogPost,
  type ServiceSlug,
} from './content';
import { locationProfiles } from './locationProfiles';
import logoPath from '@assets/optimized/kellys-logo-640.webp';
import rooflinePath from '@assets/optimized/roofline-1600.webp';
import rooflineMobilePath from '@assets/optimized/roofline-800.webp';
import roofTilesPath from '@assets/optimized/roof-tiles-1600.webp';
import roofTilesMobilePath from '@assets/optimized/roof-tiles-800.webp';
import roofFramingPath from '@assets/optimized/roof-framing-1600.webp';
import roofFramingMobilePath from '@assets/optimized/roof-framing-800.webp';
import rooferFixingRoofHeroPath from '@assets/optimized/roofer-fixing-1600.webp';
import rooferFixingRoofHeroMobilePath from '@assets/optimized/roofer-fixing-800.webp';
import interiorRenovationPath from '@assets/optimized/interior-renovation-1600.webp';
import interiorRenovationMobilePath from '@assets/optimized/interior-renovation-800.webp';
import homeRenovationStandardPath from '@assets/optimized/home-renovation-1600.webp';
import homeRenovationStandardMobilePath from '@assets/optimized/home-renovation-800.webp';
import heroVideoPath from '@assets/optimized/kellys-roofing-hero-720.mp4';

const mobileImageSources = new Map<string, string>([
  [rooflinePath, rooflineMobilePath],
  [roofTilesPath, roofTilesMobilePath],
  [roofFramingPath, roofFramingMobilePath],
  [rooferFixingRoofHeroPath, rooferFixingRoofHeroMobilePath],
  [interiorRenovationPath, interiorRenovationMobilePath],
  [homeRenovationStandardPath, homeRenovationStandardMobilePath],
]);

type Service = {
  number: string;
  title: string;
  intro: string;
  detail: string;
  image: string;
};

const services: Service[] = [
  {
    number: '01',
    title: 'Roof repairs',
    intro: 'A clear, practical response to leaks, storm damage and the small signs that should not be ignored.',
    detail: 'We inspect the issue, explain what needs doing and carry out focused repairs across Dublin homes and managed properties.',
    image: rooferFixingRoofHeroPath,
  },
  {
    number: '02',
    title: 'Roof replacement',
    intro: 'Built-up protection for roofs that have reached the end of their useful life.',
    detail: 'From strip and renew work to new slate or tile coverings, we plan the job around the building and the people using it.',
    image: roofTilesPath,
  },
  {
    number: '03',
    title: 'Flat roofing',
    intro: 'Durable flat-roof solutions for extensions, garages, commercial units and more.',
    detail: 'We help select a suitable system, pay close attention to falls and detailing, and leave the site properly finished.',
    image: roofFramingPath,
  },
  {
    number: '04',
    title: 'Interiors & building',
    intro: 'The considered work that brings a property back together after the roof is secure.',
    detail: 'Ceilings, plastering, drylining, carpentry and interior finishing handled as part of one joined-up scope.',
    image: interiorRenovationPath,
  },
];

const serviceSlugs: Record<string, string> = {
  'Roof repairs': 'roof-repairs',
  'Roof replacement': 'roof-replacement',
  'Flat roofing': 'flat-roofing',
  'Interiors & building': 'interiors-building',
};

const serviceNavItems = services.map((service) => [service.title, `/services/${serviceSlugs[service.title]}`] as const);

const projectNotes = [
  ['01', 'Weather-tight first', 'We deal with the source of the problem, not just the visible mark on the ceiling.'],
  ['02', 'Straight answers', 'A tidy explanation of the work, the options and the next sensible step.'],
  ['03', 'Respect for your property', 'Careful preparation, clean working habits and a proper handover.'],
];

const galleryItems = [
  ['01', 'Roof lines', 'A closer look at the roof forms and details that shape a Dublin home.', rooflinePath],
  ['02', 'New tile work', 'Materials selected and laid to give the roof a clean, lasting finish.', roofTilesPath],
  ['03', 'Framing and structure', 'The work beneath the surface, where a sound roof begins.', roofFramingPath],
  ['04', 'Work at height', 'Careful, practical work carried out with the property in view.', rooferFixingRoofHeroPath],
  ['05', 'Interiors in progress', 'The inside of a property brought back together after the roof is secure.', interiorRenovationPath],
  ['06', 'The finished detail', 'The small decisions that help a renovated space feel considered.', homeRenovationStandardPath],
];

const blogCategories = services.map((service) => service.title);

const blogImages: Record<BlogImageKey, string> = {
  repair: rooferFixingRoofHeroPath,
  replacement: roofTilesPath,
  flat: roofFramingPath,
  interiors: interiorRenovationPath,
};

const locationNames = `
Adamstown
Artane
Ashtown
Balbriggan
Baldoyle
Balgriffin
Ballinteer
Ballsbridge
Ballyboden
Ballybough
Ballybrack
Ballyfermot
Ballygall
Ballymount
Ballymun
Ballyroan
Bayside
Beaumont
Belfield
Blackrock
Blanchardstown
Bluebell
Booterstown
Cabinteely
Cabra
Carrickmines
Castleknock
Chapelizod
Cherry Orchard
Churchtown
Clondalkin
Clongriffin
Clonshaugh
Clonskeagh
Clontarf
Coolock
Crumlin
Dalkey
Darndale
Dolphins Barn
Donabate
Donaghmede
Donnybrook
Donnycarney
Drimnagh
Drumcondra
Dundrum
Dún Laoghaire
East Wall
Fairview
Finglas
Foxrock
Glasnevin
Glasthule
Glenageary
Goatstown
Greenhills
Harold's Cross
Howth
Inchicore
Irishtown
Kilbarrack
Killester
Killiney
Kilmacud
Kilmainham
Kilmarnock
Kimmage
Kinsealy
Knocklyon
Leopardstown
Lucan
Lusk
Malahide
Marino
Milltown
Monkstown
Mount Merrion
Mulhuddart
Newcastle
Ongar
Palmerstown
Phibsborough
Portmarnock
Portobello
Raheny
Ranelagh
Rathcoole
Rathfarnham
Rathgar
Rathmines
Rialto
Ringsend
`.trim().split('\n');

const slugify = (value: string) => value
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

const locationItems = locationNames.map((name) => ({ name, slug: slugify(name) }));

const locationServiceDescriptionEndings = [
  'Get clear advice and a free quote from Kellys Roofing & Interiors.',
  'Ask Kellys Roofing & Interiors about the most practical next step.',
  'Arrange an assessment and free quote with Kellys Roofing & Interiors.',
  'Get straightforward guidance shaped around the property.',
] as const;

function getLocationServiceDescription(area: (typeof locationItems)[number], service: Service) {
  const areaIndex = locationItems.findIndex((item) => item.slug === area.slug);
  const serviceIndex = services.findIndex((item) => item.title === service.title);
  const endingIndex = (areaIndex + serviceIndex * 3) % locationServiceDescriptionEndings.length;

  return `${service.title} services for homes and properties in ${area.name}, Dublin. ${locationServiceDescriptionEndings[endingIndex]}`;
}

export const prerenderRoutes = [
  '/',
  '/work',
  '/blog',
  '/locations',
  ...services.map((service) => `/services/${serviceSlugs[service.title]}`),
  ...blogPosts.map((post) => `/blog/${post.slug}`),
  ...locationItems.map((area) => `/locations/${area.slug}`),
  ...locationItems.flatMap((area) =>
    services.map((service) => `/locations/${area.slug}/${serviceSlugs[service.title]}`),
  ),
];

export function getPageMetadata(location: string) {
  const activeService = services.find((service) => `/services/${serviceSlugs[service.title]}` === location);
  const activeBlogPost = blogPosts.find((post) => `/blog/${post.slug}` === location);
  const activeLocation = locationItems.find((area) => `/locations/${area.slug}` === location);
  const locationServiceMatch = location.match(/^\/locations\/([^/]+)\/([^/]+)$/);
  const activeLocationService = locationServiceMatch
    ? {
        area: locationItems.find((item) => item.slug === locationServiceMatch[1]),
        service: services.find((item) => serviceSlugs[item.title] === locationServiceMatch[2]),
      }
    : undefined;

  const title = activeService
    ? `${activeService.title} | Kellys Roofing Dublin`
    : activeBlogPost
      ? `${activeBlogPost.title} | Kellys Roofing Dublin`
    : location === '/work'
      ? 'Our Work | Kellys Roofing & Interiors | Dublin'
      : location === '/blog'
        ? 'Blog | Kellys Roofing & Interiors | Dublin'
        : activeLocationService?.area && activeLocationService.service
          ? `${activeLocationService.service.title} in ${activeLocationService.area.name} | Kellys Roofing Dublin`
          : activeLocation
            ? `Roofing Services in ${activeLocation.name} | Kellys Roofing Dublin`
            : location === '/locations'
              ? 'Dublin Service Areas | Kellys Roofing & Interiors'
              : 'Kellys Roofing & Interiors | Dublin';

  const description = activeService
    ? `${activeService.intro} Kellys Roofing & Interiors serves homes and properties across Dublin.`
    : activeBlogPost
      ? activeBlogPost.metaDescription
    : location === '/work'
      ? 'Explore selected roofing, building and interior work from Kellys Roofing & Interiors in Dublin.'
      : location === '/blog'
        ? 'Read practical notes about roof repairs, replacement and flat roofing from Kellys Roofing & Interiors in Dublin.'
        : activeLocationService?.area && activeLocationService.service
          ? getLocationServiceDescription(activeLocationService.area, activeLocationService.service)
          : activeLocation
            ? locationProfiles[activeLocation.slug].metaDescription
            : location === '/locations'
              ? 'Explore all County Dublin service areas covered by Kellys Roofing & Interiors.'
              : 'Kellys Roofing & Interiors provides roofing, building and interior work across Dublin.';

  return { title, description };
}

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

function ResponsiveImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}) {
  const mobileSrc = mobileImageSources.get(src);

  return (
    <picture className="contents">
      {mobileSrc && <source media="(max-width: 767px)" srcSet={mobileSrc} />}
      <img src={src} alt={alt} loading={loading} decoding="async" className={className} />
    </picture>
  );
}

function OverlayImage({ src, alt, className = '', wrapperClassName = '', loading = 'lazy' }: { src: string; alt: string; className?: string; wrapperClassName?: string; loading?: 'eager' | 'lazy' }) {
  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      <ResponsiveImage src={src} alt={alt} loading={loading} className={`h-full w-full object-cover opacity-[55%] ${className}`} />
      <div className="pointer-events-none absolute inset-0 bg-primary/15" aria-hidden="true" />
    </div>
  );
}

function HeroVideo({ wrapperClassName = '', className = '' }: { wrapperClassName?: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-muted ${wrapperClassName}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={rooflineMobilePath}
        className={`h-full w-full object-cover opacity-[55%] ${className}`}
        aria-hidden="true"
      >
        <source src={heroVideoPath} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-primary/15" aria-hidden="true" />
    </div>
  );
}

function Header({ isServicePage = false, isGalleryPage = false, isBlogPage = false, isLocationPage = false }: { isServicePage?: boolean; isGalleryPage?: boolean; isBlogPage?: boolean; isLocationPage?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const isInnerPage = isServicePage || isGalleryPage || isBlogPage || isLocationPage;

  return (
    <header className="fixed top-0 z-[100] w-full bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-3 md:px-12">
        {isInnerPage ? (
          <Link href="/" onClick={closeMenu} className="relative z-[110] mix-blend-multiply" data-testid="link-logo">
            <img src={logoPath} alt="Kellys Roofing and Interiors" width="640" height="368" decoding="async" className="h-24 w-auto object-contain md:h-32" />
          </Link>
        ) : (
          <a href="#top" onClick={closeMenu} className="relative z-[110] mix-blend-multiply" data-testid="link-logo">
            <img src={logoPath} alt="Kellys Roofing and Interiors" width="640" height="368" decoding="async" className="h-24 w-auto object-contain md:h-32" />
          </a>
        )}
        
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          <div className="flex gap-6 mr-4">
            {serviceNavItems.map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-medium hover:text-primary transition-colors link-hover" data-testid={`link-nav-${serviceSlugs[label]}`}>
                {label}
              </Link>
            ))}
            <Link href="/work" className="text-sm font-medium hover:text-primary transition-colors link-hover">View our work</Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors link-hover">Blog</Link>
          </div>
          {isInnerPage ? (
            <Link href="/#contact" className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:bg-accent transition-colors" data-testid="button-nav-quote">
              Request Quote
            </Link>
          ) : (
            <button onClick={scrollToContact} className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:bg-accent transition-colors" data-testid="button-nav-quote">
              Request Quote
            </button>
          )}
        </nav>

        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="relative z-[110] p-2 text-primary lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

       {menuOpen && createPortal(
         <div className="fixed inset-0 z-[9999] min-h-[100dvh] overflow-y-auto bg-[#f7f5f2] px-6 py-5 lg:hidden" data-testid="mobile-menu">
           <div className="flex items-center justify-between border-b border-border pb-4">
             {isInnerPage ? (
               <Link href="/" onClick={closeMenu} className="mix-blend-multiply" data-testid="link-mobile-logo">
                  <img src={logoPath} alt="Kellys Roofing and Interiors" width="640" height="368" decoding="async" className="h-20 w-auto object-contain" />
               </Link>
             ) : (
               <a href="#top" onClick={closeMenu} className="mix-blend-multiply" data-testid="link-mobile-logo">
                  <img src={logoPath} alt="Kellys Roofing and Interiors" width="640" height="368" decoding="async" className="h-20 w-auto object-contain" />
               </a>
             )}
             <button onClick={closeMenu} className="p-2 text-primary" aria-label="Close menu">
               <X size={28} />
             </button>
           </div>
           <nav className="mt-8 flex flex-col gap-6 text-2xl font-display text-primary" aria-label="Mobile navigation">
             {serviceNavItems.map(([label, href]) => (
               <Link key={href} href={href} onClick={closeMenu} className="border-b border-border pb-4" data-testid={`link-mobile-${serviceSlugs[label]}`}>
                 {label}
               </Link>
             ))}
             <Link href="/work" onClick={closeMenu} className="border-b border-border pb-4" data-testid="link-mobile-work">View our work</Link>
             <Link href="/blog" onClick={closeMenu} className="border-b border-border pb-4" data-testid="link-mobile-blog">Blog</Link>
              {isInnerPage ? (
               <Link href="/#contact" onClick={closeMenu} className="border-b border-border pb-4" data-testid="link-mobile-contact">Request a quote</Link>
             ) : (
               <a href="#contact" onClick={closeMenu} className="border-b border-border pb-4" data-testid="link-mobile-contact">Request a quote</a>
             )}
           </nav>
         </div>,
         document.body,
       )}
    </header>
  );
}

const siteFaqs = [
  {
    question: 'Do you provide free roofing quotes?',
    answer: 'Yes. Contact us to discuss the property and arrange a free, no-obligation quotation for the work that can be assessed.',
  },
  {
    question: 'Which parts of Dublin do you cover?',
    answer: 'We serve homes, landlords and commercial clients throughout Dublin County, including all 93 areas listed on this website.',
  },
  {
    question: 'Can you help with an active roof leak?',
    answer: 'Yes. We inspect the visible signs and accessible roof details to identify the likely source before recommending a proportionate repair.',
  },
  {
    question: 'Do you repair slate and tiled roofs?',
    answer: 'Yes. Our roofing work includes slipped or damaged slates and tiles, flashing, valleys, ridges, verges and related weatherproofing details.',
  },
  {
    question: 'When might a roof need replacement?',
    answer: 'Replacement may be worth considering when deterioration is widespread, several unrelated leaks recur or the existing covering is no longer economical to repair.',
  },
  {
    question: 'Do you install and repair flat roofs?',
    answer: 'Yes. We work on flat roofs over extensions, garages and commercial spaces, with attention to the deck, falls, outlets, edges and waterproofing system.',
  },
  {
    question: 'Can you repair gutters and chimneys?',
    answer: 'Yes. Guttering, rainwater outlets, chimney repairs and adjoining flashing can be assessed as part of the wider roofing work.',
  },
  {
    question: 'Can you complete interior repairs after a leak?',
    answer: 'Yes. Ceilings, plastering, drylining, carpentry and interior finishing can be coordinated once the roof is secure and affected materials are ready.',
  },
] as const;

type FaqItem = {
  question: string;
  answer: string;
};

function FaqAccordion({
  items,
  idPrefix,
  layout = 'list',
}: {
  items: readonly FaqItem[];
  idPrefix: string;
  layout?: 'list' | 'grid';
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isGrid = layout === 'grid';

  return (
    <div className={isGrid ? 'grid grid-cols-1 items-start border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4' : 'border-t border-border'}>
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        const answerId = `${idPrefix}-answer-${index}`;

        return (
          <article key={faq.question} className={isGrid ? 'self-start border-b border-r border-border px-6 md:px-8' : 'border-b border-border'}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-8"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-display text-2xl leading-tight text-primary">
                {faq.question}
              </span>
              <ChevronDown
                size={24}
                className={`shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            <div
              id={answerId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
              aria-hidden={!isOpen}
            >
              <div className="overflow-hidden">
                <p className="max-w-[860px] pb-7 leading-7 text-foreground/75 md:pb-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function SiteFaq() {
  return (
    <section className="border-t border-border bg-background px-6 py-16 md:px-12 md:py-20" aria-labelledby="site-faq-title">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10 max-w-[760px] md:mb-14">
          <span className="kicker mb-6">Frequently asked questions</span>
          <h2 id="site-faq-title" className="heading-section text-primary">Clear answers before work begins.</h2>
        </div>
        <FaqAccordion items={siteFaqs} idPrefix="site-faq" layout="grid" />
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <>
      <SiteFaq />
      <footer className="border-t border-border bg-white px-6 py-16 text-foreground md:px-12 md:py-20">
      <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-[repeat(14,minmax(0,1fr))] md:gap-8">
        <div className="md:col-span-4">
          <img src={logoPath} alt="Kellys Roofing and Interiors" width="640" height="368" loading="lazy" decoding="async" className="h-28 w-auto object-contain md:h-32" />
          <p className="mt-6 max-w-[460px] text-sm leading-relaxed text-foreground/70">
            Professional roof repairs Dublin, slate and tile roofing, guttering, chimney repairs, flat roofs, and emergency roofing services since 2009. Serving all areas of Dublin County.
          </p>
          <p className="mt-5 max-w-[460px] font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
            Fully registered contractor | Insured roofing team | Free quotation
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="kicker mb-5">Quick links</p>
          <nav className="flex flex-col items-start gap-3 text-sm" aria-label="Footer navigation">
            {serviceNavItems.map(([label, href]) => (
              <Link key={href} href={href} className="link-hover">{label}</Link>
            ))}
            <Link href="/blog" className="link-hover">Blog</Link>
            <Link href="/#contact" className="link-hover">Free quote</Link>
          </nav>
        </div>

        <div className="md:col-span-2">
          <p className="kicker mb-5">Service areas</p>
          <div className="flex max-w-[240px] flex-col items-start gap-4">
            <Link href="/locations" className="link-hover text-sm">County Dublin (93 areas)</Link>
            <Link href="/locations" className="inline-flex min-h-10 items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary link-hover">
              View all locations <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="kicker mb-5">Contact us</p>
          <div className="flex flex-col items-start gap-3 text-sm">
            <a href="tel:+353863395381" className="inline-flex min-h-10 items-center gap-2 font-bold uppercase tracking-[0.12em] text-primary link-hover" aria-label="Call Kellys Roofing at +353 86 339 5381">
              <Phone size={17} /> Call Kellys Roofing
            </a>
            <a href="https://wa.me/353863395381" target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-2 font-bold uppercase tracking-[0.12em] text-[#128C7E] link-hover" aria-label="WhatsApp us">
              <svg viewBox="0 0 32 32" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M16 3.2a12.8 12.8 0 0 0-10.95 19.44L3.2 28.8l6.34-1.8A12.8 12.8 0 1 0 16 3.2Zm0 23.3a10.45 10.45 0 0 1-5.33-1.46l-.38-.23-3.77 1.07 1.1-3.67-.25-.39A10.47 10.47 0 1 1 16 26.5Zm5.74-7.75c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1.01-.99 1.22-.18.21-.37.24-.68.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.33-.26-.61-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.64s1.13 3.06 1.29 3.27c.16.21 2.22 3.39 5.38 4.76.75.32 1.33.51 1.78.65.75.24 1.43.21 1.97.13.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37Z" />
              </svg>
              WhatsApp us
            </a>
            <a href="mailto:akroofing@Outlook.com" className="link-hover">Email Kellys Roofing</a>
            <address className="mt-2 not-italic leading-relaxed text-foreground/70">
              The Tenters<br />
              3 O'CURRY AVENUE<br />
              DUBLIN 8
            </address>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="kicker mb-5">Find us</p>
          <iframe
            title="Map to The Tenters, Dublin 8"
            src="https://www.google.com/maps?q=The%20Tenters%2C%203%20O%27Curry%20Avenue%2C%20Dublin%208&output=embed"
            className="h-36 w-full border-0 grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="md:col-span-2">
          <p className="kicker mb-5">Follow along</p>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="group flex h-36 w-full flex-col justify-between bg-[#1877F2] p-4 text-white transition-colors hover:bg-[#125dcc]"
            aria-label="View our work on Facebook"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9 fill-current">
              <path d="M13.5 21v-8h2.75l.41-3h-3.16V8.08c0-.87.24-1.46 1.5-1.46h1.78V3.94c-.31-.04-1.38-.14-2.62-.14-2.59 0-4.36 1.58-4.36 4.48V10H7v3h2.8v8h3.7Z" />
            </svg>
            <span className="inline-flex items-end justify-between gap-2 text-xs font-bold uppercase tracking-[0.12em]">
              <span className="max-w-[140px]">View our work on Facebook</span>
              <ArrowRight size={15} className="-rotate-45 shrink-0 transition-transform group-hover:rotate-0" />
            </span>
          </a>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1600px] flex-col justify-between gap-4 border-t border-border pt-5 font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground md:flex-row">
        <span>Serving Dublin County</span>
        <span>Kellys Roofing & Interiors · Dublin</span>
        <a href="https://websites4tradesmen.ie/" target="_blank" rel="noreferrer" className="link-hover" aria-label="Powered by Websites 4 Tradesmen">
          Powered by websites4tradesmen.ie
        </a>
      </div>
      </footer>
    </>
  );
}

function ServicePage({ service }: { service: Service }) {
  const serviceSlug = serviceSlugs[service.title] as ServiceSlug;
  const content = servicePageContent[serviceSlug];
  const relatedArticle = blogPosts.find((post) => post.serviceSlug === serviceSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  return (
    <main className="texture-overlay min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header isServicePage />

      <article className="pt-36 md:pt-44">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12">
            <ArrowRight size={16} className="rotate-180" /> Back to all services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-7">
               <span className="kicker mb-8">{service.number} / Dublin</span>
              <h1 className="heading-hero text-primary mb-8">{service.title}</h1>
              <div className="max-w-[800px] space-y-5">
                <p className="text-xl leading-relaxed text-foreground/80 md:text-2xl">
                  {service.intro}
                </p>
                <p className="text-base leading-8 text-foreground/70">
                  Serving Dublin since 2009, our insured team approaches every {service.title.toLowerCase()} project with careful assessment, straightforward advice and a clearly explained scope of work.
                </p>
                <p className="text-base leading-8 text-foreground/70">
                  Where the work continues below the roof, we can also coordinate ceilings, plastering, drylining, carpentry and interior finishing as one joined-up project.
                </p>
                <p className="text-base font-semibold leading-8 text-foreground">
                  Contact us today for a free, no-obligation quote and practical advice on the right next step for your property.
                </p>
                <div className="flex flex-col gap-3 pt-3 sm:flex-row">
                  <Link href="/#contact" className="inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-accent">
                    <Mail size={18} aria-hidden="true" /> Contact us
                  </Link>
                  <a href="https://wa.me/353863395381" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-3 border border-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground" aria-label={`Discuss ${service.title.toLowerCase()} with Kellys Roofing on WhatsApp`}>
                    <MessageCircle size={18} aria-hidden="true" /> WhatsApp us
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 w-full">
              <HeroVideo
                wrapperClassName="aspect-[4/5] w-full bg-muted reveal"
              />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 border-t border-border pb-16 pt-16 md:mt-20 md:pb-20 md:pt-20 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
               <h2 className="heading-section">What is involved</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-[700px]">
                 {content.overview}
              </p>
              
              <div className="border-t border-border">
                 {content.processSteps.map((item, i) => (
                  <div key={i} className="flex gap-6 md:gap-12 py-8 border-b border-border items-start">
                    <span className="font-mono text-sm text-primary">0{i + 1}</span>
                    <p className="text-base md:text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

           <div className="border-t border-border">
             {content.editorialSections.map((section, index) => (
               <section key={section.heading} className="grid grid-cols-1 gap-8 border-b border-border py-14 md:py-20 lg:grid-cols-12 lg:gap-20">
                 <div className="lg:col-span-4">
                   <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">0{index + 1} / Detail</span>
                   <h2 className="mt-5 font-display text-4xl leading-tight text-primary md:text-5xl">{section.heading}</h2>
                 </div>
                 <div className="space-y-6 text-lg leading-relaxed text-foreground/80 lg:col-span-7 lg:col-start-6">
                   {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                 </div>
               </section>
             ))}
           </div>

           <section className="grid grid-cols-1 gap-10 border-b border-border py-14 md:py-20 lg:grid-cols-12 lg:gap-20">
             <div className="lg:col-span-5">
               <span className="kicker mb-6">When to arrange an inspection</span>
               <h2 className="heading-section">Signs and points worth checking.</h2>
             </div>
             <div className="border-t border-border lg:col-span-7">
               {content.signsOrConsiderations.map((item, index) => (
                 <div key={item} className="flex gap-6 border-b border-border py-6">
                   <span className="font-mono text-xs text-primary">0{index + 1}</span>
                   <p className="leading-relaxed text-foreground/80">{item}</p>
                 </div>
               ))}
             </div>
           </section>

           <section className="grid grid-cols-1 gap-10 py-14 md:py-20 lg:grid-cols-12 lg:gap-20">
             <div className="lg:col-span-4">
               <span className="kicker mb-6">Practical answers</span>
               <h2 className="heading-section">Questions about {service.title.toLowerCase()}.</h2>
             </div>
              <div className="lg:col-span-8">
                <FaqAccordion items={content.faqs} idPrefix={`${serviceSlugs[service.title]}-faq`} />
             </div>
           </section>

           {relatedArticle && (
             <aside className="mb-16 grid grid-cols-1 gap-8 border border-border bg-white p-8 md:mb-20 md:p-12 lg:grid-cols-12 lg:items-end">
               <div className="lg:col-span-8">
                 <span className="kicker mb-6">Related guide</span>
                 <h2 className="font-display text-3xl text-primary md:text-5xl">{relatedArticle.title}</h2>
                 <p className="mt-5 max-w-[760px] leading-relaxed text-foreground/70">{relatedArticle.excerpt}</p>
               </div>
               <div className="lg:col-span-4 lg:text-right">
                 <Link href={`/blog/${relatedArticle.slug}`} className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-primary link-hover">
                   Read the full guide <ArrowRight size={17} />
                 </Link>
               </div>
             </aside>
           )}
        </div>
      </article>

      <section className="bg-primary px-6 py-16 text-primary-foreground md:px-12 md:py-20">
        <div className="mx-auto max-w-[1600px] flex flex-col md:flex-row gap-12 justify-between items-start md:items-end">
          <div className="max-w-[800px]">
             <span className="kicker text-primary-foreground mb-8">Ready to take the next step?</span>
             <h2 className="heading-hero">Tell us what the property needs.</h2>
          </div>
          <Link href="/#contact" className="inline-flex items-center gap-4 bg-primary-foreground text-primary px-8 py-4 text-base font-medium hover:bg-accent hover:text-primary-foreground transition-colors shrink-0">
             Request a quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="texture-overlay min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header isGalleryPage />

      <article className="pt-36 md:pt-44">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-10 border-b border-border pb-14 md:grid-cols-12 md:gap-14 md:pb-20">
            <div className="md:col-span-8">
              <span className="kicker mb-8">Selected work / Dublin</span>
              <h1 className="heading-hero max-w-[900px] text-primary">Work that holds up.</h1>
            </div>
            <div className="md:col-span-4">
              <HeroVideo wrapperClassName="mb-8 aspect-[4/3] w-full" />
              <p className="max-w-[360px] text-lg leading-relaxed text-foreground/70">
                A closer look at the roofs, structures and interiors behind the Kellys approach.
              </p>
            </div>
          </div>

          <section className="grid grid-cols-1 gap-x-8 gap-y-14 py-14 md:grid-cols-12 md:gap-y-20 md:py-20" aria-label="Gallery of roofing and building work">
            {galleryItems.map(([number, title, description, image], index) => (
              <figure key={number} className={`group ${index % 3 === 0 ? 'md:col-span-7 md:col-start-1' : 'md:col-span-5 md:col-start-8'}`}>
                <OverlayImage
                  src={image}
                  alt={title}
                  wrapperClassName={`bg-muted ${index % 3 === 0 ? 'aspect-[4/3]' : 'aspect-[5/6]'}`}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="mt-6 flex gap-6 border-t border-border pt-4">
                  <span className="font-mono text-xs text-primary">{number}</span>
                  <div>
                    <h2 className="font-display text-2xl text-primary">{title}</h2>
                    <p className="mt-2 max-w-[420px] text-sm leading-relaxed text-foreground/70">{description}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </section>
        </div>
      </article>

      <section className="bg-primary px-6 py-16 text-primary-foreground md:px-12 md:py-20">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <span className="kicker mb-8 text-primary-foreground">Have a property in mind?</span>
            <h2 className="heading-section max-w-[700px]">Let’s talk through the next step.</h2>
          </div>
          <Link href="/#contact" className="inline-flex shrink-0 items-center gap-4 bg-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:bg-accent hover:text-primary-foreground">
            Request a quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="texture-overlay min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header isBlogPage />

      <article className="pt-36 md:pt-44">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <header className="grid grid-cols-1 gap-10 border-b border-border pb-14 md:grid-cols-12 md:gap-14 md:pb-20">
            <div className="md:col-span-8">
              <span className="kicker mb-8">The Kellys journal / Dublin</span>
              <h1 className="heading-hero max-w-[900px] text-primary">Useful things to know about your roof.</h1>
            </div>
            <div className="md:col-span-4">
              <HeroVideo wrapperClassName="mb-8 aspect-[4/3] w-full" />
              <p className="max-w-[360px] text-lg leading-relaxed text-foreground/70">
                In-depth, straightforward guides to repairs, replacement, flat roofing and restoring the rooms below.
              </p>
            </div>
          </header>

          <div className="pb-16 md:pb-24">
            {blogCategories.map((category) => (
              <section key={category} className="border-b border-border py-12 md:py-16" aria-labelledby={`blog-category-${category}`}>
                <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                  <h2 id={`blog-category-${category}`} className="heading-section text-4xl md:text-5xl">{category}</h2>
                   <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">01 article</span>
                </div>

                 <div className="grid grid-cols-1 gap-12">
                  {blogPosts.filter((post) => post.category === category).map((post, index) => (
                     <article key={post.title} className="group grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
                       <Link href={`/blog/${post.slug}`} className="block md:col-span-6" aria-label={`Read ${post.title}`}>
                         <OverlayImage
                           src={blogImages[post.imageKey]}
                           alt=""
                           wrapperClassName="aspect-[16/10] bg-muted"
                           className="transition-transform duration-700 group-hover:scale-105"
                         />
                       </Link>
                       <div className="border-t border-border pt-4 md:col-span-6 md:pb-2">
                         <div className="mb-5 flex items-center justify-between gap-4">
                           <span className="font-mono text-xs text-primary">0{index + 1} / {post.category}</span>
                           <span className="font-mono text-xs text-muted-foreground">{post.readTime}</span>
                         </div>
                         <h3 className="max-w-[620px] font-display text-3xl text-primary md:text-5xl">
                           <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                         </h3>
                         <p className="mt-5 max-w-[620px] text-base leading-relaxed text-foreground/70">{post.excerpt}</p>
                         <Link href={`/blog/${post.slug}`} className="mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                           Read the guide <ArrowRight size={16} className="-rotate-45 transition-transform group-hover:rotate-0" />
                         </Link>
                       </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>

      <section className="bg-primary px-6 py-16 text-primary-foreground md:px-12 md:py-20">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <span className="kicker mb-8 text-primary-foreground">Have a property in mind?</span>
            <h2 className="heading-section max-w-[700px]">Let’s talk through the next step.</h2>
          </div>
          <Link href="/#contact" className="inline-flex shrink-0 items-center gap-4 bg-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:bg-accent hover:text-primary-foreground">
            Request a quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function BlogArticlePage({ post }: { post: BlogPost }) {
  const service = services.find((item) => serviceSlugs[item.title] === post.serviceSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  return (
    <main className="texture-overlay min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header isBlogPage />

      <article className="pt-36 md:pt-44">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <Link href="/blog" className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <ArrowRight size={16} className="rotate-180" /> Back to the journal
          </Link>

          <header className="grid grid-cols-1 gap-10 border-b border-border pb-14 md:grid-cols-12 md:gap-14 md:pb-20">
            <div className="md:col-span-8">
              <span className="kicker mb-8">{post.publishedLabel} / {post.category}</span>
              <h1 className="heading-hero max-w-[1100px] text-primary">{post.title}</h1>
              <p className="mt-10 max-w-[850px] text-xl leading-relaxed text-foreground/75 md:text-2xl">{post.dek}</p>
            </div>
            <div className="md:col-span-4">
              <OverlayImage
                src={blogImages[post.imageKey]}
                alt=""
                wrapperClassName="aspect-[4/5] w-full bg-muted"
              />
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                <span>Dublin</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-20">
            <aside className="lg:col-span-3">
              <div className="sticky top-40 border-t border-border pt-5">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">In this guide</p>
                <ol className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/65">
                  {post.sections.map((section, index) => (
                    <li key={section.heading}>
                      <a href={`#section-${index + 1}`} className="transition-colors hover:text-primary">
                        0{index + 1} — {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            <div className="lg:col-span-8 lg:col-start-5">
              {post.sections.map((section, index) => (
                <section key={section.heading} id={`section-${index + 1}`} className="scroll-mt-40 border-t border-border py-10 first:pt-0 first:border-t-0">
                  <span className="font-mono text-xs text-primary">0{index + 1}</span>
                  <h2 className="mt-5 font-display text-4xl leading-tight text-primary md:text-5xl">{section.heading}</h2>
                  <div className="mt-7 space-y-6 text-lg leading-[1.8] text-foreground/80">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.bullets && (
                      <ul className="space-y-3 border-l border-primary pl-6">
                        {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </div>

          {service && (
            <aside className="mb-16 grid grid-cols-1 gap-8 border border-border bg-white p-8 md:mb-24 md:p-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="kicker mb-6">Related service</span>
                <h2 className="font-display text-4xl text-primary md:text-5xl">{service.title}</h2>
                <p className="mt-5 max-w-[720px] text-lg leading-relaxed text-foreground/70">{service.intro}</p>
              </div>
              <div className="flex flex-wrap gap-5 lg:col-span-4 lg:justify-end">
                <Link href={`/services/${post.serviceSlug}`} className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.14em] text-primary link-hover">
                  Explore the service <ArrowRight size={17} />
                </Link>
                <Link href="/#contact" className="inline-flex items-center gap-3 bg-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground">
                  Request a quote <ArrowRight size={17} />
                </Link>
              </div>
            </aside>
          )}
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}

function LocationsHubPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="texture-overlay min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header isLocationPage />

      <article className="pt-36 md:pt-44">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <header className="grid grid-cols-1 gap-10 border-b border-border pb-14 md:grid-cols-12 md:gap-14 md:pb-20">
            <div className="md:col-span-8">
              <span className="kicker mb-8">Service areas / County Dublin</span>
              <h1 className="heading-hero max-w-[900px] text-primary">Roofing help, close to home.</h1>
            </div>
            <div className="md:col-span-4">
              <HeroVideo wrapperClassName="mb-8 aspect-[4/3] w-full" />
              <p className="max-w-[360px] text-lg leading-relaxed text-foreground/70">
                Kellys Roofing & Interiors covers County Dublin with practical roofing, replacement, flat-roof and interior work.
              </p>
            </div>
          </header>

          <section className="py-14 md:py-20" aria-labelledby="dublin-locations-title">
            <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="kicker mb-5">County Dublin</span>
                <h2 id="dublin-locations-title" className="heading-section">93 service areas.</h2>
              </div>
              <p className="max-w-[340px] text-sm leading-relaxed text-foreground/70">
                Choose your area to see the roofing services available nearby.
              </p>
            </div>

            <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
              {locationItems.map((area, index) => (
                <Link
                  key={area.slug}
                  href={`/locations/${area.slug}`}
                  className="group flex items-center justify-between gap-4 border-b border-r border-border px-5 py-5 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <span className="font-mono text-xs opacity-60">{String(index + 1).padStart(2, '0')}</span>
                  <span className="flex-1 font-medium">{area.name}</span>
                  <ArrowRight size={16} className="-rotate-45 transition-transform group-hover:rotate-0" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      <section className="bg-primary px-6 py-16 text-primary-foreground md:px-12 md:py-20">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <span className="kicker mb-8 text-primary-foreground">Need a quote?</span>
            <h2 className="heading-section max-w-[700px]">Tell us what is happening at the property.</h2>
          </div>
          <Link href="/#contact" className="inline-flex shrink-0 items-center gap-4 bg-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:bg-accent hover:text-primary-foreground">
            Get a free quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function LocationPage({ area }: { area: (typeof locationItems)[number] }) {
  const locationProfile = locationProfiles[area.slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [area]);

  return (
    <main className="texture-overlay min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header isLocationPage />

      <article className="pt-36 md:pt-44">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <Link href="/locations" className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <ArrowRight size={16} className="rotate-180" /> All Dublin service areas
          </Link>

          <div className="grid grid-cols-1 gap-10 border-b border-border pb-14 lg:grid-cols-12 lg:gap-20 lg:pb-20">
            <div className="lg:col-span-7">
              <span className="kicker mb-8">Roofing services / {area.name}</span>
              <h1 className="heading-hero max-w-[860px] break-words text-primary">{locationProfile.header}</h1>
              <div className="mt-8 max-w-[680px] space-y-5">
                {locationProfile.introduction.map((paragraph, index) => (
                  <p key={paragraph} className={index === 0 ? 'text-xl leading-relaxed text-foreground/80' : index === locationProfile.introduction.length - 1 ? 'text-base font-semibold leading-8 text-foreground' : 'text-base leading-8 text-foreground/70'}>
                   {paragraph}
                 </p>
                ))}
                <div className="flex flex-col gap-3 pt-3 sm:flex-row">
                  <Link href="/#contact" className="inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-accent">
                    <Mail size={18} aria-hidden="true" /> Contact us
                  </Link>
                  <a href="https://wa.me/353863395381" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-3 border border-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground" aria-label={`Contact Kellys Roofing in ${area.name} on WhatsApp`}>
                    <MessageCircle size={18} aria-hidden="true" /> WhatsApp us
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <HeroVideo wrapperClassName="aspect-[4/5] bg-muted" />
            </div>
          </div>

          {locationProfile && (
            <section
              className="grid grid-cols-1 border-b border-border py-14 md:grid-cols-2 md:py-20"
              aria-labelledby={`${area.slug}-discover-title`}
            >
              <div className="min-h-[360px] overflow-hidden bg-muted md:min-h-[520px]">
                <iframe
                  title={`Map of ${area.name}, County Dublin`}
                  src={`https://www.google.com/maps?q=${locationProfile.coordinates.latitude},${locationProfile.coordinates.longitude}&z=14&output=embed`}
                  className="h-full min-h-[360px] w-full border-0 md:min-h-[520px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="flex flex-col justify-center border-l-0 border-border pt-10 md:border-l md:px-12 md:pt-0 lg:px-20">
                <span className="kicker mb-7">Discover {area.name}</span>
                <h2 id={`${area.slug}-discover-title`} className="heading-section max-w-[620px]">
                  Local attractions near {area.name}.
                </h2>
                <p className="mt-7 max-w-[620px] border-b border-border pb-8 text-base leading-relaxed text-foreground/70">
                  <strong className="font-semibold text-foreground">Service Area:</strong> {area.name}, Co. Dublin
                  <span className="mx-2 text-border" aria-hidden="true">—</span>
                  <strong className="font-semibold text-foreground">Coordinates:</strong> {locationProfile.coordinates.label}
                </p>

                <ul className="mt-2" aria-label={`Local attractions near ${area.name}`}>
                  {locationProfile.attractions.map((attraction, index) => (
                    <li
                      key={attraction}
                      className="flex items-center gap-5 border-b border-border py-5"
                    >
                      <span className="font-mono text-xs text-primary/60">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <MapPin size={18} className="shrink-0 text-primary" aria-hidden="true" />
                      <span className="font-display text-xl md:text-2xl">{attraction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          <section className="grid grid-cols-1 gap-10 py-14 md:grid-cols-12 md:gap-14 md:py-20">
            <div className="md:col-span-4">
              <span className="kicker mb-6">What we can help with</span>
              <h2 className="heading-section">The right work for the property.</h2>
              <OverlayImage
                src={roofTilesPath}
                alt={`Roofing work in ${area.name}`}
                wrapperClassName="mt-10 aspect-[16/9] bg-muted"
                className="object-center"
              />
            </div>
            <div className="md:col-span-8 md:flex md:h-full md:flex-col">
              <div className="grid grid-cols-1 border-l border-t border-border sm:flex-1 sm:grid-cols-2 md:h-full">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={`/locations/${area.slug}/${serviceSlugs[service.title]}`}
                    className="group border-b border-r border-border p-6 transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <span className="font-mono text-xs opacity-60">{service.number}</span>
                    <h3 className="mt-6 font-display text-2xl">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed opacity-70">{service.intro}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em]">
                      View in {area.name} <ArrowRight size={15} className="-rotate-45 transition-transform group-hover:rotate-0" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {locationProfile && (
            <section className="border-t border-border py-14 md:py-20" aria-labelledby={`${area.slug}-roofing-options-title`}>
              <div className="grid grid-cols-1 gap-10 border-b border-border pb-12 lg:grid-cols-12 lg:gap-16 lg:pb-16">
                <div className="lg:col-span-8">
                  <span className="kicker mb-7">Practical roofing help</span>
                  <h2 id={`${area.slug}-roofing-options-title`} className="heading-section max-w-[900px]">
                    Roofing options in {area.name}.
                  </h2>
                </div>
                <p className="max-w-[520px] text-lg leading-8 text-foreground/70 lg:col-span-4 lg:self-end">
                  Whether dealing with an active leak or planning a larger roof replacement, Kellys Roofing & Interiors provides clear advice, a practical scope of work and a free no-obligation quote for properties in {area.name}.
                </p>
              </div>

              <div className="grid grid-cols-1 border-b border-border lg:grid-cols-12">
                <div className="py-10 lg:col-span-5 lg:border-r lg:border-border lg:pr-12">
                  <h3 className="font-display text-3xl">Services in {area.name}</h3>
                  <div className="mt-7 border-t border-border">
                    {services.map((service, index) => (
                      <Link
                        key={service.title}
                        href={`/locations/${area.slug}/${serviceSlugs[service.title]}`}
                        className="group flex items-center gap-4 border-b border-border py-5"
                      >
                        <span className="font-mono text-xs text-primary/55">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="flex-1 text-lg font-medium">{service.title} in {area.name}</span>
                        <ArrowRight size={17} className="-rotate-45 text-primary transition-transform group-hover:rotate-0" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border py-10 lg:col-span-4 lg:border-r lg:border-t-0 lg:px-12">
                  <h3 className="font-display text-3xl">Why choose Kellys?</h3>
                  <ul className="mt-7 space-y-5">
                    {[
                      'Free no-obligation quotes',
                      'Clear, straightforward advice',
                      'Work planned around the property',
                      'Roofing and interior work coordinated',
                      'Clean and considerate workmanship',
                    ].map((reason) => (
                      <li key={reason} className="flex items-start gap-3 text-sm leading-6 text-foreground/75">
                        <CircleCheck size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <aside className="border-t border-border bg-primary p-8 text-primary-foreground lg:col-span-3 lg:border-t-0" aria-label="Contact Kellys Roofing">
                  <span className="kicker mb-7 text-primary-foreground">Contact us</span>
                  <h3 className="font-display text-3xl">Send the details. We’ll take it from there.</h3>
                  <div className="mt-8 space-y-3">
                    <a href="tel:+353863395381" className="flex items-center gap-3 border-b border-primary-foreground/25 pb-4 text-sm font-bold">
                      <Phone size={18} aria-hidden="true" />
                      +353 86 339 5381
                    </a>
                    <a href="https://wa.me/353863395381" target="_blank" rel="noreferrer" className="flex items-center gap-3 border-b border-primary-foreground/25 py-4 text-sm font-bold">
                      <MessageCircle size={18} aria-hidden="true" />
                      WhatsApp photos for a quote
                    </a>
                    <a href="mailto:akroofing@Outlook.com" className="flex items-center gap-3 pt-4 text-sm font-bold break-all">
                      <Mail size={18} className="shrink-0" aria-hidden="true" />
                      akroofing@Outlook.com
                    </a>
                  </div>
                </aside>
              </div>

              <div className="grid grid-cols-2 border-l border-border md:grid-cols-4">
                {[
                  ['01', 'Free quotes'],
                  ['02', 'Dublin coverage'],
                  ['03', 'Practical advice'],
                  ['04', 'Joined-up work'],
                ].map(([number, label]) => (
                  <div key={number} className="border-b border-r border-border px-5 py-6">
                    <span className="font-mono text-xs text-primary/55">{number}</span>
                    <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em]">{label}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      <section className="bg-primary px-6 py-16 text-primary-foreground md:px-12 md:py-20">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <span className="kicker mb-8 text-primary-foreground">Free consultation</span>
            <h2 className="heading-section max-w-[700px]">Get a free quote for your {area.name} property.</h2>
          </div>
          <Link href="/#contact" className="inline-flex shrink-0 items-center gap-4 bg-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:bg-accent hover:text-primary-foreground">
            Request a quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function LocationServicePage({ area, service }: { area: (typeof locationItems)[number]; service: Service }) {
  const serviceSlug = serviceSlugs[service.title] as ServiceSlug;
  const content = servicePageContent[serviceSlug];
  const locationProfile = locationProfiles[area.slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [area, service]);

  return (
    <main className="texture-overlay min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header isLocationPage />

      <article className="pt-36 md:pt-44">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
            <Link href="/locations" className="transition-colors hover:text-foreground">Dublin service areas</Link>
            <span>/</span>
            <Link href={`/locations/${area.slug}`} className="transition-colors hover:text-foreground">{area.name}</Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 gap-10 border-b border-border pb-14 lg:grid-cols-12 lg:gap-20 lg:pb-20">
            <div className="lg:col-span-7">
              <span className="kicker mb-8">{service.title} / {area.name}</span>
              <h1 className="heading-hero max-w-[900px] text-primary">{service.title} in {area.name}.</h1>
              <p className="mt-8 max-w-[680px] text-xl leading-relaxed text-foreground/80">
                {service.intro} Kellys Roofing & Interiors provides {service.title.toLowerCase()} for homes and properties in {area.name}, Dublin.
              </p>
              <p className="mt-6 max-w-[680px] text-base leading-8 text-foreground/70">
                {locationProfile.introduction[0]}
              </p>
              <p className="mt-6 max-w-[680px] text-base leading-8 text-foreground/70">
                {content.overview}
              </p>
              <Link href="/#contact" className="mt-10 inline-flex items-center gap-4 bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-accent">
                Get a free quote <ArrowRight size={18} />
              </Link>
            </div>
            <div className="lg:col-span-5">
              <HeroVideo wrapperClassName="aspect-[4/5] bg-muted" />
            </div>
          </div>

          <section className="grid grid-cols-1 gap-10 border-b border-border py-14 md:grid-cols-12 md:gap-14 md:py-20">
            <div className="md:col-span-4">
              <span className="kicker mb-6">A practical approach in {area.name}</span>
              <h2 className="heading-section">From first inspection to a clear handover.</h2>
            </div>
            <div className="md:col-span-8">
              <p className="max-w-[760px] text-lg leading-relaxed text-foreground/80">
                {service.detail} The condition, access and construction of each {area.name} property shape the recommendation, so the scope is agreed around the building rather than a standard package.
              </p>
              <div className="mt-12 border-t border-border">
                {content.processSteps.map((item, index) => (
                  <div key={item} className="flex gap-6 border-b border-border py-7 md:gap-12">
                    <span className="font-mono text-sm text-primary">0{index + 1}</span>
                    <p className="text-base md:text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="border-b border-border">
            {content.editorialSections.map((section, index) => (
              <section
                key={section.heading}
                className="grid grid-cols-1 gap-8 border-b border-border py-14 last:border-b-0 md:py-20 lg:grid-cols-12 lg:gap-20"
              >
                <div className="lg:col-span-4">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    0{index + 1} / {area.name}
                  </span>
                  <h2 className="mt-5 font-display text-4xl leading-tight text-primary md:text-5xl">
                    {section.heading} in {area.name}.
                  </h2>
                </div>
                <div className="space-y-6 text-lg leading-relaxed text-foreground/80 lg:col-span-7 lg:col-start-6">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraph}>
                      {paragraphIndex === 0 ? `For ${area.name} homes and properties, ${paragraph.charAt(0).toLowerCase()}${paragraph.slice(1)}` : paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="grid grid-cols-1 gap-10 border-b border-border py-14 md:py-20 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <span className="kicker mb-6">When to arrange an inspection</span>
              <h2 className="heading-section">Signs worth checking at your {area.name} property.</h2>
              <p className="mt-7 max-w-[520px] leading-7 text-foreground/70">
                These signs do not always point to the same solution. They are useful reasons to arrange a closer assessment before damage develops or finishes are renewed.
              </p>
            </div>
            <div className="border-t border-border lg:col-span-7">
              {content.signsOrConsiderations.map((item, index) => (
                <div key={item} className="flex gap-6 border-b border-border py-6">
                  <span className="font-mono text-xs text-primary">0{index + 1}</span>
                  <p className="leading-relaxed text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 gap-10 border-b border-border py-14 md:py-20 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <span className="kicker mb-6">Practical answers</span>
              <h2 className="heading-section">Questions about {service.title.toLowerCase()} in {area.name}.</h2>
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={content.faqs} idPrefix={`${area.slug}-${serviceSlug}-faq`} />
            </div>
          </section>

          <section className="border-t border-border py-14 md:py-20" aria-labelledby="related-services-title">
            <div className="mb-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
              <div>
                <span className="kicker mb-5">More for {area.name}</span>
                <h2 id="related-services-title" className="heading-section">Other services nearby.</h2>
              </div>
              <Link href={`/locations/${area.slug}`} className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-primary link-hover">
                View {area.name} overview <ArrowRight size={17} />
              </Link>
            </div>
            <div className="grid border-l border-t border-border sm:grid-cols-3">
              {services.filter((item) => item.title !== service.title).map((item) => (
                <Link key={item.title} href={`/locations/${area.slug}/${serviceSlugs[item.title]}`} className="group border-b border-r border-border p-6 transition-colors hover:bg-primary hover:text-primary-foreground">
                  <span className="font-mono text-xs opacity-60">{item.number}</span>
                  <h3 className="mt-6 font-display text-2xl">{item.title}</h3>
                  <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em]">
                    View service <ArrowRight size={15} className="-rotate-45 transition-transform group-hover:rotate-0" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      <section className="bg-primary px-6 py-16 text-primary-foreground md:px-12 md:py-20">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <span className="kicker mb-8 text-primary-foreground">Free consultation</span>
            <h2 className="heading-section max-w-[760px]">Get a free quote for {service.title.toLowerCase()} in {area.name}.</h2>
          </div>
          <Link href="/#contact" className="inline-flex shrink-0 items-center gap-4 bg-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:bg-accent hover:text-primary-foreground">
            Request a quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

export default function App() {
  const [location] = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [hoveredServiceCard, setHoveredServiceCard] = useState<number | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const activeService = services.find((service) => `/services/${serviceSlugs[service.title]}` === location);
  const isGalleryPage = location === '/work';
  const isBlogPage = location === '/blog';
  const activeBlogPost = blogPosts.find((post) => `/blog/${post.slug}` === location);
  const isLocationsHub = location === '/locations';
  const activeLocation = locationItems.find((area) => `/locations/${area.slug}` === location);
  const activeLocationService = (() => {
    const match = location.match(/^\/locations\/([^/]+)\/([^/]+)$/);
    if (!match) return undefined;
    const area = locationItems.find((item) => item.slug === match[1]);
    const service = services.find((item) => serviceSlugs[item.title] === match[2]);
    return area && service ? { area, service } : undefined;
  })();

  useEffect(() => {
    const { title, description } = getPageMetadata(location);
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [location]);

  if (activeService) return <ServicePage service={activeService} />;
  if (isGalleryPage) return <GalleryPage />;
  if (isBlogPage) return <BlogPage />;
  if (activeBlogPost) return <BlogArticlePage post={activeBlogPost} />;
  if (isLocationsHub) return <LocationsHubPage />;
  if (activeLocationService) return <LocationServicePage area={activeLocationService.area} service={activeLocationService.service} />;
  if (activeLocation) return <LocationPage area={activeLocation} />;

  return (
    <main className="texture-overlay min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />

      {/* Hero Section */}
      <section id="top" className="relative border-b border-border px-6 pb-16 pt-36 md:px-12 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
            <div className="lg:col-span-7 relative z-10">
              <span className="kicker reveal mb-8">Roofing & Interiors / Dublin</span>
              <h1 className="heading-hero text-primary reveal delay-1 mb-8 max-w-[900px]">
                Proper work. <br />Solidly done.
              </h1>
              <div className="reveal delay-2 max-w-[680px] space-y-5 mb-10 md:mb-0">
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  Kellys Roofing & Interiors looks after the spaces that matter — from a leaking roof in a family home to the final detail of a property ready for its next chapter.
                </p>
                <p className="text-base leading-8 text-foreground/70">
                  Serving Dublin since 2009, our insured team provides roof repairs, slate and tile roofing, roof replacement, flat roofing, guttering, chimney repairs and emergency roofing services.
                </p>
                <p className="text-base leading-8 text-foreground/70">
                  We also carry out ceilings, plastering, drylining, carpentry and interior finishing, allowing the roof and the rooms beneath it to be considered as one joined-up project.
                </p>
                <p className="text-base leading-8 text-foreground/70">
                  Our mission is to help property owners make a clear, practical decision about the work their building needs. Our professional team is ready to help.
                </p>
                <p className="text-base font-semibold leading-8 text-foreground">
                  Contact us today for a free, no-obligation quote and practical advice on the right next step for your property.
                </p>
                <div className="flex flex-col gap-3 pt-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-accent"
                  >
                    <Mail size={18} aria-hidden="true" />
                    Contact us
                  </button>
                  <a
                    href="https://wa.me/353863395381"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-3 border border-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label="Contact Kellys Roofing on WhatsApp"
                  >
                    <MessageCircle size={18} aria-hidden="true" />
                    WhatsApp us
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 w-full reveal delay-3">
              <HeroVideo
                wrapperClassName="aspect-[4/5] w-full bg-muted"
                className="grayscale-[20%] contrast-125"
              />
            </div>
          </div>
          
          <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-border pt-6 reveal delay-4 md:mt-20 md:flex-row md:items-center">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Serving homeowners, landlords, & commercial clients
            </p>
            <button onClick={scrollToContact} className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-primary link-hover">
              Discuss your project <ArrowDownRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative border-b border-border overflow-hidden bg-primary text-primary-foreground">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          {services.map((service, index) => {
             const isActive = hoveredServiceCard === null ? index === 0 : hoveredServiceCard === index;
             return (
               <div 
                 key={service.number}
                 className={`absolute inset-0 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
               >
                  <ResponsiveImage src={service.image} alt="" className="h-full w-full object-cover opacity-[55%] grayscale-[10%]" />
                  <div className="absolute inset-0 bg-primary/15" />
               </div>
             );
          })}
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-24 h-full flex flex-col justify-between min-h-[850px] md:min-h-[900px]">
           {/* Header (Top) */}
           <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end text-primary-foreground">
             <div>
               <span className="kicker mb-6 !text-primary-foreground/90">Our services / 01—04</span>
               <h2 className="heading-section max-w-[700px]">
                 The work behind a better building.
               </h2>
             </div>
             <p className="max-w-[320px] text-base text-primary-foreground/80">
               A practical scope, carefully managed. Tell us what is happening at your property and we will help you work out the right next move.
             </p>
          </div>

          {/* The Interactive Composition (Bottom) */}
          <div className="mt-16 md:mt-24 w-full flex flex-col md:flex-row border border-primary-foreground/20 shadow-2xl bg-primary/20 backdrop-blur-md rounded-sm overflow-hidden divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
            {services.map((service, index) => {
               const isActive = hoveredServiceCard === null ? index === 0 : hoveredServiceCard === index;
               return (
                 <Link
                   href={`/services/${serviceSlugs[service.title]}`}
                   key={service.number}
                   className={`group relative flex flex-col transition-all duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)]
                     ${isActive ? 'flex-[2.5] bg-primary/60 backdrop-blur-xl backdrop-saturate-150' : 'flex-[1] bg-transparent hover:bg-primary/30'}
                   `}
                   onMouseEnter={() => setHoveredServiceCard(index)}
                   onMouseLeave={() => setHoveredServiceCard(null)}
                   onFocus={() => setHoveredServiceCard(index)}
                   onBlur={() => setHoveredServiceCard(null)}
                 >
                   <div className="p-6 md:p-8 flex flex-col h-full justify-between min-h-[140px] md:min-h-[400px]">
                     <div className="flex items-start justify-between">
                       <span className={`font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-500 ${isActive ? 'text-primary-foreground' : 'text-primary-foreground/60'}`}>
                         {service.number}
                       </span>
                       <span className={`hidden md:inline-flex items-center justify-center h-10 w-10 rounded-full border border-primary-foreground/30 text-primary-foreground transition-all duration-[0.8s] ${isActive ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-45'}`}>
                         <ArrowRight size={16} className="-rotate-45" />
                       </span>
                     </div>
                     
                     <div className="mt-auto pt-4 md:pt-12">
                       <h3 className={`font-display text-2xl md:text-3xl xl:text-4xl transition-colors duration-500 leading-tight ${isActive ? 'text-primary-foreground' : 'text-primary-foreground/80'}`}>
                         {service.title}
                       </h3>

                       <div className={`grid transition-all duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'grid-rows-[1fr] opacity-100 mt-5 md:mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                         <div className="overflow-hidden">
                           <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed max-w-[340px] mb-6 md:mb-8">
                             {service.intro}
                           </p>
                           <span className="inline-flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground">
                             Explore service <ArrowRight size={16} className="-rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                           </span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </Link>
               );
            })}
          </div>
        </div>
      </section>

      {/* Feature Grid / Gallery */}
      <section className="border-b border-border bg-white px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {[
            ['01', 'Roof over your head', 'Responsive thinking for the jobs you cannot afford to leave to chance.', roofTilesPath],
            ['02', 'One joined-up team', 'The outside and the inside, considered as one property — not separate call-outs.', interiorRenovationPath],
            ['03', 'Dublin, properly local', 'Familiar with the homes, weather and practical realities of working across the city.', rooferFixingRoofHeroPath],
          ].map(([num, title, desc, img]) => (
            <div key={num} className="flex flex-col gap-6">
              <OverlayImage
                src={img}
                alt={title}
                wrapperClassName="aspect-[4/3] bg-muted"
                className="transition-transform duration-700 hover:scale-105"
              />
              <div>
                <span className="font-mono text-xs text-primary mb-3 block">{num}</span>
                <h3 className="text-2xl font-display mb-2">{title}</h3>
                <p className="text-foreground/70 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground md:px-12 md:py-24">
        <div className="absolute inset-0 hidden md:block" aria-hidden="true">
          <ResponsiveImage src={roofFramingPath} alt="" className="h-full w-full object-cover object-right opacity-[55%]" />
          <div className="absolute inset-0 bg-primary/15" />
        </div>
        <div className="relative h-72 md:hidden" aria-hidden="true">
          <ResponsiveImage src={roofFramingPath} alt="" className="h-full w-full object-cover object-right opacity-[55%]" />
          <div className="absolute inset-0 bg-primary/15" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-16 md:px-0 md:py-0">
          <div className="w-full border border-white/25 bg-[#071b31]/70 p-8 shadow-2xl backdrop-blur-xl backdrop-saturate-150 md:p-10 lg:w-1/2 lg:p-12">
            <div className="max-w-[720px]">
              <span className="kicker mb-8 !text-white">How we work</span>
              <h2 className="heading-section mb-8 max-w-[620px]">
                No fog. Just a clear route through the work.
              </h2>
              <p className="max-w-[560px] text-lg text-primary-foreground/75">
                Property work can be disruptive enough without chasing updates or translating jargon. We keep the process visible and the conversation open.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 border-t border-primary-foreground/30">
              {projectNotes.map(([number, title, text]) => (
                <div key={number} className="flex gap-6 border-b border-primary-foreground/30 py-8">
                  <span className="font-mono text-primary-foreground">{number}</span>
                  <div>
                    <h3 className="mb-3 font-display text-2xl">{title}</h3>
                    <p className="max-w-[330px] leading-relaxed text-primary-foreground/75">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <span className="kicker mb-8">Free consultation</span>
            <h2 className="heading-section mb-8 max-w-[560px]">Get a Free Quote</h2>
            <p className="mb-12 max-w-[530px] text-lg leading-relaxed text-foreground/70">
              Contact us via WhatsApp and send images of your roof if you can, or describe the problem. And we go from there.
            </p>

            <div className="bg-primary p-8 text-primary-foreground md:p-10">
              <div className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]">
                <Clock3 size={17} /> Available now
              </div>
              <h3 className="font-display text-3xl">Click to Call or WhatsApp</h3>
              <p className="mt-4 max-w-[460px] text-primary-foreground/75">
                Get in touch instantly — we are ready to help.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a href="tel:+353863395381" className="flex flex-col gap-2 bg-primary-foreground px-5 py-5 text-primary transition-colors hover:bg-accent hover:text-primary-foreground">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em]"><Phone size={16} /> Call Us Now</span>
                  <span className="font-display text-xl">+353 86 339 5381</span>
                </a>
                <a href="https://wa.me/353863395381" target="_blank" rel="noreferrer" className="flex flex-col gap-2 bg-[#25D366] px-5 py-5 text-white transition-colors hover:bg-[#128C7E]">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em]"><MessageCircle size={16} /> WhatsApp Us</span>
                  <svg viewBox="0 0 32 32" aria-label="WhatsApp" role="img" className="mt-2 h-10 w-10 fill-current">
                    <path d="M16 3.2a12.8 12.8 0 0 0-10.95 19.44L3.2 28.8l6.34-1.8A12.8 12.8 0 1 0 16 3.2Zm0 23.3a10.45 10.45 0 0 1-5.33-1.46l-.38-.23-3.77 1.07 1.1-3.67-.25-.39A10.47 10.47 0 1 1 16 26.5Zm5.74-7.75c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1.01-.99 1.22-.18.21-.37.24-.68.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.33-.26-.61-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.64s1.13 3.06 1.29 3.27c.16.21 2.22 3.39 5.38 4.76.75.32 1.33.51 1.78.65.75.24 1.43.21 1.97.13.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 border-l border-t border-border sm:grid-cols-2">
              <a href="mailto:akroofing@Outlook.com" className="group border-b border-r border-border p-6 transition-colors hover:bg-background">
                <Mail size={20} className="text-primary" />
                <span className="mt-5 block font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Email</span>
                <span className="mt-2 block text-sm font-medium break-all">akroofing@Outlook.com</span>
              </a>
              <Link href="/locations" className="group border-b border-r border-border p-6 transition-colors hover:bg-background">
                <MapPin size={20} className="text-primary" />
                <span className="mt-5 block font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Service Areas</span>
                <span className="mt-2 block text-sm font-medium">Dublin & Surrounding</span>
              </Link>
            </div>
          </div>

          <div className="border border-border bg-background p-8 md:p-12">
            {submitted ? (
              <div className="flex min-h-[540px] flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500" data-testid="status-form-success">
                <CircleCheck size={48} className="mb-6 text-primary" />
                <h3 className="mb-4 font-display text-3xl">Quote Request Received</h3>
                <p className="mb-8 max-w-[340px] text-foreground/70">
                  Your details are ready for review. We will be in touch to understand the property and agree the best next step.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="link-hover text-sm font-bold uppercase tracking-wider text-primary"
                >
                  Send another quote request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" data-testid="form-quote">
                <div>
                  <span className="kicker mb-6">Send us a message</span>
                  <h3 className="font-display text-3xl text-primary">Tell us about the property.</h3>
                </div>
                <div>
                  <label className="sr-only" htmlFor="name">Your Name</label>
                  <input required id="name" name="name" placeholder="John Smith" className="form-input" data-testid="input-name" />
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email Address</label>
                    <input required type="email" id="email" name="email" placeholder="john@example.com" className="form-input" data-testid="input-email" />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">Phone Number</label>
                    <input required type="tel" id="phone" name="phone" placeholder="+353 85 123 4567" className="form-input" data-testid="input-contact" />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="service">Service Required</label>
                  <select required id="service" name="service" defaultValue="" className="form-input cursor-pointer appearance-none bg-transparent text-foreground" data-testid="select-service">
                    <option value="" disabled className="text-muted-foreground">Select a service</option>
                    <option>Roof repairs</option>
                    <option>Roof replacement</option>
                    <option>Flat roofing</option>
                    <option>Interiors & building</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="sr-only" htmlFor="details">Project Details</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="form-input resize-none"
                    data-testid="textarea-message"
                  />
                </div>
                <button type="submit" className="w-full bg-primary py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-accent" data-testid="button-submit-quote">
                  Send Quote Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <span className="kicker mb-6">Why choose us</span>
              <h2 className="heading-section max-w-[680px]">Your Free Quote Includes</h2>
            </div>
            <p className="max-w-[380px] text-base leading-relaxed text-foreground/70 md:col-span-5">
              Every consultation comes with professional advice and transparent pricing.
            </p>
          </div>

          <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['01', 'No Obligation', 'Free quotes with zero pressure to commit.'],
              ['02', 'Quick Response', 'We respond within 24 hours guaranteed.'],
              ['03', 'Fully Insured', 'Complete peace of mind on every project.'],
              ['04', 'Expert Advice', 'Professional guidance for your project.'],
            ].map(([number, title, text]) => (
              <div key={number} className="border-b border-r border-border p-7 md:p-8">
                <span className="font-mono text-xs text-primary">{number}</span>
                <h3 className="mt-8 font-display text-2xl text-primary">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
