import { useState, type FormEvent } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheck,
  ClipboardList,
  House,
  Menu,
  Minus,
  MoveUpRight,
  Ruler,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import logoPath from '@assets/kellys-logo-cropped.png';
import rooflinePath from '@assets/generated_images/kellys-roofline.jpg';
import roofTilesPath from '@assets/unsplash/roof-tiles.jpg';
import roofFramingPath from '@assets/unsplash/roof-framing.jpg';
import roofingTeamPath from '@assets/unsplash/roofing-team.jpg';
import rooferFixingRoofHeroPath from '@assets/unsplash/roofer-fixing-roof-hero.jpg';

type Service = {
  number: string;
  title: string;
  intro: string;
  detail: string;
  icon: typeof House;
  image: string;
};

const services: Service[] = [
  {
    number: '01',
    title: 'Roof repairs',
    intro: 'A clear, practical response to leaks, storm damage and the small signs that should not be ignored.',
    detail: 'We inspect the issue, explain what needs doing and carry out focused repairs across Dublin homes and managed properties.',
    icon: ShieldCheck,
    image: rooferFixingRoofHeroPath,
  },
  {
    number: '02',
    title: 'Roof replacement',
    intro: 'Built-up protection for roofs that have reached the end of their useful life.',
    detail: 'From strip and renew work to new slate or tile coverings, we plan the job around the building and the people using it.',
    icon: House,
    image: roofTilesPath,
  },
  {
    number: '03',
    title: 'Flat roofing',
    intro: 'Durable flat-roof solutions for extensions, garages, commercial units and more.',
    detail: 'We help select a suitable system, pay close attention to falls and detailing, and leave the site properly finished.',
    icon: Ruler,
    image: roofFramingPath,
  },
  {
    number: '04',
    title: 'Interiors & building',
    intro: 'The considered work that brings a property back together after the roof is secure.',
    detail: 'Ceilings, plastering, drylining, carpentry and interior finishing handled as part of one joined-up scope.',
    icon: Sparkles,
    image: roofingTeamPath,
  },
];

