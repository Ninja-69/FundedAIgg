import React, { useEffect, useState } from 'react';
import { Menu, X, Check, Code2, BrainCircuit, TrendingUp, ArrowRight, Clock } from 'lucide-react';

declare global {
  interface Window {
    UnicornStudio: any;
  }
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    if (!window.UnicornStudio) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js';
      script.onload = () => {
        if (window.UnicornStudio) {
          window.UnicornStudio.init();
        }
      };
      document.head.appendChild(script);
    } else {
      window.UnicornStudio.init();
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full h-full">
      <header className="overflow-hidden relative">
        <div className="absolute inset-0" data-container-bg="true">
          <div data-us-project="bmaMERjX2VZDtPrh4Zwx" className="absolute w-full h-full left-0 top-0 -z-10"></div>
        </div>
        {/* Background Animation scoped to Header */}
        <div 
          className="absolute inset-0 -z-10 w-full h-full pointer-events-none" 
          style={{ maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent)' }}
        >
          <div data-us-project="bmaMERjX2VZDtPrh4Zwx" className="absolute w-full h-full left-0 top-0 -z-10"></div>
        </div>

        <div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-4">
          {/* Nav */}
          <nav className="flex mt-6 items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <img src="https://i.ibb.co/ZRc2kt2R/logotype.png" alt="Rawhay" className="w-auto h-12" />
            </a>

            <div className="hidden md:flex md:gap-x-2 border rounded-full p-1 backdrop-blur-lg items-center border-white/10 bg-purple-400/5">
              <a href="#manifesto" className="text-sm font-medium font-geist py-2 px-3 hover:text-white text-white/80">Philosophy</a>
              <a href="#ecosystem" className="px-3 py-2 text-sm font-medium font-geist text-white/80 hover:text-white">Ecosystem</a>
              <a href="#pricing" className="px-3 py-2 text-sm font-medium font-geist text-white/80 hover:text-white">Investment</a>
              <div className="relative inline-block group text-xs rounded-full">
                <a href="#application" className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] border py-3 px-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] text-xs rounded-full cursor-pointer inline-flex text-white border-white/20 bg-fuchsia-900/60">
                  <span className="relative z-10 inline-flex items-center gap-2 font-medium text-xs rounded-full font-geist">Apply</span>
                  <span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0 text-xs rounded-full"></span>
                  <span className="glow pointer-events-none absolute inset-0 -z-10 text-xs rounded-full" aria-hidden="true"></span>
                </a>
              </div>
            </div>

            <button 
              className="md:hidden inline-flex text-sm font-medium font-geist border rounded-lg py-2 px-3 backdrop-blur gap-2 items-center border-white/10 bg-purple-400/5" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
              Menu
            </button>
          </nav>

          {/* Hero */}
          <section className="z-10 sm:pt-20 md:pt-48 md:pb-24 max-w-5xl pt-20 pb-32 relative text-left">
            <h1 className="sm:text-6xl md:text-7xl [animation:fadeSlideIn_1s_ease-out_0.2s_forwards] text-4xl tracking-tighter font-geist opacity-0 max-w-5xl">
              Strategic Growth.<br />Engineered by Rawhay.
            </h1>
            <p className="sm:text-lg [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-base font-normal font-geist max-w-2xl mt-6 text-white/70">
               We don't just create websites; we build premium digital assets that outperform the market. Stop paying for "pretty" and start investing in "profitable".
            </p>
            <div className="flex flex-col sm:flex-row [animation:fadeSlideIn_1s_ease-out_0.4s_both] mt-8 gap-3 items-start sm:items-center justify-start">
              <a href="#application" className="group relative inline-flex min-w-[140px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-semibold tracking-tight border rounded-full py-[12px] px-[20px] items-center justify-center hover:text-white text-fuchsia-400 bg-fuchsia-800 border-fuchsia-600">
                <span className="relative z-10 font-medium rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">Launch Your Project</span>
                <span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-full blur-md font-geist">Apply</span>
                <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-fuchsia-200 to-transparent rounded-full blur-[2px]"></span>
              </a>
              <a href="#ecosystem" className="inline-flex items-center gap-2 text-base font-medium border rounded-full py-3 px-6 backdrop-blur font-geist hover:bg-white/10 text-white/90 border-white/10 bg-purple-400/5">
                Explore Ecosystem
              </a>
            </div>
          </section>
        </div>
      </header>

      {/* Trusted By */}
      <section className="z-10 sm:px-6 lg:px-8 max-w-7xl mt-12 mx-auto px-6 pb-16 relative">
        <p className="[animation:fadeSlideIn_1s_ease-out_0.5s_both] text-sm font-medium text-center mb-6 font-geist text-white/50">Trusted by a tight-knit circle of high-growth founders</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center [animation:fadeSlideIn_1s_ease-out_0.6s_both]">
          <div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d052699d-f578-4c01-9806-f5b6c8609489_320w.png')] bg-cover rounded invert opacity-60 hover:opacity-100 transition-opacity"></div>
          <div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3185425e-0207-434a-9554-cdb5bd455ea5_320w.png')] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
          <div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c26c041-308e-4034-9227-5a6c57d94f4d_1600w.png')] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
          <div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8de253ef-3c06-4a22-8e14-1a6a9d8580d5_320w.png')] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
          <div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d3f4a52-05b5-4539-987a-d4b1ff330ef1_1600w.png')] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
          <div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e561d59c-a675-431e-a035-187a88fbe4c2_1600w.png')] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
        </div>
      </section>

      {/* 1. THE MANIFESTO */}
      <section id="manifesto" className="relative py-24 border-y bg-white/[0.02] border-white/5">
        <div className="sm:px-6 lg:px-8 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xs font-semibold tracking-wider uppercase font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] text-slate-500">The Manifesto</h2>
          <h3 className="mt-4 text-3xl sm:text-5xl font-geist tracking-tighter animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] text-white">
            The Hard Truth: <br />Your Website is Losing Money.
          </h3>
          
          <div className="mt-10 relative border rounded-2xl p-8 sm:p-12 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both] border-white/10 bg-fuchsia-900/50">
             <svg className="absolute top-6 left-6 h-8 w-8 transform -translate-x-2 -translate-y-2 text-white/20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
             </svg>
             <p className="relative text-lg sm:text-xl font-geist leading-relaxed text-white/80">
               Most agencies sell you a digital brochure that looks nice but sells nothing. You don't need "just a website". You need a conversion system. We don't guess; we engineer data-driven results. Stop paying for hours worked, invest in results delivered.
             </p>
             <div className="mt-6 flex items-center justify-center gap-3">
               <div className="h-px w-12 bg-white/20"></div>
               <span className="text-sm font-medium font-geist text-white/50">The Rawhay Strategy Team</span>
               <div className="h-px w-12 bg-white/20"></div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. US VS THEM */}
      <section className="relative py-24 overflow-hidden">
        <div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter">The Rawhay Standard</h2>
            <p className="mt-4 font-geist max-w-2xl mx-auto text-white/60">Don't compare price. Compare speed, efficiency, and revenue impact.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
            {/* Them */}
            <div className="p-8 rounded-2xl border bg-white/[0.02] flex flex-col gap-6 opacity-60 grayscale transition hover:opacity-80 hover:grayscale-0 border-white/5">
              <h3 className="text-xl font-medium font-geist text-white/50">Traditional Agencies</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white/50">
                  <X className="text-red-500/50 w-5 h-5" />
                  <span className="font-geist">6-12 Week Turnaround</span>
                </li>
                <li className="flex items-center gap-3 text-white/50">
                  <X className="text-red-500/50 w-5 h-5" />
                  <span className="font-geist">Bloated Code &amp; Slow Loading</span>
                </li>
                <li className="flex items-center gap-3 text-white/50">
                  <X className="text-red-500/50 w-5 h-5" />
                  <span className="font-geist">Focus on "Design Awards"</span>
                </li>
                <li className="flex items-center gap-3 text-white/50">
                  <X className="text-red-500/50 w-5 h-5" />
                  <span className="font-geist">Radio Silence for Weeks</span>
                </li>
              </ul>
            </div>

            {/* Us */}
            <div className="relative p-8 rounded-2xl border flex flex-col gap-6 shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)] border-slate-500/30 bg-slate-900/10">
              <div className="absolute -top-3 -right-3">
                <span className="relative flex h-6 w-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-slate-400"></span>
                  <span className="relative inline-flex rounded-full h-6 w-6 items-center justify-center bg-slate-500">
                    <Check className="text-black w-[14px] h-[14px]" strokeWidth={3} />
                  </span>
                </span>
              </div>
              <h3 className="text-xl font-medium font-geist text-white">Rawhay</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white">
                  <div className="p-1 rounded-full bg-slate-500/20"><Check className="text-emerald-400 w-4 h-4" strokeWidth={3} /></div>
                  <span className="font-geist font-medium">7-14 Day Sprints</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <div className="p-1 rounded-full bg-slate-500/20"><Check className="text-emerald-400 w-4 h-4" strokeWidth={3} /></div>
                  <span className="font-geist font-medium">Performance-First Architecture</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <div className="p-1 rounded-full bg-slate-500/20"><Check className="text-emerald-400 w-4 h-4" strokeWidth={3} /></div>
                  <span className="font-geist font-medium">Revenue &amp; ROI Focus</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <div className="p-1 rounded-full bg-slate-500/20"><Check className="text-emerald-400 w-4 h-4" strokeWidth={3} /></div>
                  <span className="font-geist font-medium">Daily Updates &amp; Transparency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPANDED SERVICES */}
      <section className="z-10 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 px-6 pb-20 relative" id="ecosystem">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-medium font-geist [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll text-white/50">Global Ecosystem</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">Value Ecosystem</h2>
            <p className="mt-3 text-base font-geist [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll text-white/70">The three pillars of a high-converting digital asset.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1: Development */}
          <div className="relative overflow-hidden rounded-2xl border [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll group hover:bg-white/[0.07] transition-colors md:col-span-1 border-white/10 bg-purple-400/5">
            <div className="p-6 sm:p-8 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="p-2 border rounded-lg bg-slate-500/10 border-slate-500/20">
                  <Code2 className="text-blue-400 w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-medium tracking-tight font-geist text-white">Clean Code Architecture</h3>
              <p className="mt-3 text-sm font-geist leading-relaxed text-white/70">Speed is a feature. We build on lightweight frameworks that load instantly. Google loves it, users love it, and your bounce rate drops to zero.</p>
            </div>
          </div>

          {/* Card 2: Design */}
          <div className="relative overflow-hidden rounded-2xl border [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll group hover:bg-white/[0.07] transition-colors md:col-span-1 border-white/10 bg-purple-400/5">
             <div className="p-6 sm:p-8 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="p-2 border rounded-lg bg-slate-500/10 border-slate-500/20">
                  <BrainCircuit className="text-fuchsia-400 w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-medium tracking-tight font-geist text-white">Psychological Design</h3>
              <p className="mt-3 text-sm font-geist leading-relaxed text-white/70">We don't just pick colors. We design user journeys that psychologically guide your visitor to the 'Buy' button. Every pixel has a purpose.</p>
            </div>
          </div>

          {/* Card 3: Growth */}
          <div className="relative overflow-hidden rounded-2xl border [animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll group hover:bg-white/[0.07] transition-colors md:col-span-1 border-white/10 bg-purple-400/5">
            <div className="p-6 sm:p-8 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="p-2 border rounded-lg bg-slate-500/10 border-slate-500/20">
                  <TrendingUp className="text-emerald-400 w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-medium tracking-tight font-geist text-white">SEO &amp; Scalability</h3>
              <p className="mt-3 text-sm font-geist leading-relaxed text-white/70">Built to rank. Built to scale. Your site is technically optimized for search engines from Day 1. Don't chase traffic, attract it.</p>
            </div>
          </div>

          {/* Big feature: Portfolio Item */}
          <div className="group relative overflow-hidden rounded-2xl border md:col-span-3 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll mt-6 border-white/10 bg-purple-400/5">
            <div className="absolute inset-0 bg-gradient-to-r to-transparent z-10 from-black via-black/50"></div>
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5badae71-a5f7-4201-aee1-3b316e682fb0_1600w.jpg" alt="NexChain Project" className="absolute right-0 top-0 h-full w-2/3 object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" />
            
            <div className="p-8 sm:p-12 relative z-20 h-full flex flex-col justify-center max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium font-geist border-slate-400/30 bg-slate-400/15 text-slate-200">Case Study</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-geist tracking-tighter">NexChain Infrastructure</h3>
              <p className="mt-4 text-base sm:text-lg font-geist text-white/70">See how we transformed a fragmented crypto brand into a market authority, increasing conversion by 200% in 30 days.</p>
              <div className="mt-8">
                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium rounded-lg px-4 py-2 transition font-geist text-black bg-white hover:bg-fuchsia-200">
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS PATH */}
      <section className="py-24 bg-white/[0.02] border-y relative border-white/5">
          <div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-6">
               <div className="text-center mb-16 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter">From Concept to Cash Flow</h2>
                  <p className="mt-4 font-geist text-white/60">The path to your new digital asset.</p>
              </div>

              <div className="relative grid md:grid-cols-3 gap-8">
                  {/* Connecting Line (Desktop) */}
                  <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                  {/* Step 1 */}
                  <div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
                      <div className="w-16 h-16 rounded-full border flex items-center justify-center relative z-10 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)] bg-black border-white/20">
                          <span className="text-xl font-bold font-geist text-white">01</span>
                      </div>
                      <h3 className="text-xl font-medium font-geist mb-2 text-white">Audit &amp; Strategy</h3>
                      <p className="text-sm font-geist leading-relaxed max-w-xs text-white/60">We identify the bottlenecks in your current funnel and map out revenue opportunities.</p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
                      <div className="w-16 h-16 rounded-full border flex items-center justify-center relative z-10 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)] border-slate-500/50 bg-black">
                          <span className="text-xl font-bold font-geist text-slate-400">02</span>
                      </div>
                      <h3 className="text-xl font-medium font-geist mb-2 text-white">Sprint Build</h3>
                      <p className="text-sm font-geist leading-relaxed max-w-xs text-white/60">High-intensity design and development phase. No fluff, just rapid execution of the agreed strategy.</p>
                  </div>

                   {/* Step 3 */}
                   <div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]">
                      <div className="w-16 h-16 rounded-full border flex items-center justify-center relative z-10 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)] bg-black border-white/20">
                          <span className="text-xl font-bold font-geist text-white">03</span>
                      </div>
                      <h3 className="text-xl font-medium font-geist mb-2 text-white">Launch &amp; Scale</h3>
                      <p className="text-sm font-geist leading-relaxed max-w-xs text-white/60">Deployment of your asset and conversion optimization. We hand you the keys to a revenue engine.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Pricing Section */}
      <section className="sm:p-8 sm:m-8 mt-10 mx-8 mb-10 p-6" id="pricing">
        <div className="relative">
          {/* Header */}
          <div className="relative max-w-5xl mx-auto text-center [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-white/80 bg-purple-400/5">
              <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
              <span className="text-xs font-normal font-geist">Investment</span>
            </div>
            <h2 className="text-[40px] sm:text-6xl leading-[0.95] mt-4 font-geist tracking-tighter text-white">Invest in Assets, not Expenses.</h2>
            <p className="mt-3 text-sm sm:text-base max-w-2xl mx-auto font-geist text-white/70">
              Lean pricing for major results. No hidden fees. No bloated contracts.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="relative max-w-[1400px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            
            {/* Tier 1: The Launchpad */}
            <article className="relative overflow-hidden rounded-2xl border backdrop-blur-xl p-6 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll flex flex-col h-full hover:bg-white/[0.07] transition-colors duration-300 border-white/10 bg-purple-400/5">
              <div className="relative flex flex-col gap-1 mb-6">
                <h3 className="text-lg font-medium tracking-tight font-geist text-white">The Launchpad</h3>
                <p className="text-xs font-geist text-white/50">Solopreneurs &amp; Idea Validation.</p>
              </div>
              <div className="relative mb-6">
                <div className="flex items-end gap-1">
                  <p className="text-3xl lg:text-4xl font-geist tracking-tighter text-white">₹1,999</p>
                  <span className="text-xs mb-1.5 font-geist uppercase tracking-wide text-white/40">/ One-time payment</span>
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-geist border-white/10 text-white/70 bg-purple-400/5">
                  <Clock className="w-3 h-3" />
                  Delivery: 48 Hours
                </div>
              </div>
              <ul className="space-y-3.5 flex-1 mb-8">
                <li className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-emerald-400 w-4 h-4" strokeWidth={2} /><span className="text-sm font-geist text-white/80">1 High-Converting Landing Page</span></li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-emerald-400 w-4 h-4" strokeWidth={2} /><span className="text-sm font-geist text-white/80">Mobile-First Architecture</span></li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-emerald-400 w-4 h-4" strokeWidth={2} /><span className="text-sm font-geist text-white/80">Lightning Fast (&lt; 2s)</span></li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-emerald-400 w-4 h-4" strokeWidth={2} /><span className="text-sm font-geist text-white/80">WhatsApp Chat Integration</span></li>
              </ul>
              <a href="#application" className="w-full inline-flex items-center justify-center h-10 rounded-lg text-xs font-medium transition font-geist border bg-white/10 text-white hover:bg-white/20 border-white/10">Get Started</a>
            </article>

            {/* Tier 2: The Brand Core */}
            <article className="relative overflow-hidden rounded-2xl border backdrop-blur-xl p-6 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll flex flex-col h-full hover:bg-white/[0.07] transition-colors duration-300 border-white/10 bg-purple-400/5">
              <div className="relative flex flex-col gap-1 mb-6">
                <h3 className="text-lg font-medium tracking-tight font-geist text-white">The Brand Core</h3>
                <p className="text-xs font-geist text-white/50">SMBs &amp; Service Providers.</p>
              </div>
              <div className="relative mb-6">
                <div className="flex items-end gap-1">
                  <p className="text-3xl lg:text-4xl font-geist tracking-tighter text-white">₹5,999</p>
                  <span className="text-xs mb-1.5 font-geist uppercase tracking-wide text-white/40">/ One-time payment</span>
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-geist border-white/10 text-white/70 bg-purple-400/5">
                  <Clock className="w-3 h-3" />
                  Delivery: 5-7 Days
                </div>
              </div>
              <ul className="space-y-3.5 flex-1 mb-8">
                <li className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-emerald-400 w-4 h-4" strokeWidth={2} /><span className="text-sm font-geist text-white/80">Up to 5 Strategic Pages</span></li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-emerald-400 w-4 h-4" strokeWidth={2} /><span className="text-sm font-geist text-white/80">Custom CMS (Manage it yourself)</span></li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-emerald-400 w-4 h-4" strokeWidth={2} /><span className="text-sm font-geist text-white/80">Basic SEO Setup</span></li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-emerald-400 w-4 h-4" strokeWidth={2} /><span className="text-sm font-geist text-white/80">Social Media Integration</span></li>
              </ul>
              <a href="#application" className="w-full inline-flex items-center justify-center h-10 rounded-lg text-xs font-medium transition font-geist border bg-white/10 text-white hover:bg-white/20 border-white/10">Build the Brand</a>
            </article>

            {/* Tier 3: The Growth Engine (Featured) */}
            <article className="relative overflow-hidden rounded-2xl border backdrop-blur-xl p-6 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll flex flex-col h-full shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)] ring-1 border-slate-500/30 ring-slate-500/20 bg-slate-900/10">
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% -20%, rgba(16, 185, 129, 0.15), transparent 70%)' }}></div>
              <div className="relative flex flex-col gap-1 mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight font-geist text-white">The Growth Engine</h3>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider font-geist text-slate-950 bg-slate-400">Best Value</span>
                </div>
                <p className="text-xs font-geist text-slate-200/60">Scaling Startups &amp; Serious Players.</p>
              </div>
              <div className="relative mb-6">
                <div className="flex items-end gap-1">
                  <p className="text-3xl lg:text-4xl font-geist tracking-tighter text-white">₹14,999</p>
                  <span className="text-xs mb-1.5 font-geist uppercase tracking-wide text-white/40">/ One-time payment</span>
                </div>
                <div className="inline-flex gap-1.5 text-[11px] text-slate-200 font-geist bg-slate-500/10 border-slate-500/20 border rounded-md mt-4 py-1 px-2.5 items-center">
                  Delivery: 10-14 Days
                  <Clock className="w-3 h-3" />
                </div>
              </div>
              <ul className="space-y-3.5 flex-1 mb-8">
                <li className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-emerald-400 w-4 h-4" strokeWidth={2} /><span className="text-sm font-medium font-geist text-white">Up to 15 Pages + Blog</span></li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-emerald-400 w-4 h-4" strokeWidth={2} /><span className="text-sm font-medium font-geist text-white">Conversion-Oriented Design</span></li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-emerald-400 w-4 h-4" strokeWidth={2} /><span className="text-sm font-medium font-geist text-white">Advanced Analytics Dashboard</span></li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-emerald-400 w-4 h-4" strokeWidth={2} /><span className="text-sm font-medium font-geist text-white">Speed Optimization (90+ Score)</span></li>
              </ul>
              <a href="#application" className="w-full inline-flex items-center justify-center h-10 rounded-lg text-xs font-semibold transition font-geist shadow-[0_0_20px_rgba(16,185,129,0.3)] bg-slate-500 text-black hover:bg-slate-400">Scale Now</a>
            </article>

             {/* Tier 4: The E-Commerce Suite */}
            <article className="relative overflow-hidden rounded-2xl border backdrop-blur-xl p-6 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll flex flex-col h-full hover:bg-white/[0.07] transition-colors duration-300 border-white/10 bg-purple-400/5">
              <div className="relative flex flex-col gap-1 mb-6">
                <h3 className="text-lg font-medium tracking-tight font-geist text-white">The E-Commerce Suite</h3>
                <p className="text-xs font-geist text-white/50">DTC Brands &amp; Online Retail.</p>
              </div>
              <div className="relative mb-6">
                <div className="flex items-end gap-1">
                  <p className="text-3xl lg:text-4xl font-geist tracking-tighter text-white">₹24,999+</p>
                  <span className="text-xs mb-1.5 font-geist uppercase tracking-wide text-white/40">/ Custom</span>
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-geist border-white/10 text-white/70 bg-purple-400/5">
                  <Clock className="w-3 h-3" />
                  Delivery: Custom
                </div>
              </div>
              <ul className="space-y-3.5 flex-1 mb-8">
                <li className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-emerald-400 w-4 h-4" strokeWidth={2} /><span className="text-sm font-geist text-white/80">Full Store Setup</span></li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-emerald-400 w-4 h-4" strokeWidth={2} /><span className="text-sm font-geist text-white/80">Payment Integration</span></li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-emerald-400 w-4 h-4" strokeWidth={2} /><span className="text-sm font-geist text-white/80">Abandoned Cart Recovery</span></li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-emerald-400 w-4 h-4" strokeWidth={2} /><span className="text-sm font-geist text-white/80">Automated Email Notifications</span></li>
              </ul>
              <a href="#application" className="w-full inline-flex items-center justify-center h-10 rounded-lg text-xs font-medium transition font-geist border bg-white/10 text-white hover:bg-white/20 border-white/10">Get a Quote</a>
            </article>
          </div>
        </div>
      </section>

      {/* 5. APPLICATION FORM */}
      <section className="overflow-hidden bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/278bbef6-c861-4ed8-b799-a4713ff032b4_3840w.jpg')] bg-cover relative py-24" id="application">
        <div className="absolute inset-0 backdrop-blur-sm bg-black/80"></div>
        <div className="sm:px-6 lg:px-8 max-w-3xl mx-auto px-4 relative z-10">
          
          <div className="text-center mb-10 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium backdrop-blur font-geist border-white/10 text-white/70 bg-purple-400/5">Application</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter text-white">Launch Your Project</h2>
            <p className="mt-4 text-lg font-geist text-white/70">Direct line to leadership. No account managers, just experts.</p>
          </div>

          <form className="border p-6 sm:p-10 rounded-2xl backdrop-blur-xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] bg-black/50 border-white/10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="col-span-1">
                      <label htmlFor="name" className="block text-xs font-medium mb-2 font-geist text-white/60">Name</label>
                      <input type="text" id="name" className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-1 transition font-geist placeholder-white/20 focus:border-slate-500 focus:ring-slate-500 border-white/10 text-white bg-purple-400/5" placeholder="Your Name" />
                  </div>
                  <div className="col-span-1">
                      <label htmlFor="email" className="block text-xs font-medium mb-2 font-geist text-white/60">Email</label>
                      <input type="email" id="email" className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-1 transition font-geist placeholder-white/20 focus:border-slate-500 focus:ring-slate-500 border-white/10 text-white bg-purple-400/5" placeholder="john@company.com" />
                  </div>
                  <div className="col-span-1">
                       <label htmlFor="budget" className="block text-xs font-medium mb-2 font-geist text-white/60">Estimated Budget</label>
                       <div className="relative">
                          <select id="budget" className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-1 transition font-geist appearance-none focus:border-slate-500 focus:ring-slate-500 border-white/10 text-white bg-purple-400/5">
                              <option className="bg-black text-white/70">Select a range</option>
                              <option className="bg-black">$3k - $5k</option>
                              <option className="bg-black">$5k - $10k</option>
                              <option className="bg-black">$10k+</option>
                          </select>
                          <svg className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-white/40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                       </div>
                  </div>
                   <div className="col-span-1">
                       <label htmlFor="goal" className="block text-xs font-medium mb-2 font-geist text-white/60">Main Goal</label>
                       <div className="relative">
                          <select id="goal" className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-1 transition font-geist appearance-none focus:border-slate-500 focus:ring-slate-500 border-white/10 text-white bg-purple-400/5">
                              <option className="bg-black text-white/70">Select a Goal</option>
                              <option className="bg-black">Brand Authority</option>
                              <option className="bg-black">Lead Generation</option>
                              <option className="bg-black">Direct Sales / E-com</option>
                          </select>
                          <svg className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-white/40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                       </div>
                  </div>
                  <div className="col-span-1 sm:col-span-2">
                      <label htmlFor="details" className="block text-xs font-medium mb-2 font-geist text-white/60">Project Details</label>
                      <textarea id="details" rows={3} className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-1 transition font-geist placeholder-white/20 focus:border-slate-500 focus:ring-slate-500 border-white/10 text-white bg-purple-400/5" placeholder="Tell us about your vision..."></textarea>
                  </div>
              </div>
              <div className="mt-8 text-center">
                  <button type="button" className="inline-flex items-center gap-2 rounded-xl border px-8 py-4 text-sm font-semibold transition font-geist shadow-[0_0_30px_rgba(16,185,129,0.3)] w-full sm:w-auto justify-center border-slate-500/20 bg-slate-500 text-black hover:bg-slate-400">
                      Submit Application
                      <ArrowRight className="w-4 h-4" />
                  </button>
              </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="xl:mt-0 border-t relative border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <a href="/" className="flex items-center gap-2">
                <img src="https://i.ibb.co/ZRc2kt2R/logotype.png" alt="Rawhay" className="h-6 w-auto" />
              </a>
              <p className="mt-4 text-sm max-w-md font-geist text-white/70">We build conversion-driven digital experiences for brands that demand the best. Spots are limited. Act now.</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold tracking-tight font-geist">Agency</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><a href="#manifesto" className="font-geist hover:text-white">Philosophy</a></li>
                <li><a href="#ecosystem" className="font-geist hover:text-white">Ecosystem</a></li>
                <li><a href="#pricing" className="font-geist hover:text-white">Investment</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold tracking-tight font-geist">Legal</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><a href="#" className="font-geist hover:text-white">Terms &amp; Conditions</a></li>
                <li><a href="#" className="font-geist hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-6 border-white/10">
            <p className="text-xs font-geist text-white/50">© <span id="year" className="font-geist">{new Date().getFullYear()}</span> Rawhay. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
