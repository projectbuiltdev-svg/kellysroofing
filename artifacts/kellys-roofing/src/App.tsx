import { useEffect, useState, type FormEvent } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowDownRight,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Phone,
  CircleCheck
} from 'lucide-react';
import { Link, useLocation } from 'wouter';

import logoPath from '@assets/kellys_roofing_logo_transparent.png';
import rooflinePath from '@assets/generated_images/kellys-roofline.jpg';
import roofTilesPath from '@assets/unsplash/roof-tiles.jpg';
import roofFramingPath from '@assets/unsplash/roof-framing.jpg';
import rooferFixingRoofHeroPath from '@assets/unsplash/roofer-fixing-roof-hero.jpg';
import interiorRenovationPath from '@assets/unsplash/interior-renovation.jpg';
import homeRenovationStandardPath from '@assets/unsplash/home-renovation-standard.jpg';

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

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

function Header({ isServicePage = false }: { isServicePage?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 z-[100] w-full bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-3 md:px-12">
        {isServicePage ? (
          <Link href="/" onClick={closeMenu} className="relative z-[110] mix-blend-multiply" data-testid="link-logo">
            <img src={logoPath} alt="Kellys Roofing and Interiors" className="h-20 w-auto object-contain md:h-28" />
          </Link>
        ) : (
          <a href="#top" onClick={closeMenu} className="relative z-[110] mix-blend-multiply" data-testid="link-logo">
            <img src={logoPath} alt="Kellys Roofing and Interiors" className="h-20 w-auto object-contain md:h-28" />
          </a>
        )}
        
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          <div className="flex gap-6 mr-4">
            {serviceNavItems.map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-medium hover:text-primary transition-colors link-hover" data-testid={`link-nav-${serviceSlugs[label]}`}>
                {label}
              </Link>
            ))}
            {!isServicePage && (
              <>
                <a href="#approach" className="text-sm font-medium hover:text-primary transition-colors link-hover">How we work</a>
                <a href="#about" className="text-sm font-medium hover:text-primary transition-colors link-hover">About Kellys</a>
              </>
            )}
          </div>
          {isServicePage ? (
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
             {isServicePage ? (
               <Link href="/" onClick={closeMenu} className="mix-blend-multiply" data-testid="link-mobile-logo">
                 <img src={logoPath} alt="Kellys Roofing and Interiors" className="h-16 w-auto object-contain" />
               </Link>
             ) : (
               <a href="#top" onClick={closeMenu} className="mix-blend-multiply" data-testid="link-mobile-logo">
                 <img src={logoPath} alt="Kellys Roofing and Interiors" className="h-16 w-auto object-contain" />
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
             {!isServicePage && (
               <>
                 <a href="#approach" onClick={closeMenu} className="border-b border-border pb-4" data-testid="link-mobile-approach">How we work</a>
                 <a href="#about" onClick={closeMenu} className="border-b border-border pb-4" data-testid="link-mobile-about">About Kellys</a>
               </>
             )}
             {isServicePage ? (
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

function ServicePage({ service }: { service: Service }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  return (
    <main className="texture-overlay min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header isServicePage />

      <article className="pt-32 md:pt-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12">
            <ArrowRight size={16} className="rotate-180" /> Back to all services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-7">
               <span className="kicker mb-8">{service.number} / Dublin</span>
              <h1 className="heading-hero text-primary mb-8">{service.title}</h1>
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 mb-12 max-w-[800px]">
                {service.intro}
              </p>
            </div>
            
            <div className="lg:col-span-5 w-full">
              <div className="aspect-[4/5] w-full overflow-hidden bg-muted">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover reveal" 
                />
              </div>
            </div>
          </div>

          <div className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-t border-border pt-24 md:pt-32 pb-24 md:pb-32">
            <div className="lg:col-span-4">
               <h2 className="heading-section">What is involved</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-[700px]">
                {service.detail}
              </p>
              
              <div className="border-t border-border">
                 {['A practical first conversation about the property and what needs attention.', 'Straightforward advice on the right materials, sequence and level of work.', 'Careful preparation, clean working habits and a considered handover.'].map((item, i) => (
                  <div key={i} className="flex gap-6 md:gap-12 py-8 border-b border-border items-start">
                    <span className="font-mono text-sm text-primary">0{i + 1}</span>
                    <p className="text-base md:text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-primary text-primary-foreground py-24 md:py-32 px-6 md:px-12">
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
    </main>
  );
}

export default function App() {
  const [location] = useLocation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const activeService = services.find((service) => `/services/${serviceSlugs[service.title]}` === location);

  useEffect(() => {
    const pageTitle = activeService ? `${activeService.title} | Kellys Roofing Dublin` : 'Kellys Roofing & Interiors | Dublin';
    document.title = pageTitle;
    const description = activeService
      ? `${activeService.intro} Kellys Roofing & Interiors serves homes and properties across Dublin.`
      : 'Kellys Roofing & Interiors provides roofing, building and interior work across Dublin.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [activeService]);

  if (activeService) return <ServicePage service={activeService} />;

  return (
    <main className="texture-overlay min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />

      {/* Hero Section */}
      <section id="top" className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 border-b border-border">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
            <div className="lg:col-span-8 relative z-10">
              <span className="kicker reveal mb-8">Roofing & Interiors / Dublin</span>
              <h1 className="heading-hero text-primary reveal delay-1 mb-8 max-w-[900px]">
                Proper work. <br />Solidly done.
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 reveal delay-2 max-w-[540px] leading-relaxed mb-10 md:mb-0">
                 Kellys Roofing & Interiors looks after the spaces that matter — from a leaking roof in a family home to the final detail of a property ready for its next chapter.
              </p>
            </div>
            <div className="lg:col-span-4 w-full reveal delay-3">
              <div className="aspect-[4/5] w-full overflow-hidden bg-muted">
                <img 
                  src={rooflinePath} 
                  alt="Dublin residential roofline" 
                  className="w-full h-full object-cover grayscale-[20%] contrast-125" 
                />
              </div>
            </div>
          </div>
          
          <div className="mt-16 md:mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-6 reveal delay-4">
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
      <section id="services" className="py-24 md:py-40 px-6 md:px-12 border-b border-border">
        <div className="mx-auto max-w-[1600px]">
           <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
             <div>
               <span className="kicker mb-6">Our services / 01—04</span>
               <h2 className="heading-section max-w-[700px]">
                 The work behind a better building.
               </h2>
             </div>
             <p className="max-w-[320px] text-base text-foreground/70">
               A practical scope, carefully managed. Tell us what is happening at your property and we will help you work out the right next move.
             </p>
          </div>

           <div className="grid gap-px border border-primary bg-primary md:grid-cols-2">
             {services.map((service) => (
              <Link 
                key={service.number} 
                href={`/services/${serviceSlugs[service.title]}`}
                className="service-card group relative flex min-h-[360px] flex-col justify-between overflow-hidden bg-background p-6 md:min-h-[420px] md:p-8"
              >
                 <div className="relative z-10 flex items-start justify-between gap-6">
                   <span className="service-card-number font-mono text-xs uppercase tracking-[0.18em]">{service.number}</span>
                   <div className="service-card-thumb h-20 w-28 shrink-0 overflow-hidden border bg-muted md:h-24 md:w-36">
                     <img src={service.image} alt={`${service.title} project example`} className="h-full w-full object-cover grayscale-[15%] transition-transform duration-500" />
                   </div>
                 </div>
                 <div className="relative z-10 mt-16">
                   <h3 className="service-card-title max-w-[420px] font-display text-3xl md:text-5xl">{service.title}</h3>
                   <p className="service-card-copy mt-5 max-w-[440px] text-base">{service.intro}</p>
                   <div className="mt-8 flex items-center justify-between">
                     <span className="service-card-label font-mono text-[10px] uppercase tracking-[0.18em]">Explore service</span>
                     <span className="service-card-arrow inline-flex h-12 w-12 items-center justify-center border transition-all">
                       <ArrowRight size={20} className="-rotate-45 transition-transform group-hover:rotate-0" />
                     </span>
                   </div>
                 </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid / Gallery */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white border-b border-border">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {[
            ['01', 'Roof over your head', 'Responsive thinking for the jobs you cannot afford to leave to chance.', roofTilesPath],
            ['02', 'One joined-up team', 'The outside and the inside, considered as one property — not separate call-outs.', interiorRenovationPath],
            ['03', 'Dublin, properly local', 'Familiar with the homes, weather and practical realities of working across the city.', rooferFixingRoofHeroPath],
          ].map(([num, title, desc, img]) => (
            <div key={num} className="flex flex-col gap-6">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={img} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
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
      <section id="approach" className="py-24 md:py-40 px-6 md:px-12 border-b border-border">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <span className="kicker mb-8">How we work</span>
            <h2 className="heading-section max-w-[500px] mb-8">
              No fog. Just a clear route through the work.
            </h2>
            <p className="text-lg text-foreground/70 max-w-[420px]">
              Property work can be disruptive enough without chasing updates or translating jargon. We keep the process visible and the conversation open.
            </p>
          </div>
          
          <div className="border-t border-border">
            {projectNotes.map(([number, title, text]) => (
              <div key={number} className="flex flex-col sm:flex-row gap-6 sm:gap-12 py-10 border-b border-border">
                <span className="font-mono text-primary sm:w-12">{number}</span>
                <div>
                  <h3 className="text-2xl font-display mb-3">{title}</h3>
                  <p className="text-foreground/70 leading-relaxed max-w-[450px]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-40 px-6 md:px-12 border-b border-border">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="aspect-[3/4] w-full overflow-hidden bg-muted relative group">
              <img src={homeRenovationStandardPath} alt="Home renovation" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[10%]" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-background/95 backdrop-blur p-6 border border-border">
               <p className="kicker mb-3">The Kellys standard</p>
               <p className="font-display text-2xl mb-2">Treat every address like someone’s home.</p>
               <p className="text-sm text-foreground/70">A considered scope. A clean finish. No shortcuts in the details.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="kicker mb-8">About Kellys</span>
            <h2 className="heading-section mb-10 max-w-[600px]">
              Built around your peace of mind.
            </h2>
            <div className="text-lg text-foreground/80 space-y-6 max-w-[540px]">
              <p>
                Kellys Roofing & Interiors is a Dublin-based roofing and construction team for people who want their property work handled properly. We bring the same care to an urgent repair, a managed rental portfolio and a full roof-and-interior project.
              </p>
              <p>
                The best work is often the least dramatic: good preparation, honest advice, and a finish that feels like it was always meant to be there.
              </p>
            </div>
            
            <button onClick={scrollToContact} className="mt-12 group inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-accent transition-colors">
              Talk through your property <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-40 px-6 md:px-12 bg-white">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
             <span className="kicker mb-8">Let’s talk about the job</span>
            <h2 className="heading-section mb-8 max-w-[500px]">
               A sound next step starts with a few details.
            </h2>
            <p className="text-lg text-foreground/70 max-w-[420px] mb-12">
              Share what you know below. We will review the basics and come back to arrange the right conversation or site visit.
            </p>
            
            <div className="p-8 border border-border bg-background">
              <div className="flex items-center gap-4 mb-4 text-primary">
                <Phone size={24} />
                <h3 className="font-display text-xl">Prefer to speak?</h3>
              </div>
              <p className="text-sm text-foreground/70">
                Ask us to call you at a time that suits. We do not publish a number here, but every enquiry is read by the team.
              </p>
            </div>
          </div>

          <div className="bg-background p-8 md:p-12 border border-border">
            {submitted ? (
              <div className="h-full min-h-[400px] flex flex-col justify-center items-center text-center animate-in fade-in zoom-in duration-500" data-testid="status-form-success">
                <CircleCheck size={48} className="text-primary mb-6" />
                <h3 className="font-display text-3xl mb-4">Enquiry Received</h3>
                <p className="text-foreground/70 max-w-[340px] mb-8">
                  Your details are ready for review. We will be in touch to understand the property and agree the best next step.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="text-sm font-bold uppercase tracking-wider text-primary link-hover"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" data-testid="form-quote">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="sr-only" htmlFor="name">Your Name</label>
                    <input required id="name" name="name" placeholder="Your Name" className="form-input" data-testid="input-name" />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="contact">Contact Details</label>
                    <input required id="contact" name="contact" placeholder="Phone or Email" className="form-input" data-testid="input-contact" />
                  </div>
                </div>
                
                <div>
                  <label className="sr-only" htmlFor="area">Property Area</label>
                  <input required id="area" name="area" placeholder="Property Area (e.g. Rathmines, D6)" className="form-input" data-testid="input-area" />
                </div>
                
                <div>
                  <label className="sr-only" htmlFor="service">Service Needed</label>
                  <select required id="service" name="service" defaultValue="" className="form-input bg-transparent text-foreground cursor-pointer appearance-none" data-testid="select-service">
                    <option value="" disabled className="text-muted-foreground">Select primary service...</option>
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
                     placeholder="A few words about the property or the work needed" 
                    rows={4}
                    className="form-input resize-none" 
                     data-testid="textarea-message"
                  />
                </div>
                
                 <button type="submit" className="w-full bg-primary text-primary-foreground py-4 text-sm font-bold uppercase tracking-wider hover:bg-accent transition-colors" data-testid="button-submit-quote">
                   Send enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
       <footer className="border-t border-border bg-white px-6 py-12 text-foreground md:px-12">
         <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-8 md:flex-row md:items-end">
           <div>
             <img src={logoPath} alt="Kellys Roofing and Interiors" className="h-24 w-auto object-contain md:h-28" />
             <p className="mt-5 text-sm text-foreground/70">Roofing, building & interiors across Dublin.</p>
           </div>
           <div className="flex flex-col items-start gap-3 text-sm text-foreground/70 md:items-end">
             <a href="#top" className="link-hover inline-flex items-center gap-2 font-bold text-primary" data-testid="link-back-top">Back to top <ChevronDown size={16} className="rotate-180" /></a>
             <p data-testid="text-footer-note">Enquiries welcome from homeowners, landlords, property managers and commercial clients.</p>
           </div>
         </div>
         <div className="mx-auto mt-8 max-w-[1600px] border-t border-border pt-5 font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground">Kellys Roofing & Interiors · Dublin</div>
      </footer>
    </main>
  );
}