const projectNotes = [
  ['01', 'Weather-tight first', 'We deal with the source of the problem, not just the visible mark on the ceiling.'],
  ['02', 'Straight answers', 'A tidy explanation of the work, the options and the next sensible step.'],
  ['03', 'Respect for your property', 'Careful preparation, clean working habits and a proper handover.'],
];

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openService, setOpenService] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="grain min-h-[100dvh] overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#top" onClick={closeMenu} className="group flex items-center gap-3" data-testid="link-logo">
            <img src={logoPath} alt="Kellys Roofing and Interiors" className="h-auto w-[260px] max-w-[55vw] object-contain" />
          </a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {[
              ['Services', '#services'],
              ['How we work', '#approach'],
              ['About Kellys', '#about'],
            ].map(([label, href]) => (
              <a key={href} href={href} className="nav-link text-[12px] font-semibold tracking-[.04em] text-[#10233f]/75 transition-colors hover:text-[#10233f]" data-testid={`link-nav-${label.toLowerCase().replaceAll(' ', '-')}`}>
                {label}
              </a>
            ))}
            <button onClick={scrollToContact} className="group inline-flex items-center gap-2 rounded-full border border-[#10233f]/20 bg-white/65 px-4 py-2.5 text-[12px] font-bold text-[#10233f] backdrop-blur-sm transition hover:border-[#1f365e] hover:bg-[#1f365e] hover:text-white" data-testid="button-nav-quote">
              Request a quote <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </nav>
          <button onClick={() => setMenuOpen((current) => !current)} className="rounded-full border border-[#10233f]/20 bg-white/70 p-2.5 text-[#10233f] lg:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
           <div className="mx-4 rounded-xl border border-[#10233f]/10 bg-[#fbfaf6]/95 p-3 shadow-2xl backdrop-blur-md lg:hidden" data-testid="mobile-menu">
            {[
              ['Services', '#services'],
              ['How we work', '#approach'],
              ['About Kellys', '#about'],
              ['Request a quote', '#contact'],
            ].map(([label, href]) => (
               <a key={href} href={href} onClick={closeMenu} className="flex items-center justify-between border-b border-[#10233f]/10 px-3 py-3.5 text-sm font-semibold text-[#10233f] last:border-0" data-testid={`link-mobile-${label.toLowerCase().replaceAll(' ', '-')}`}>
                 {label}<ArrowRight size={15} className="text-[#1f365e]" />
              </a>
            ))}
          </div>
        )}
      </header>

       <section id="top" className="relative isolate min-h-[720px] bg-white text-[#10233f] sm:min-h-[780px]">
         <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,#ffffff_5%,rgba(255,255,255,.94)_42%,rgba(255,255,255,.55)_100%)]" />
         <img src={rooflinePath} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-25 mix-blend-multiply" />
         <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,.35),transparent_34%,rgba(255,255,255,.97))]" />
         <div className="absolute bottom-0 left-0 right-0 -z-10 h-32 bg-gradient-to-t from-white to-transparent" />
         <div className="absolute right-0 top-0 -z-10 hidden h-full w-[47%] overflow-hidden lg:block">
           <img src={rooferFixingRoofHeroPath} alt="Male roofer repairing a tiled roof with a hammer" className="h-full w-full object-cover object-center opacity-90" />
           <div className="absolute inset-0 bg-gradient-to-r from-white via-white/45 to-transparent" />
           <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/10" />
         </div>
        <div className="mx-auto flex min-h-[720px] max-w-[1380px] flex-col justify-end px-5 pb-14 pt-32 sm:min-h-[780px] sm:px-8 sm:pb-20 lg:px-12">
          <div className="max-w-[800px]">
            <p className="section-kicker reveal text-[#1f365e]">Roofing · building · interiors / Dublin</p>
             <h1 className="display-title reveal delay-1 mt-5 max-w-[780px] text-[clamp(3.6rem,9vw,8rem)] font-semibold text-[#10233f]">
              Proper work.<br /><span className="text-[#1f365e]">Solidly done.</span>
            </h1>
            <div className="reveal delay-2 mt-8 flex max-w-[570px] flex-col gap-7 sm:flex-row sm:items-end sm:gap-12">
               <p className="max-w-[410px] text-[15px] leading-7 text-[#536075] sm:text-base">
                Kellys Roofing & Interiors looks after the spaces that matter — from a leaking roof in a family home to the final detail of a property ready for its next chapter.
              </p>
               <button onClick={scrollToContact} className="group flex shrink-0 items-center gap-2 text-left text-sm font-bold text-[#10233f]" data-testid="button-hero-quote">
                Start with a conversation <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1f365e] text-white transition-transform group-hover:translate-x-1"><ArrowDownRight size={17} /></span>
              </button>
            </div>
          </div>
           <div className="reveal delay-3 mt-16 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[.18em] text-[#536075]">
            <span className="h-px w-16 bg-[#1f365e]" /> Serving homeowners, landlords, property managers & commercial clients
          </div>
        </div>
      </section>

       <section className="page-grid bg-white px-5 pb-20 text-[#10233f] sm:px-8 lg:px-12">
         <div className="mx-auto grid max-w-[1380px] grid-cols-1 gap-8 border-t border-[#10233f]/15 pt-10 sm:grid-cols-3 sm:gap-0">
          {[
            ['01', 'Roof over your head', 'Responsive thinking for the jobs you cannot afford to leave to chance.'],
            ['02', 'One joined-up team', 'The outside and the inside, considered as one property — not separate call-outs.'],
            ['03', 'Dublin, properly local', 'Familiar with the homes, weather and practical realities of working across the city.'],
          ].map(([number, title, text], index) => (
            <div key={number} className={`reveal delay-${index + 1} border-white/15 sm:px-8 sm:first:pl-0 sm:not-first:border-l`}>
              <span className="mono text-[11px] text-[#1f365e]">{number}</span>
              <h2 className="display mt-5 text-xl font-semibold">{title}</h2>
               <p className="mt-3 max-w-[270px] text-sm leading-6 text-[#536075]">{text}</p>
            </div>
          ))}
        </div>
      </section>

       <section id="services" className="page-grid bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-[720px]">
              <p className="section-kicker">What we take care of</p>
              <h2 className="display-title mt-5 text-[clamp(3rem,6vw,5.7rem)] font-semibold text-[#10233f]">The work behind<br /><span className="text-[#1f365e]">a better building.</span></h2>
            </div>
            <p className="max-w-[310px] text-sm leading-6 text-[#536075]">A practical scope, carefully managed. Tell us what is happening at your property and we will help you work out the right next move.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-3 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              const isOpen = openService === service.number;
              return (
                  <article key={service.number} className="group service-card rounded-lg border border-[#c9c5bb] bg-[#f8f6f0] p-6 sm:p-8" data-testid={`card-service-${service.number}`}>
                  <div className="flex items-start justify-between">
                    <span className="mono text-[11px] font-bold text-[#1f365e]">{service.number}</span>
                    <Icon size={22} strokeWidth={1.5} className="text-[#10233f]" />
                  </div>
                   <div className="relative mt-7 h-36 overflow-hidden rounded-md border border-[#10233f]/10">
                     <img src={service.image} alt={`${service.title} project work`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-[#10233f]/35 mix-blend-multiply" />
                   </div>
                  <h3 className="display mt-12 text-3xl font-semibold tracking-[-.035em] text-[#10233f]">{service.title}</h3>
                  <p className="mt-3 max-w-[470px] text-sm leading-6 text-[#536075]">{service.intro}</p>
                  <div className={`service-detail ${isOpen ? 'open' : ''}`}>
                    <p className="mt-4 max-w-[470px] border-t border-[#d7d1c5] pt-4 text-sm leading-6 text-[#10233f]">{service.detail}</p>
                  </div>
                  <button onClick={() => setOpenService(isOpen ? null : service.number)} className="mt-7 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.12em] text-[#10233f]" aria-expanded={isOpen} data-testid={`button-service-details-${service.number}`}>
                    {isOpen ? 'Close details' : 'See what is involved'} {isOpen ? <Minus size={15} className="text-[#1f365e]" /> : <MoveUpRight size={15} className="text-[#1f365e]" />}
                  </button>
                </article>
              );
            })}
          </div>
           <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-12">
             <figure className="project-card group relative min-h-[250px] overflow-hidden rounded-lg md:col-span-5">
               <img src={roofTilesPath} alt="Roof tiles prepared for a residential roofing project" className="absolute inset-0 h-full w-full object-cover" />
               <div className="absolute inset-0 bg-[#10233f]/35 mix-blend-multiply" />
               <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#10233f]/85 to-transparent px-5 pb-5 pt-16 text-sm font-semibold text-white">Materials that suit the building.</figcaption>
             </figure>
             <figure className="project-card group relative min-h-[250px] overflow-hidden rounded-lg md:col-span-4">
               <img src={roofFramingPath} alt="Roof framing work underway on a property" className="absolute inset-0 h-full w-full object-cover" />
               <div className="absolute inset-0 bg-[#10233f]/35 mix-blend-multiply" />
               <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#10233f]/85 to-transparent px-5 pb-5 pt-16 text-sm font-semibold text-white">Careful work beneath the surface.</figcaption>
             </figure>
             <figure className="project-card group relative min-h-[250px] overflow-hidden rounded-lg md:col-span-3">
               <img src={rooferFixingRoofHeroPath} alt="Male roofer repairing a tiled roof" className="absolute inset-0 h-full w-full object-cover" />
               <div className="absolute inset-0 bg-[#10233f]/35 mix-blend-multiply" />
               <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#10233f]/85 to-transparent px-5 pb-5 pt-16 text-sm font-semibold text-white">Work done with care.</figcaption>
             </figure>
           </div>
          <div className="mt-8 flex flex-col items-start justify-between gap-6 border-t border-[#c9c5bb] pt-7 sm:flex-row sm:items-center">
            <p className="text-sm text-[#536075]">Not sure which service fits? That is exactly what the first conversation is for.</p>
            <button onClick={scrollToContact} className="group inline-flex items-center gap-3 text-sm font-bold text-[#10233f]" data-testid="button-services-contact">
              Describe your project <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#10233f] text-[#f4f0e7] transition-transform group-hover:translate-x-1"><ArrowRight size={14} /></span>
            </button>
          </div>
        </div>
      </section>

       <section id="approach" className="page-grid bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1380px] gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="section-kicker">How we work</p>
            <h2 className="display-title mt-5 max-w-[450px] text-[clamp(3rem,6vw,5.3rem)] font-semibold text-[#10233f]">No fog.<br />Just a <span className="text-[#1f365e]">clear route</span> through the work.</h2>
            <p className="mt-7 max-w-[390px] text-sm leading-7 text-[#536075]">Property work can be disruptive enough without chasing updates or translating jargon. We keep the process visible and the conversation open.</p>
          </div>
          <div className="divide-y divide-[#aab9bc] border-y border-[#aab9bc]">
            {projectNotes.map(([number, title, text]) => (
              <div key={number} className="grid grid-cols-[50px_1fr] gap-5 py-8 sm:grid-cols-[80px_1fr] sm:gap-8">
                <span className="mono text-[11px] font-bold text-[#1f365e]">{number}</span>
                <div>
                  <h3 className="display text-2xl font-semibold text-[#10233f]">{title}</h3>
                  <p className="mt-3 max-w-[500px] text-sm leading-6 text-[#536075]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section id="about" className="page-grid bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1380px] items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-24">
           <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-[#10233f]/10 bg-[#dbe3e4] p-8 sm:p-12">
             <img src={roofingTeamPath} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[.12] mix-blend-multiply" />
             <div className="absolute -right-14 -top-10 h-52 w-52 rounded-full border-[24px] border-[#1f365e]/70" />
             <div className="absolute -bottom-28 -left-8 h-60 w-60 rounded-full border border-[#10233f]/20" />
            <div className="relative flex h-full flex-col justify-between">
               <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#536075]"><span className="h-2 w-2 rounded-full bg-[#1f365e]" /> The Kellys standard</div>
              <div>
                 <p className="display max-w-[510px] text-[clamp(2.3rem,5vw,4.5rem)] font-semibold leading-[.97] tracking-[-.045em] text-[#10233f]">Treat every address like someone’s <span className="text-[#1f365e]">home.</span></p>
                 <div className="mt-8 flex items-center gap-3 text-sm text-[#536075]"><ClipboardList size={17} className="text-[#1f365e]" /> A considered scope. A clean finish. No shortcuts in the details.</div>
              </div>
            </div>
          </div>
          <div>
            <p className="section-kicker">About Kellys</p>
            <h2 className="display-title mt-5 text-[clamp(2.8rem,5vw,4.7rem)] font-semibold text-[#10233f]">Built around<br /><span className="text-[#1f365e]">your peace of mind.</span></h2>
            <p className="mt-7 max-w-[500px] text-[15px] leading-7 text-[#536075]">Kellys Roofing & Interiors is a Dublin-based roofing and construction team for people who want their property work handled properly. We bring the same care to an urgent repair, a managed rental portfolio and a full roof-and-interior project.</p>
            <p className="mt-4 max-w-[500px] text-[15px] leading-7 text-[#536075]">The best work is often the least dramatic: good preparation, honest advice, and a finish that feels like it was always meant to be there.</p>
            <button onClick={scrollToContact} className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#1f365e] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#111315]" data-testid="button-about-contact">
              Talk through your property <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

       <section id="contact" className="page-grid bg-white px-5 py-24 text-[#10233f] sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1380px] gap-16 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="section-kicker">Let’s talk about the job</p>
            <h2 className="display-title mt-5 max-w-[560px] text-[clamp(3rem,6vw,5.8rem)] font-semibold">A sound next step starts with <span className="text-[#1f365e]">a few details.</span></h2>
             <p className="mt-7 max-w-[390px] text-sm leading-7 text-[#536075]">Share what you know below. We will review the basics and come back to arrange the right conversation or site visit.</p>
             <div className="mt-12 border-t border-[#10233f]/15 pt-6">
               <p className="mono text-[10px] uppercase tracking-[.16em] text-[#536075]">Prefer to speak?</p>
               <p className="mt-2 text-sm text-[#10233f]/75">Ask us to call you at a time that suits. We do not publish a number here, but every enquiry is read by the team.</p>
            </div>
          </div>
           <div className="rounded-lg border border-[#10233f]/10 bg-[#f8f6f0] p-6 shadow-sm sm:p-9">
            {submitted ? (
              <div className="flex min-h-[440px] flex-col justify-center" data-testid="status-form-success">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1f365e] text-white"><CircleCheck size={28} /></span>
                <p className="section-kicker mt-8">Enquiry received</p>
                 <h3 className="display mt-4 text-4xl font-semibold">Thanks — we have the outline.</h3>
                 <p className="mt-4 max-w-[430px] text-sm leading-7 text-[#536075]">Your details are ready for review. We will be in touch to understand the property and agree the best next step.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 inline-flex w-fit items-center gap-2 border-b border-[#1f365e] pb-1 text-sm font-bold text-[#1f365e]" data-testid="button-submit-another">Send another enquiry <ArrowRight size={14} /></button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-quote">
                <div className="grid gap-5 sm:grid-cols-2">
                   <label className="text-xs font-semibold text-[#536075]">Your name<input required name="name" placeholder="Name" className="field mt-2" data-testid="input-name" /></label>
                   <label className="text-xs font-semibold text-[#536075]">Best way to reach you<input required name="contact" placeholder="Phone or email" className="field mt-2" data-testid="input-contact" /></label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                   <label className="text-xs font-semibold text-[#536075]">Property area<input required name="area" placeholder="e.g. Rathmines" className="field mt-2" data-testid="input-area" /></label>
                   <label className="text-xs font-semibold text-[#536075]">I need help with<select name="service" defaultValue="" className="field mt-2" data-testid="select-service"><option value="" disabled>Select a service</option><option>Roof repairs</option><option>Roof replacement</option><option>Flat roofing</option><option>Interiors & building</option><option>Not sure yet</option></select></label>
                </div>
                 <label className="block text-xs font-semibold text-[#536075]">Tell us what is happening<textarea required name="message" placeholder="A few words about the property or the work needed" rows={5} className="field mt-2 resize-none" data-testid="textarea-message" /></label>
                 <div className="flex flex-col items-start justify-between gap-5 border-t border-[#10233f]/15 pt-5 sm:flex-row sm:items-center">
                   <p className="max-w-[270px] text-[11px] leading-5 text-[#536075]">Please do not include sensitive personal information. This form is for an initial project enquiry.</p>
                  <button type="submit" className="group inline-flex items-center gap-3 rounded-full bg-[#1f365e] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#111315]" data-testid="button-submit-quote">
                    Send enquiry <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

       <footer className="page-grid bg-white px-5 py-10 text-[#10233f] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1380px] flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <img src={logoPath} alt="Kellys Roofing and Interiors" className="h-auto w-[300px] max-w-full object-contain" />
             <p className="mt-5 text-xs text-[#536075]">Roofing, building & interiors across Dublin.</p>
          </div>
           <div className="flex flex-col items-start gap-3 text-xs text-[#536075] sm:items-end">
             <a href="#top" className="inline-flex items-center gap-2 font-bold text-[#10233f] transition-colors hover:text-[#1f365e]" data-testid="link-back-top">Back to top <ChevronDown size={14} className="rotate-180" /></a>
             <p data-testid="text-footer-note">Enquiries welcome from homeowners, landlords, property managers and commercial clients.</p>
          </div>
        </div>
         <div className="mx-auto mt-8 max-w-[1380px] border-t border-[#10233f]/15 pt-5 text-[10px] uppercase tracking-[.14em] text-[#536075]">Kellys Roofing & Interiors · Dublin</div>
      </footer>
    </main>
  );
}

export default App;