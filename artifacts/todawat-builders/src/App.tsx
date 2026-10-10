import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Instagram, Menu, MessageCircle, MoveUpRight, X } from 'lucide-react';

const whatsapp = 'https://wa.me/919983293141';
const instagram = 'https://www.instagram.com/todawatbuilders/';

const navItems = [
  { label: 'Our approach', href: '#approach' },
  { label: 'Homes', href: '#homes' },
  { label: 'The details', href: '#details' },
  { label: 'Get in touch', href: '#contact' },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -36px 0px' });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell min-h-[100dvh]">
      <header className="topbar fixed inset-x-0 top-0 z-50 border-b border-[#d7cbbc]/70">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <a href="#top" className="flex items-center gap-3" aria-label="Todawat Homes & Builders home" data-testid="link-home">
            <img src="/brand/todawat-logo.jpeg" alt="Todawat Builders Jaipur emblem" className="h-12 w-12 rounded-full object-cover ring-1 ring-[#b39a6b]/40" />
            <span className="leading-tight">
              <span className="block text-[13px] font-semibold tracking-[.16em] text-[#332b26]">TODAWAT</span>
              <span className="mt-0.5 block text-[9px] tracking-[.25em] text-[#766b60]">HOMES & BUILDERS · JAIPUR</span>
            </span>
          </a>
          <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
            {navItems.map((item) => <a key={item.href} href={item.href} className="nav-link text-[12px] font-medium tracking-[.05em] text-[#554941] hover:text-[#6e303d]" data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}>{item.label}</a>)}
          </nav>
          <div className="hidden md:block">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="button-lift inline-flex items-center gap-2 bg-[#6e303d] px-5 py-3 text-[11px] font-semibold tracking-[.12em] text-[#f8f3e9] hover:bg-[#53232e]" data-testid="link-header-whatsapp">
              START A CONVERSATION <ArrowUpRight size={14} strokeWidth={1.7} />
            </a>
          </div>
          <button type="button" className="grid h-11 w-11 place-items-center text-[#332b26] md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} data-testid="button-mobile-menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && <nav className="mobile-menu border-t border-[#d7cbbc] bg-[#f4efe5] px-6 pb-6 pt-3 md:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={closeMenu} className="block border-b border-[#d7cbbc]/70 py-4 text-sm text-[#554941]" data-testid={`link-mobile-${item.label.toLowerCase().replaceAll(' ', '-')}`}>{item.label}</a>)}
          <a href={whatsapp} target="_blank" rel="noreferrer" onClick={closeMenu} className="mt-5 flex items-center justify-between bg-[#6e303d] px-4 py-3 text-sm text-[#f8f3e9]" data-testid="link-mobile-whatsapp">Talk to us on WhatsApp <ArrowUpRight size={16} /></a>
        </nav>}
      </header>

      <main id="top">
        <section className="relative min-h-[790px] overflow-hidden px-5 pb-16 pt-[128px] sm:px-8 lg:min-h-[850px] lg:px-14 lg:pb-20 lg:pt-[148px]">
          <div className="fine-grain pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-12">
            <div className="relative z-10 max-w-[600px]">
              <div className="reveal mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.25em] text-[#7c5f47]">
                <span className="h-px w-9 bg-[#b39a6b]" /> Jaipur, Rajasthan <span className="text-[#b39a6b]">/</span> Homes with a sense of place
              </div>
              <h1 className="serif reveal reveal-delay-1 max-w-[660px] text-[clamp(3.4rem,7.3vw,6.9rem)] leading-[.97] tracking-[-.055em] text-[#332b26]">
                A home should <span className="italic text-[#6e303d]">feel</span> like yours.
              </h1>
              <p className="reveal reveal-delay-2 mt-7 max-w-[430px] text-[15px] leading-[1.9] text-[#766b60] sm:text-[16px]">
                Thoughtfully finished villas, flats and family homes in Jaipur — found with care, and chosen around the way you want to live.
              </p>
              <div className="reveal reveal-delay-2 mt-9 flex flex-wrap items-center gap-5">
                <a href="#homes" className="button-lift inline-flex items-center gap-4 bg-[#6e303d] px-6 py-[17px] text-[11px] font-semibold tracking-[.13em] text-[#f8f3e9]" data-testid="link-explore-homes">
                  EXPLORE HOMES <ArrowRight size={15} />
                </a>
                <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[12px] font-medium text-[#554941] transition-colors hover:text-[#6e303d]" data-testid="link-hero-whatsapp">
                  <MessageCircle size={16} strokeWidth={1.6} /> Tell us what you’re looking for
                </a>
              </div>
              <div className="reveal reveal-delay-2 mt-16 flex items-center gap-4 border-t border-[#d7cbbc] pt-5 text-[10px] uppercase tracking-[.19em] text-[#766b60]">
                <span className="grid h-8 w-8 place-items-center rounded-full border border-[#b39a6b]/60 text-[#6e303d]"><ArrowDown size={14} /></span>
                Scroll to find your kind of home
              </div>
            </div>
            <div className="hero-stage reveal relative mx-auto w-full max-w-[650px] lg:ml-auto">
              <div className="hero-photo relative ml-auto h-[460px] w-[88%] overflow-hidden bg-[#ded1bf] sm:h-[570px] lg:h-[630px]">
                <img src="/brand/villa-exterior.jpeg" alt="Jaipur family villa with balcony and carved entry gates" className="h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1a17]/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-[#fbf7ee]">
                  <span className="mb-2 block text-[9px] uppercase tracking-[.24em]">A considered first impression</span>
                  <span className="serif text-2xl">Room to arrive. Space to belong.</span>
                </div>
              </div>
              <div className="absolute -bottom-8 left-0 z-10 w-[178px] bg-[#e8dece] p-3 shadow-[0_18px_40px_rgba(53,39,29,.14)] sm:-left-2 sm:w-[208px]">
                <div className="arch-frame h-[174px] overflow-hidden sm:h-[204px]">
                  <img src="/brand/living-room.jpeg" alt="Warmly finished Jaipur living room interior" className="h-full w-full object-cover object-center" />
                </div>
                <div className="flex items-center justify-between pt-3">
                  <span className="text-[9px] uppercase tracking-[.16em] text-[#6a5b4f]">Made for everyday</span>
                  <span className="text-[#6e303d]"><MoveUpRight size={14} /></span>
                </div>
              </div>
              <div className="absolute -right-2 top-10 hidden h-[114px] w-[114px] rotate-[7deg] items-center justify-center rounded-full border border-[#b39a6b] bg-[#f4efe5] text-center sm:flex">
                <span className="serif text-[13px] leading-[1.35] text-[#6e303d]">At home<br />in Jaipur<br /><span className="text-[9px] tracking-[.2em]">RAJASTHAN</span></span>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-8 right-14 hidden text-[9px] uppercase tracking-[.28em] text-[#9b8976] lg:block">26°54′ N &nbsp; 75°47′ E</div>
        </section>

        <section id="approach" className="relative bg-[#6e303d] px-5 py-20 text-[#f4efe5] sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto grid max-w-[1210px] gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
            <div className="reveal">
              <p className="text-[10px] font-semibold uppercase tracking-[.25em] text-[#d9c49b]">A more personal way to find home</p>
              <div className="mt-7 h-px w-16 bg-[#b39a6b]" />
              <p className="mt-5 text-[12px] leading-6 text-[#dfd0c0]">TODAWAT HOMES & BUILDERS<br />JAIPUR, INDIA</p>
            </div>
            <div className="reveal reveal-delay-1">
              <h2 className="serif max-w-[790px] text-[clamp(2.4rem,5.2vw,4.8rem)] leading-[1.09] tracking-[-.04em]">
                Finding the right place is <span className="italic text-[#d9c49b]">personal.</span> The search should be, too.
              </h2>
              <div className="mt-8 grid gap-8 border-t border-[#f4efe5]/20 pt-7 sm:grid-cols-2">
                <p className="text-[14px] leading-[1.85] text-[#e6d9cb]">A first home, a little more room for everyone, or a fresh start in a new part of Jaipur. We help you explore homes with the details that matter to your family in focus.</p>
                <p className="text-[14px] leading-[1.85] text-[#e6d9cb]">From the first conversation to walking through a home, we keep the process clear, unhurried and grounded in what you are actually looking for.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="homes" className="px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
              <div className="reveal">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[.25em] text-[#8d735b]">The places we help you discover</p>
                <h2 className="serif text-[clamp(2.6rem,5vw,5rem)] leading-[1.03] tracking-[-.05em]">A home for the<br className="hidden sm:block" /> life you’re making.</h2>
              </div>
              <p className="reveal max-w-[340px] text-[13px] leading-7 text-[#766b60]">Every home has its own character. Start with the kind of space you need, and we’ll help you explore from there.</p>
            </div>

            <div className="grid gap-5 lg:grid-cols-12 lg:gap-7">
              <article className="image-card reveal overflow-hidden bg-[#e9dfcf] lg:col-span-7">
                <div className="relative h-[390px] overflow-hidden sm:h-[500px]">
                  <img src="/brand/villa-exterior.jpeg" alt="Villa exterior in Jaipur with open balcony and entry courtyard" className="h-full w-full object-cover object-center" />
                  <span className="absolute left-5 top-5 bg-[#f4efe5]/90 px-4 py-2 text-[9px] font-semibold uppercase tracking-[.2em] text-[#6e303d]">01 / VILLAS</span>
                  <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Enquire about villas on WhatsApp" className="absolute bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full bg-[#f4efe5] text-[#6e303d] transition-transform hover:scale-105" data-testid="link-enquire-villas"><ArrowUpRight size={19} /></a>
                </div>
                <div className="flex flex-col justify-between gap-4 px-6 py-6 sm:flex-row sm:items-center sm:px-8">
                  <div><h3 className="serif text-[30px]">Villas, with room to grow</h3><p className="mt-1 text-[12px] text-[#766b60]">Independent living, shaped around your family.</p></div>
                  <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.16em] text-[#6e303d]" data-testid="link-villa-details">Ask about villas <ArrowRight size={14} /></a>
                </div>
              </article>
              <div className="grid gap-5 lg:col-span-5 lg:gap-7">
                <article className="image-card reveal reveal-delay-1 overflow-hidden bg-[#e9dfcf]">
                  <div className="relative h-[290px] overflow-hidden sm:h-[340px]">
                    <img src="/brand/lounge.jpeg" alt="Soft neutral lounge interior with considered lighting" className="h-full w-full object-cover object-center" />
                    <span className="absolute left-5 top-5 bg-[#f4efe5]/90 px-4 py-2 text-[9px] font-semibold uppercase tracking-[.2em] text-[#6e303d]">02 / FLATS</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 px-6 py-5">
                    <div><h3 className="serif text-[27px]">Flats, thoughtfully found</h3><p className="mt-1 text-[11px] text-[#766b60]">A home that fits the rhythm of your days.</p></div>
                    <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Enquire about flats on WhatsApp" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#b39a6b]/70 text-[#6e303d] transition-colors hover:bg-[#6e303d] hover:text-[#f4efe5]" data-testid="link-enquire-flats"><ArrowUpRight size={17} /></a>
                  </div>
                </article>
                <div className="reveal reveal-delay-2 relative flex min-h-[195px] flex-col justify-between overflow-hidden bg-[#ded0bb] p-7 sm:p-8">
                  <div className="absolute -right-5 -top-10 h-44 w-44 rounded-full border border-[#a98e6c]/40" />
                  <div className="absolute -right-1 -top-4 h-36 w-36 rounded-full border border-[#a98e6c]/40" />
                  <span className="relative text-[9px] font-semibold uppercase tracking-[.22em] text-[#755c47]">03 / FINISHED HOMES</span>
                  <div className="relative flex items-end justify-between gap-4">
                    <div><h3 className="serif max-w-[280px] text-[29px] leading-tight">Ready to feel like yours.</h3><p className="mt-2 max-w-[250px] text-[12px] leading-5 text-[#766b60]">Explore well-finished homes with the details brought into view.</p></div>
                    <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Ask about finished homes on WhatsApp" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#6e303d] text-[#f4efe5] transition-transform hover:scale-105" data-testid="link-enquire-finished-homes"><ArrowUpRight size={18} /></a>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-[10px] leading-5 text-[#8a7e71]">Homes shown are representative of our work and conversations. Current options and listing-specific details are shared directly.</p>
          </div>
        </section>

        <section id="details" className="bg-[#e9dfcf] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
              <div className="reveal order-2 lg:order-1">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[.25em] text-[#8d735b]">The difference is in the details</p>
                <h2 className="serif max-w-[560px] text-[clamp(2.7rem,5.1vw,5rem)] leading-[1.02] tracking-[-.05em]">Finished with care.<br /><span className="italic text-[#6e303d]">Considered</span> as a whole.</h2>
                <p className="mt-6 max-w-[420px] text-[14px] leading-[1.9] text-[#766b60]">Light, movement, a place for everyone to gather. We notice how a home comes together, then help you see whether it comes together for you.</p>
                <div className="mt-9 space-y-0 border-t border-[#cfc1ae]">
                  {[
                    ['A feeling of arrival', 'An entry that welcomes you in and sets the tone for the home.'],
                    ['Spaces that live well', 'Rooms to gather, find quiet, and make everyday life your own.'],
                    ['The finish, up close', 'Materials, lighting and small decisions that make a space feel complete.'],
                  ].map(([title, text], i) => <div key={title} className="flex gap-5 border-b border-[#cfc1ae] py-5">
                    <span className="serif pt-1 text-[13px] italic text-[#9c7955]">0{i + 1}</span>
                    <div><h3 className="text-[13px] font-semibold text-[#3c3028]">{title}</h3><p className="mt-1.5 text-[12px] leading-5 text-[#766b60]">{text}</p></div>
                  </div>)}
                </div>
              </div>
              <div className="reveal reveal-delay-1 order-1 grid grid-cols-[1fr_.76fr] items-center gap-4 sm:gap-6 lg:order-2">
                <div className="image-card relative mt-12 overflow-hidden bg-[#d7c8b4]">
                  <img src="/brand/living-room.jpeg" alt="Sculptural wall detailing and warm seating in a living room" className="h-[365px] w-full object-cover sm:h-[480px]" />
                  <span className="absolute bottom-4 left-4 bg-[#f4efe5]/90 px-3 py-2 text-[9px] uppercase tracking-[.16em] text-[#6e303d]">Living, in its own light</span>
                </div>
                <div className="image-card relative -mt-12 overflow-hidden bg-[#d7c8b4]">
                  <img src="/brand/bedroom.jpeg" alt="Finished bedroom with subtle curved lighting and built-in detailing" className="h-[300px] w-full object-cover sm:h-[400px]" />
                  <span className="absolute bottom-4 left-3 bg-[#f4efe5]/90 px-3 py-2 text-[9px] uppercase tracking-[.16em] text-[#6e303d]">A quieter corner</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden px-5 py-7 sm:px-8 lg:px-14">
          <div className="marquee-line mx-auto flex max-w-[1320px] flex-wrap items-center justify-center gap-x-8 gap-y-3 py-6 text-center text-[9px] font-medium uppercase tracking-[.22em] text-[#725e4d] sm:gap-x-12 sm:text-[10px]">
            <span>Villas</span><span className="text-[#b39a6b]">◆</span><span>Flats</span><span className="text-[#b39a6b]">◆</span><span>Family homes</span><span className="text-[#b39a6b]">◆</span><span>Jaipur, Rajasthan</span>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto grid max-w-[1210px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div className="reveal">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[.25em] text-[#8d735b]">A straightforward journey</p>
              <h2 className="serif text-[clamp(2.7rem,5vw,4.7rem)] leading-[1.04] tracking-[-.05em]">From first thought to front door.</h2>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 border-b border-[#6e303d]/40 pb-2 text-[11px] font-semibold uppercase tracking-[.15em] text-[#6e303d] hover:border-[#6e303d]" data-testid="link-start-conversation">Start with a conversation <ArrowRight size={15} /></a>
            </div>
            <div className="reveal reveal-delay-1">
              {[
                ['01', 'Tell us what home means to you', 'Share what you need, where you hope to be, and what matters most to your family.'],
                ['02', 'Explore the possibilities', 'We’ll help you look through relevant homes and arrange a closer look at the ones that feel right.'],
                ['03', 'Get the details, clearly', 'Ask about the property, its finish and its paperwork. Approval details are available per listing.'],
              ].map(([number, title, text]) => <article key={number} className="grid grid-cols-[42px_1fr] gap-5 border-t border-[#d7cbbc] py-6 sm:grid-cols-[56px_1fr] sm:gap-7">
                <span className="serif text-[18px] italic text-[#a28763]">{number}</span>
                <div><h3 className="serif text-[23px] leading-tight text-[#332b26]">{title}</h3><p className="mt-2 max-w-[500px] text-[12px] leading-6 text-[#766b60]">{text}</p></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="relative bg-[#332b26] px-5 py-20 text-[#f4efe5] sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto grid max-w-[1280px] items-center gap-10 md:grid-cols-[.72fr_1.28fr]">
            <div className="reveal relative mx-auto w-[230px] sm:w-[270px]">
              <div className="absolute inset-[-13px] rotate-[-5deg] border border-[#b39a6b]/60" />
              <img src="/brand/lounge.jpeg" alt="Quiet, warmly lit Jaipur home interior" className="relative h-[310px] w-full object-cover sm:h-[375px]" />
              <span className="absolute -bottom-4 -right-4 bg-[#b39a6b] px-4 py-3 text-[9px] uppercase tracking-[.2em] text-[#332b26]">A home, seen up close</span>
            </div>
            <div className="reveal reveal-delay-1 md:pl-10">
              <span className="text-[10px] font-semibold uppercase tracking-[.25em] text-[#d9c49b]">No rush. Just a good place to begin.</span>
              <h2 className="serif mt-6 max-w-[760px] text-[clamp(2.7rem,5.8vw,5.4rem)] leading-[1.01] tracking-[-.05em]">Let’s find the place that feels like <span className="italic text-[#d9c49b]">home.</span></h2>
              <p className="mt-6 max-w-[480px] text-[14px] leading-7 text-[#d4c7b9]">Tell us a little about what you have in mind. We’ll take it from there, one thoughtful conversation at a time.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={whatsapp} target="_blank" rel="noreferrer" className="button-lift inline-flex items-center gap-3 bg-[#d9c49b] px-6 py-4 text-[11px] font-semibold uppercase tracking-[.15em] text-[#332b26]" data-testid="link-contact-whatsapp"><MessageCircle size={16} /> WhatsApp us <ArrowUpRight size={14} /></a>
                <a href={instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-[#f4efe5]/35 px-6 py-4 text-[11px] font-semibold uppercase tracking-[.15em] text-[#f4efe5] transition-colors hover:bg-[#f4efe5]/10" data-testid="link-contact-instagram"><Instagram size={16} /> Follow along <ArrowUpRight size={14} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#e9dfcf] px-5 pb-7 pt-12 sm:px-8 lg:px-14 lg:pt-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 border-b border-[#cfc1ae] pb-10 md:grid-cols-[1fr_auto_auto] md:items-start md:gap-20">
            <div>
              <a href="#top" className="inline-flex items-center gap-3" data-testid="link-footer-home">
                <img src="/brand/todawat-logo.jpeg" alt="" className="h-12 w-12 rounded-full object-cover" />
                <span><span className="block text-[12px] font-semibold tracking-[.16em]">TODAWAT</span><span className="block text-[9px] tracking-[.2em] text-[#766b60]">HOMES & BUILDERS · JAIPUR</span></span>
              </a>
              <p className="mt-5 max-w-[330px] text-[12px] leading-6 text-[#766b60]">Thoughtfully helping families discover villas, flats and well-finished homes in Jaipur.</p>
            </div>
            <div>
              <p className="mb-4 text-[9px] font-semibold uppercase tracking-[.22em] text-[#8d735b]">Find your way</p>
              <div className="flex flex-col gap-3 text-[12px] text-[#554941]">
                <a href="#approach" className="hover:text-[#6e303d]" data-testid="link-footer-approach">Our approach</a>
                <a href="#homes" className="hover:text-[#6e303d]" data-testid="link-footer-homes">Explore homes</a>
                <a href="#details" className="hover:text-[#6e303d]" data-testid="link-footer-details">The details</a>
              </div>
            </div>
            <div>
              <p className="mb-4 text-[9px] font-semibold uppercase tracking-[.22em] text-[#8d735b]">Say hello</p>
              <div className="flex flex-col gap-3 text-[12px] text-[#554941]">
                <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#6e303d]" data-testid="link-footer-whatsapp"><MessageCircle size={15} /> +91 99832 93141</a>
                <a href={instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#6e303d]" data-testid="link-footer-instagram"><Instagram size={15} /> Instagram <ArrowUpRight size={12} /></a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-5 text-[9px] leading-5 text-[#8a7e71] sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Todawat Homes & Builders · Jaipur, Rajasthan</span>
            <span>Property particulars and approval details are available per listing.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
