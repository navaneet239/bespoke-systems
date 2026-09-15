import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Check, 
  FileSpreadsheet, 
  FolderArchive, 
  MessageSquare, 
  Sliders, 
  ArrowLeft,
  Calendar,
  ExternalLink,
  GitBranch,
  ShieldCheck,
  Server,
  Clock
} from 'lucide-react';

const CAL_URL = "https://cal.com/npj239";
const CAL_CRM_URL = "https://cal.com/npj239/crm";
const CAL_OPS_URL = "https://cal.com/npj239/int-ops";
const CAL_BOTH_URL = "https://cal.com/npj239/30min";

const CRM_DEMO_URL = "https://crm-demo.jnavaneet.in";
const OPS_DEMO_URL = "https://intops-demo.jnavaneet.in";

// Subtle scroll fade-in wrapper conforming to strict design constraint
function FadeIn({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.9, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/crm' || path === '/int-ops') {
      setCurrentPath(path);
    }

    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPath === '/crm') {
    return <DemoView type="crm" onBack={() => navigateTo('/')} />;
  }

  if (currentPath === '/int-ops') {
    return <DemoView type="ops" onBack={() => navigateTo('/')} />;
  }

  return (
    <div className="min-h-screen bg-[#EBF1F8] text-[#0D1527] selection:bg-[#004080]/15 selection:text-[#004080] font-sans antialiased">
      {/* 1. NAV */}
      <header id="site-nav" className="border-b border-[#D0DEEE] bg-[#EBF1F8]/95 sticky top-0 z-40 backdrop-none">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="hidden sm:flex items-baseline space-x-2">
            <a 
              href="#" 
              id="nav-wordmark"
              className="font-serif text-[18px] tracking-tight text-[#0D1527] hover:text-[#004080] transition-colors"
            >
              J Navaneet
            </a>
            <span className="text-[11px] font-mono text-[#5B677E] uppercase tracking-[0.14em]">
              / BESPOKE SYSTEMS
            </span>
          </div>

          <div className="w-full sm:w-auto flex justify-end">
            <a
              id="nav-cta"
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center text-[13px] font-medium text-white bg-[#004080] hover:bg-[#003060] active:bg-[#00254D] transition-colors px-4 py-2 rounded-[10px]"
            >
              Book a call
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6">
        {/* 2. HERO */}
        <section id="hero" className="pt-24 pb-20 md:pt-32 md:pb-28 border-b border-[#D0DEEE]">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#004080] font-semibold mb-6">
              BESPOKE INTERNAL ARCHITECTURE
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-[54px] font-serif font-normal text-[#0D1527] leading-[1.12] tracking-tight max-w-3xl">
              Custom internal software for your business.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#5B677E] font-normal leading-relaxed max-w-2xl">
              Built around your terminology, your stages, your process. Delivered in two weeks. You own it outright, no monthly license.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="hero-primary-cta"
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-[14px] font-medium text-white bg-[#004080] hover:bg-[#003060] active:bg-[#00254D] transition-colors px-6 py-3 rounded-[10px]"
              >
                Book a 15-minute call
              </a>

              <a
                id="hero-secondary-cta"
                href="#demos"
                className="inline-flex items-center justify-center text-[14px] font-medium text-[#0D1527] bg-white border border-[#D0DEEE] hover:border-[#004080] hover:text-[#004080] transition-colors px-6 py-3 rounded-[10px]"
              >
                See the live demos
              </a>
            </div>
          </FadeIn>
        </section>

        {/* 3. WHAT THIS REPLACES */}
        <section id="what-this-replaces" className="py-20 md:py-24 border-b border-[#D0DEEE]">
          <FadeIn>
            <div className="mb-10">
              <span className="text-[11px] uppercase tracking-[0.14em] text-[#004080] font-semibold block mb-2">
                WHAT THIS REPLACES
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0D1527] font-normal tracking-tight">
                Patchwork infrastructure fails silently.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Spreadsheet */}
              <div 
                id="card-replaces-spreadsheet" 
                className="card-surface p-6 rounded-[10px] flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-[8px] bg-[#EBF1F8] border border-[#D0DEEE] flex items-center justify-center mb-4 text-[#004080]">
                    <FileSpreadsheet className="w-4 h-4 text-[#004080]" />
                  </div>
                  <h3 className="font-serif text-lg text-[#0D1527] font-normal mb-2">
                    The spreadsheet
                  </h3>
                  <p className="text-[14px] text-[#5B677E] leading-relaxed">
                    Formulas break, permissions are all-or-nothing, and no one knows which cell holds the current truth.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#D0DEEE] flex items-center text-[11px] font-mono uppercase tracking-wider text-[#D9383A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9383A] mr-2"></span>
                  Single point of failure
                </div>
              </div>

              {/* Card 2: Shared Drive */}
              <div 
                id="card-replaces-drive" 
                className="card-surface p-6 rounded-[10px] flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-[8px] bg-[#EBF1F8] border border-[#D0DEEE] flex items-center justify-center mb-4 text-[#004080]">
                    <FolderArchive className="w-4 h-4 text-[#004080]" />
                  </div>
                  <h3 className="font-serif text-lg text-[#0D1527] font-normal mb-2">
                    The shared drive
                  </h3>
                  <p className="text-[14px] text-[#5B677E] leading-relaxed">
                    Files get buried in nested subfolders, version collisions happen daily, and key client documents go missing.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#D0DEEE] flex items-center text-[11px] font-mono uppercase tracking-wider text-[#D9383A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9383A] mr-2"></span>
                  Zero stage traceability
                </div>
              </div>

              {/* Card 3: WhatsApp Group */}
              <div 
                id="card-replaces-whatsapp" 
                className="card-surface p-6 rounded-[10px] flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-[8px] bg-[#EBF1F8] border border-[#D0DEEE] flex items-center justify-center mb-4 text-[#004080]">
                    <MessageSquare className="w-4 h-4 text-[#004080]" />
                  </div>
                  <h3 className="font-serif text-lg text-[#0D1527] font-normal mb-2">
                    The WhatsApp group
                  </h3>
                  <p className="text-[14px] text-[#5B677E] leading-relaxed">
                    Critical handovers and client approvals vanish into chat streams with no accountability or status history.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#D0DEEE] flex items-center text-[11px] font-mono uppercase tracking-wider text-[#D9383A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9383A] mr-2"></span>
                  No audit log or SLA
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 4. DEMOS */}
        <section id="demos" className="py-20 md:py-24 border-b border-[#D0DEEE] scroll-mt-12">
          <FadeIn>
            <div className="mb-4">
              <span className="text-[11px] uppercase tracking-[0.14em] text-[#004080] font-semibold block mb-2">
                DEMOS
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0D1527] font-normal tracking-tight">
                Tested, proven systems you can inspect today.
              </h2>
            </div>
            <p className="text-[14px] text-[#4F5E7B] mb-10">
              Open it and click around — login details are on the screen, nothing to install.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Demo Card 1: CRM */}
              <div id="demo-card-crm" className="card-surface p-6 sm:p-8 rounded-[10px] flex flex-col justify-between">
                <div>
                  <div className="mb-4 pb-3 border-b border-[#D0DEEE]">
                    <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#004080] font-semibold block">
                      01 / Manage your client details
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#0D1527] font-normal mb-2">
                    The CRM
                  </h3>
                  <p className="text-[14px] text-[#4F5E7B] mb-6 leading-relaxed">
                    Pipeline tracking tailored to your exact qualification gates, customer records, activity logging, and contact history.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] mr-2.5 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-[13px] font-medium text-[#0D1527]">Configured qualification stages</div>
                        <div className="text-[12px] text-[#5B677E]">Tailored deal gates, probability milestones, and value metrics</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] mr-2.5 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-[13px] font-medium text-[#0D1527]">Complete interaction timeline</div>
                        <div className="text-[12px] text-[#5B677E]">Timestamped meeting notes, task reminders, and document links</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] mr-2.5 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-[13px] font-medium text-[#0D1527]">Instant search & data export</div>
                        <div className="text-[12px] text-[#5B677E]">Multi-criteria filtering and 1-click clean CSV/JSON data portability</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#D0DEEE]">
                  <a
                    id="btn-launch-crm"
                    href={CRM_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center text-[13px] font-medium text-white bg-[#004080] hover:bg-[#003060] active:bg-[#00254D] transition-colors py-3 rounded-[8px]"
                  >
                    <ExternalLink className="w-3.5 h-3.5 mr-2" />
                    Launch Live CRM Demo
                  </a>
                </div>
              </div>

              {/* Demo Card 2: Internal Ops Suite */}
              <div id="demo-card-ops" className="card-surface p-6 sm:p-8 rounded-[10px] flex flex-col justify-between">
                <div>
                  <div className="mb-4 pb-3 border-b border-[#D0DEEE]">
                    <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#004080] font-semibold block">
                      02 / Manage your internal team
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#0D1527] font-normal mb-2">
                    Internal Ops Suite
                  </h3>
                  <p className="text-[14px] text-[#4F5E7B] mb-6 leading-relaxed">
                    Internal task routing, fulfillment workflows, inventory queue tracking, and dispatch control without per-user licensing fees.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] mr-2.5 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-[13px] font-medium text-[#0D1527]">Multi-stage operational queues</div>
                        <div className="text-[12px] text-[#5B677E]">Structured ticket handovers, dispatch stages, and backlog tracking</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] mr-2.5 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-[13px] font-medium text-[#0D1527]">Role-based team permissions</div>
                        <div className="text-[12px] text-[#5B677E]">Granular access control, assignment workflows, and department views</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] mr-2.5 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-[13px] font-medium text-[#0D1527]">Immutable audit trail & SLAs</div>
                        <div className="text-[12px] text-[#5B677E]">Timestamped statuses, operator logs, and resolution alerts</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#D0DEEE]">
                  <a
                    id="btn-launch-ops"
                    href={OPS_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center text-[13px] font-medium text-white bg-[#004080] hover:bg-[#003060] active:bg-[#00254D] transition-colors py-3 rounded-[8px]"
                  >
                    <ExternalLink className="w-3.5 h-3.5 mr-2" />
                    Launch Live Ops Demo
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 5. PACKAGES */}
        <section id="packages" className="py-20 md:py-24 border-b border-[#D0DEEE]">
          <FadeIn>
            <div className="mb-10">
              <span className="text-[11px] uppercase tracking-[0.14em] text-[#004080] font-semibold block mb-2">
                PACKAGES
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0D1527] font-normal tracking-tight">
                Simple, fixed pricing. No recurring licenses.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Package 1: The CRM */}
              <div id="pkg-crm" className="card-surface p-6 sm:p-7 rounded-[10px] flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-[#0D1527] font-normal">
                    The CRM
                  </h3>
                  <div className="mt-4 mb-6">
                    <span className="text-3xl font-serif text-[#0D1527] font-normal">$900</span>
                    <span className="text-[13px] text-[#4F5E7B] ml-2">one-time flat fee</span>
                  </div>

                  <ul className="space-y-3 text-[14px] text-[#4F5E7B] border-t border-[#D0DEEE] pt-6 mb-8">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] shrink-0 mr-2.5 mt-0.5" />
                      <span>Custom client & lead pipeline</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] shrink-0 mr-2.5 mt-0.5" />
                      <span>Configured to your stages & terms</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] shrink-0 mr-2.5 mt-0.5" />
                      <span>Interaction notes & document links</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] shrink-0 mr-2.5 mt-0.5" />
                      <span>Fast search, filter, & CSV export</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] shrink-0 mr-2.5 mt-0.5" />
                      <span>Full source code & server deployment</span>
                    </li>
                  </ul>
                </div>

                <a
                  id="pkg-crm-cta"
                  href={CAL_CRM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center text-[13px] font-medium text-[#0D1527] bg-[#EBF1F8] border border-[#D0DEEE] hover:border-[#004080] hover:text-[#004080] transition-colors py-2.5 rounded-[8px]"
                >
                  Book for The CRM
                </a>
              </div>

              {/* Package 2: The Internal Ops Suite */}
              <div id="pkg-ops" className="card-surface p-6 sm:p-7 rounded-[10px] flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-[#0D1527] font-normal">
                    The Internal Ops Suite
                  </h3>
                  <div className="mt-4 mb-6">
                    <span className="text-3xl font-serif text-[#0D1527] font-normal">$900</span>
                    <span className="text-[13px] text-[#4F5E7B] ml-2">one-time flat fee</span>
                  </div>

                  <ul className="space-y-3 text-[14px] text-[#4F5E7B] border-t border-[#D0DEEE] pt-6 mb-8">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] shrink-0 mr-2.5 mt-0.5" />
                      <span>Task routing & fulfillment queues</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] shrink-0 mr-2.5 mt-0.5" />
                      <span>Role permissions & team assignments</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] shrink-0 mr-2.5 mt-0.5" />
                      <span>Status history & audit logs</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] shrink-0 mr-2.5 mt-0.5" />
                      <span>Live workload view (no seat fees)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] shrink-0 mr-2.5 mt-0.5" />
                      <span>Full source code & server deployment</span>
                    </li>
                  </ul>
                </div>

                <a
                  id="pkg-ops-cta"
                  href={CAL_OPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center text-[13px] font-medium text-[#0D1527] bg-[#EBF1F8] border border-[#D0DEEE] hover:border-[#004080] hover:text-[#004080] transition-colors py-2.5 rounded-[8px]"
                >
                  Book for Ops Suite
                </a>
              </div>

              {/* Package 3: Both Together */}
              <div id="pkg-both" className="card-surface p-6 sm:p-7 rounded-[10px] flex flex-col justify-between border-[#004080]/30 relative bg-[#FFFFFF]">
                <div className="absolute top-4 right-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#004080] px-2 py-0.5 rounded bg-[#004080]/10 border border-[#004080]/20 font-medium">
                    Combined
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#0D1527] font-normal">
                    Both together
                  </h3>
                  <div className="mt-4 mb-6 flex items-baseline">
                    <span className="text-lg text-[#5B677E] line-through mr-2.5">$1,800</span>
                    <span className="text-3xl font-serif text-[#0D1527] font-normal">$1,400</span>
                    <span className="text-[13px] text-[#0F766E] ml-2 font-medium">save $400</span>
                  </div>

                  <ul className="space-y-3 text-[14px] text-[#4F5E7B] border-t border-[#D0DEEE] pt-6 mb-8">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] shrink-0 mr-2.5 mt-0.5" />
                      <span>Complete CRM + Ops Suite</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] shrink-0 mr-2.5 mt-0.5" />
                      <span>Automatic client-to-ops handover</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] shrink-0 mr-2.5 mt-0.5" />
                      <span>Shared team accounts & database</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] shrink-0 mr-2.5 mt-0.5" />
                      <span>Unified client history & timeline</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-[#004080] shrink-0 mr-2.5 mt-0.5" />
                      <span>Priority delivery & 30-day warranty</span>
                    </li>
                  </ul>
                </div>

                <a
                  id="pkg-both-cta"
                  href={CAL_BOTH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center text-[13px] font-medium text-white bg-[#004080] hover:bg-[#003060] active:bg-[#00254D] transition-colors py-2.5 rounded-[8px]"
                >
                  Book Both Systems
                </a>
              </div>
            </div>

            {/* Below them: One add-on row */}
            <div 
              id="addon-row" 
              className="card-surface p-6 sm:p-7 rounded-[10px] mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-[8px] bg-[#EBF1F8] border border-[#D0DEEE] flex items-center justify-center shrink-0 mt-0.5">
                  <Sliders className="w-4 h-4 text-[#004080]" />
                </div>
                <div>
                  <div className="flex items-baseline space-x-3">
                    <h4 className="font-serif text-lg text-[#0D1527] font-normal">
                      Make it yours
                    </h4>
                    <span className="text-[14px] font-mono text-[#004080] font-medium">+$300</span>
                  </div>
                  <p className="text-[14px] text-[#4F5E7B] mt-1 leading-relaxed max-w-2xl">
                    A dedicated self-service settings screen so your administrators can add custom fields, rename stages, manage users, and edit outbound templates without code edits.
                  </p>
                </div>
              </div>

              <span className="text-[12px] font-mono text-[#4F5E7B] border border-[#D0DEEE] bg-[#EBF1F8] px-3 py-1.5 rounded-[6px] shrink-0">
                Add-on available with any package
              </span>
            </div>
          </FadeIn>
        </section>

        {/* 6. "YOU OWN IT" */}
        <section id="you-own-it" className="py-20 md:py-24 border-b border-[#D0DEEE]">
          <FadeIn>
            <div className="mb-10">
              <span className="text-[11px] uppercase tracking-[0.14em] text-[#004080] font-semibold block mb-2">
                INDEPENDENCE & IP
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0D1527] font-normal tracking-tight mb-3">
                You own it outright.
              </h2>
              <p className="text-[15px] text-[#4F5E7B] max-w-2xl leading-relaxed">
                Most enterprise software locks your business into escalating per-seat monthly contracts. Here, the intellectual property and infrastructure belong strictly to your company.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sub 1 */}
              <div id="own-it-repo" className="card-surface p-6 sm:p-7 rounded-[10px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#D0DEEE]">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-[6px] bg-[#EBF1F8] border border-[#D0DEEE] flex items-center justify-center text-[#004080]">
                        <GitBranch className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#004080] font-semibold">
                        01 / SOURCE CODE
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#0F766E] bg-[#0F766E]/10 border border-[#0F766E]/20 px-2 py-0.5 rounded">
                      Full IP Ownership
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#0D1527] font-normal mb-2">
                    Your GitHub & Database
                  </h3>
                  <p className="text-[14px] text-[#4F5E7B] leading-relaxed">
                    Complete production-grade repository committed directly to your GitHub organization. Schemas, migrations, and documentation are delivered into your custody with zero vendor lock-in.
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#D0DEEE] text-[12px] font-mono text-[#5B677E] flex items-center justify-between">
                  <span>DEPLOYMENT: YOUR CLOUD</span>
                  <span className="text-[#0D1527] font-medium">100% Transfer</span>
                </div>
              </div>

              {/* Sub 2 */}
              <div id="own-it-seats" className="card-surface p-6 sm:p-7 rounded-[10px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#D0DEEE]">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-[6px] bg-[#EBF1F8] border border-[#D0DEEE] flex items-center justify-center text-[#004080]">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#004080] font-semibold">
                        02 / NO SEAT TAX
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#0F766E] bg-[#0F766E]/10 border border-[#0F766E]/20 px-2 py-0.5 rounded">
                      $0 / Month Licenses
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#0D1527] font-normal mb-2">
                    Unlimited Active Users
                  </h3>
                  <p className="text-[14px] text-[#4F5E7B] leading-relaxed">
                    Zero per-seat subscriptions or escalating tiers. Scale from 5 internal operators to 500 team members across your offices and field units without paying a single dollar more.
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#D0DEEE] text-[12px] font-mono text-[#5B677E] flex items-center justify-between">
                  <span>USER LIMIT: NONE</span>
                  <span className="text-[#0D1527] font-medium">Flat Fee Guaranteed</span>
                </div>
              </div>

              {/* Sub 3 */}
              <div id="own-it-hosting" className="card-surface p-6 sm:p-7 rounded-[10px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#D0DEEE]">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-[6px] bg-[#EBF1F8] border border-[#D0DEEE] flex items-center justify-center text-[#004080]">
                        <Server className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#004080] font-semibold">
                        03 / DIRECT BILLING
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#004080] bg-[#004080]/10 border border-[#004080]/20 px-2 py-0.5 rounded">
                      At-Cost Hosting
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#0D1527] font-normal mb-2">
                    $20–$45/mo Raw Infrastructure
                  </h3>
                  <p className="text-[14px] text-[#4F5E7B] leading-relaxed">
                    Lean, modern infrastructure provisioned on Fly.io, Render, or AWS in your name. You pay the cloud provider directly with no middleman margins or synthetic markups.
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#D0DEEE] text-[12px] font-mono text-[#5B677E] flex items-center justify-between">
                  <span>INFRASTRUCTURE: DIRECT</span>
                  <span className="text-[#0D1527] font-medium">Billed To Your Card</span>
                </div>
              </div>

              {/* Sub 4 */}
              <div id="own-it-support" className="card-surface p-6 sm:p-7 rounded-[10px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#D0DEEE]">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-[6px] bg-[#EBF1F8] border border-[#D0DEEE] flex items-center justify-center text-[#004080]">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#004080] font-semibold">
                        04 / FLEXIBLE SUPPORT
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#004080] bg-[#004080]/10 border border-[#004080]/20 px-2 py-0.5 rounded">
                      Zero Retainer
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#0D1527] font-normal mb-2">
                    $40/hr On-Demand
                  </h3>
                  <p className="text-[14px] text-[#4F5E7B] leading-relaxed">
                    Your first 30 days include comprehensive warranty and tuning. When new needs arise down the road, request additions on-demand at $40/hour with zero recurring contract commitments.
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#D0DEEE] text-[12px] font-mono text-[#5B677E] flex items-center justify-between">
                  <span>WARRANTY: 30 DAYS INCL.</span>
                  <span className="text-[#0D1527] font-medium">As-Needed Retainer-Free</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 7. HOW IT WORKS */}
        <section id="how-it-works" className="py-20 md:py-24 border-b border-[#D0DEEE]">
          <FadeIn>
            <div className="mb-14">
              <span className="text-[11px] uppercase tracking-[0.14em] text-[#004080] font-semibold block mb-2">
                HOW IT WORKS
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0D1527] font-normal tracking-tight">
                From initial conversation to production in fourteen days.
              </h2>
              <p className="text-[14px] text-[#4F5E7B] mt-2">
                A predictable, milestone-driven delivery timeline with zero administrative bloat.
              </p>
            </div>

            {/* Vertical Timeline Layout */}
            <div className="relative border-l-2 border-[#D0DEEE] ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-8 sm:space-y-10">
              {/* Step 1 */}
              <div id="step-1" className="relative group">
                <div className="absolute -left-[35px] sm:-left-[51px] top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#004080] flex items-center justify-center text-[11px] sm:text-[12px] font-mono font-bold text-[#004080] shadow-sm">
                  01
                </div>
                <div className="card-surface p-6 rounded-[10px]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-[#D0DEEE]">
                    <h3 className="font-serif text-lg sm:text-xl text-[#0D1527] font-normal">
                      30-minute discovery call
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#004080] bg-[#004080]/10 border border-[#004080]/20 px-2.5 py-0.5 rounded w-fit">
                      Day 1
                    </span>
                  </div>
                  <p className="text-[14px] text-[#4F5E7B] leading-relaxed">
                    We map your existing bottlenecks, your exact stage names, your custom fields, and team responsibilities.
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#D0DEEE] flex items-center text-[12px] font-mono text-[#5B677E]">
                    <span className="text-[#004080] font-medium mr-2">OUTCOME:</span>
                    <span>Process blueprint & workflow definition</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div id="step-2" className="relative group">
                <div className="absolute -left-[35px] sm:-left-[51px] top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#004080] flex items-center justify-center text-[11px] sm:text-[12px] font-mono font-bold text-[#004080] shadow-sm">
                  02
                </div>
                <div className="card-surface p-6 rounded-[10px]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-[#D0DEEE]">
                    <h3 className="font-serif text-lg sm:text-xl text-[#0D1527] font-normal">
                      One-page spec
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#004080] bg-[#004080]/10 border border-[#004080]/20 px-2.5 py-0.5 rounded w-fit">
                      Day 2
                    </span>
                  </div>
                  <p className="text-[14px] text-[#4F5E7B] leading-relaxed">
                    A concise, unambiguous document detailing screens, data structures, and transitions. No bloated discovery phases.
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#D0DEEE] flex items-center text-[12px] font-mono text-[#5B677E]">
                    <span className="text-[#004080] font-medium mr-2">OUTCOME:</span>
                    <span>Approved technical scope and architectural plan</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div id="step-3" className="relative group">
                <div className="absolute -left-[35px] sm:-left-[51px] top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#004080] flex items-center justify-center text-[11px] sm:text-[12px] font-mono font-bold text-[#004080] shadow-sm">
                  03
                </div>
                <div className="card-surface p-6 rounded-[10px]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-[#D0DEEE]">
                    <h3 className="font-serif text-lg sm:text-xl text-[#0D1527] font-normal">
                      50% to start
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#004080] bg-[#004080]/10 border border-[#004080]/20 px-2.5 py-0.5 rounded w-fit">
                      Day 3
                    </span>
                  </div>
                  <p className="text-[14px] text-[#4F5E7B] leading-relaxed">
                    Deposit invoice issued upon spec approval. Repository created and base infrastructure provisioned.
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#D0DEEE] flex items-center text-[12px] font-mono text-[#5B677E]">
                    <span className="text-[#004080] font-medium mr-2">OUTCOME:</span>
                    <span>Private Git repository & staging environment initialized</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div id="step-4" className="relative group">
                <div className="absolute -left-[35px] sm:-left-[51px] top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#004080] flex items-center justify-center text-[11px] sm:text-[12px] font-mono font-bold text-[#004080] shadow-sm">
                  04
                </div>
                <div className="card-surface p-6 rounded-[10px]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-[#D0DEEE]">
                    <h3 className="font-serif text-lg sm:text-xl text-[#0D1527] font-normal">
                      up to 7 days build
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#004080] bg-[#004080]/10 border border-[#004080]/20 px-2.5 py-0.5 rounded w-fit">
                      Days 4–11
                    </span>
                  </div>
                  <p className="text-[14px] text-[#4F5E7B] leading-relaxed">
                    Rapid, focused engineering without distractions. Staging URL provided midway for progress visibility.
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#D0DEEE] flex items-center text-[12px] font-mono text-[#5B677E]">
                    <span className="text-[#004080] font-medium mr-2">OUTCOME:</span>
                    <span>Complete application deployment with sample data loaded</span>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div id="step-5" className="relative group">
                <div className="absolute -left-[35px] sm:-left-[51px] top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#004080] flex items-center justify-center text-[11px] sm:text-[12px] font-mono font-bold text-[#004080] shadow-sm">
                  05
                </div>
                <div className="card-surface p-6 rounded-[10px]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-[#D0DEEE]">
                    <h3 className="font-serif text-lg sm:text-xl text-[#0D1527] font-normal">
                      Review with two rounds of changes
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#004080] bg-[#004080]/10 border border-[#004080]/20 px-2.5 py-0.5 rounded w-fit">
                      Days 12–13
                    </span>
                  </div>
                  <p className="text-[14px] text-[#4F5E7B] leading-relaxed">
                    Your team tests the live system with real sample data. We execute two complete revision cycles to dial it in.
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#D0DEEE] flex items-center text-[12px] font-mono text-[#5B677E]">
                    <span className="text-[#004080] font-medium mr-2">OUTCOME:</span>
                    <span>Edge case resolution and workflow ergonomics calibrated</span>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div id="step-6" className="relative group">
                <div className="absolute -left-[35px] sm:-left-[51px] top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#004080] flex items-center justify-center text-[11px] sm:text-[12px] font-mono font-bold text-[#004080] shadow-sm">
                  06
                </div>
                <div className="card-surface p-6 rounded-[10px]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-[#D0DEEE]">
                    <h3 className="font-serif text-lg sm:text-xl text-[#0D1527] font-normal">
                      Final 50% and handover
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#004080] bg-[#004080]/10 border border-[#004080]/20 px-2.5 py-0.5 rounded w-fit">
                      Day 14
                    </span>
                  </div>
                  <p className="text-[14px] text-[#4F5E7B] leading-relaxed">
                    Production domain connected, Git credentials transferred to your control, team walkthrough conducted.
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#D0DEEE] flex items-center text-[12px] font-mono text-[#5B677E]">
                    <span className="text-[#004080] font-medium mr-2">OUTCOME:</span>
                    <span>Live production deployment, full IP transfer, and 30-day warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 8. CLOSING CTA */}
        <section id="closing-cta" className="py-24 md:py-32 border-b border-[#D0DEEE]">
          <FadeIn>
            <div className="max-w-2xl">
              <span className="text-[11px] uppercase tracking-[0.14em] text-[#004080] font-semibold block mb-3">
                LET'S TALK
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#0D1527] font-normal tracking-tight leading-snug">
                Replace your patchwork tools with software built for your business.
              </h2>
              <p className="mt-4 text-base text-[#4F5E7B] leading-relaxed">
                Book a brief conversation to talk through your current workflow. No pitch decks, no aggressive sales follow-up.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  id="closing-cal-cta"
                  href={CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-[14px] font-medium text-white bg-[#004080] hover:bg-[#003060] active:bg-[#00254D] transition-colors px-6 py-3 rounded-[10px]"
                >
                  Book a 15-minute call
                </a>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 9. FOOTER */}
        <footer id="footer" className="py-16 text-[13px] text-[#4F5E7B]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#D0DEEE]">
            <div>
              <div className="font-serif text-base text-[#0D1527] font-normal">J Navaneet</div>
              <p className="mt-1 text-[#4F5E7B]">
                Bespoke internal software engineering.
              </p>
            </div>

            <div className="flex items-center font-mono text-[12px]">
              <a 
                href="mailto:hi@jnavaneet.in" 
                className="text-[#004080] hover:underline font-medium"
              >
                hi@jnavaneet.in
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-[#4F5E7B]">
            <p>
              Delivered with 100% intellectual property assignment. No vendor lock-in, zero monthly license obligations.
            </p>
            <p className="font-mono text-[11px] shrink-0">
              © {new Date().getFullYear()} J Navaneet. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

// Interactive prototype demo screens for /crm and /int-ops
function DemoView({ 
  type, 
  onBack 
}: { 
  type: 'crm' | 'ops'; 
  onBack: () => void;
}) {
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'closed'>('all');
  const isCrm = type === 'crm';
  const externalUrl = isCrm ? CRM_DEMO_URL : OPS_DEMO_URL;
  const bookingUrl = isCrm ? CAL_CRM_URL : CAL_OPS_URL;

  return (
    <div className="min-h-screen bg-[#EBF1F8] text-[#0D1527] font-sans antialiased">
      {/* Top Banner with login credentials */}
      <div className="bg-[#FFFFFF] border-b border-[#D0DEEE] px-6 py-3">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-3">
            <button
              onClick={onBack}
              className="inline-flex items-center text-[#004080] font-medium hover:underline transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1" />
              Back to Overview
            </button>
            <span className="text-[#D0DEEE]">|</span>
            <span className="text-[#4F5E7B]">
              Interactive Sandbox: <strong className="text-[#0D1527] font-medium">{isCrm ? 'CRM Pipeline' : 'Internal Ops Suite'}</strong>
            </span>
          </div>

          <div className="font-mono text-[11px] bg-[#EBF1F8] border border-[#D0DEEE] px-3 py-1 rounded-[6px] text-[#4F5E7B]">
            Login: <span className="text-[#0D1527] font-medium">{isCrm ? 'demo@internal.local' : 'ops@internal.local'}</span> / Pass: <span className="text-[#0D1527] font-medium">{isCrm ? 'demo123' : 'ops123'}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#D0DEEE] mb-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.14em] text-[#004080] font-semibold mb-1">
              {isCrm ? 'CLIENT RELATIONSHIP MANAGEMENT' : 'OPERATIONS & FULFILLMENT'}
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif text-[#0D1527]">
              {isCrm ? 'Deal Pipeline & Account Stages' : 'Dispatch Queue & Ticket Fulfillment'}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium text-[#0D1527] bg-white border border-[#D0DEEE] hover:border-[#004080] hover:text-[#004080] transition-colors px-4 py-2 rounded-[8px] inline-flex items-center"
            >
              Open External URL
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </a>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium text-white bg-[#004080] hover:bg-[#003060] transition-colors px-4 py-2 rounded-[8px]"
            >
              {isCrm ? 'Schedule a CRM Demo' : 'Schedule an Internal Ops Demo'}
            </a>
          </div>
        </div>

        {/* Prototype Interface */}
        <div className="card-surface rounded-[10px] overflow-hidden border border-[#D0DEEE]">
          {/* Controls toolbar */}
          <div className="p-4 border-b border-[#D0DEEE] flex flex-wrap items-center justify-between gap-4 bg-[#FFFFFF]">
            <div className="flex items-center space-x-2 text-xs">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-[6px] transition-colors ${activeTab === 'all' ? 'bg-[#004080] text-white' : 'text-[#4F5E7B] hover:text-[#0D1527]'}`}
              >
                All Records (14)
              </button>
              <button 
                onClick={() => setActiveTab('active')}
                className={`px-3 py-1.5 rounded-[6px] transition-colors ${activeTab === 'active' ? 'bg-[#004080] text-white' : 'text-[#4F5E7B] hover:text-[#0D1527]'}`}
              >
                In Progress (9)
              </button>
              <button 
                onClick={() => setActiveTab('closed')}
                className={`px-3 py-1.5 rounded-[6px] transition-colors ${activeTab === 'closed' ? 'bg-[#004080] text-white' : 'text-[#4F5E7B] hover:text-[#0D1527]'}`}
              >
                Completed (5)
              </button>
            </div>

            <div className="flex items-center space-x-2 text-xs text-[#4F5E7B]">
              <span className="w-2 h-2 rounded-full bg-[#0F766E] animate-pulse"></span>
              <span className="font-mono">Live Sync Active</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#EBF1F8] text-[11px] font-mono text-[#4F5E7B] uppercase tracking-wider border-b border-[#D0DEEE]">
                <tr>
                  <th className="py-3.5 px-5">{isCrm ? 'Account / Company' : 'Work Order'}</th>
                  <th className="py-3.5 px-5">{isCrm ? 'Stage' : 'Status'}</th>
                  <th className="py-3.5 px-5">{isCrm ? 'Contact' : 'Assignee'}</th>
                  <th className="py-3.5 px-5">{isCrm ? 'Estimated Value' : 'SLA Window'}</th>
                  <th className="py-3.5 px-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D0DEEE] text-[13px]">
                {isCrm ? (
                  <>
                    <tr className="hover:bg-[#EBF1F8]/50 transition-colors">
                      <td className="py-3.5 px-5 font-medium text-[#0D1527]">Acme Global Industrial</td>
                      <td className="py-3.5 px-5">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#004080]/10 text-[#004080] border border-[#004080]/20">
                          01. Discovery
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-[#4F5E7B]">sarah.m@acmeglobal.com</td>
                      <td className="py-3.5 px-5 font-mono text-[#0D1527]">$24,500</td>
                      <td className="py-3.5 px-5 text-right">
                        <button className="text-[12px] text-[#004080] hover:underline font-medium">View Notes</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#EBF1F8]/50 transition-colors">
                      <td className="py-3.5 px-5 font-medium text-[#0D1527]">Apex Maritime Partners</td>
                      <td className="py-3.5 px-5">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#004080]/10 text-[#004080] border border-[#004080]/20">
                          02. Proposal Sent
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-[#4F5E7B]">d.chen@apexmaritime.com</td>
                      <td className="py-3.5 px-5 font-mono text-[#0D1527]">$48,000</td>
                      <td className="py-3.5 px-5 text-right">
                        <button className="text-[12px] text-[#004080] hover:underline font-medium">View Notes</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#EBF1F8]/50 transition-colors">
                      <td className="py-3.5 px-5 font-medium text-[#0D1527]">Vanguard Real Estate Group</td>
                      <td className="py-3.5 px-5">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0F766E]/10 text-[#0F766E] border border-[#0F766E]/20">
                          03. Contract Executed
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-[#4F5E7B]">marcus@vanguardre.com</td>
                      <td className="py-3.5 px-5 font-mono text-[#0D1527]">$32,000</td>
                      <td className="py-3.5 px-5 text-right">
                        <button className="text-[12px] text-[#004080] hover:underline font-medium">View Notes</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#EBF1F8]/50 transition-colors">
                      <td className="py-3.5 px-5 font-medium text-[#0D1527]">Kinetic Dynamics Ltd</td>
                      <td className="py-3.5 px-5">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#004080]/10 text-[#004080] border border-[#004080]/20">
                          01. Discovery
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-[#4F5E7B]">r.hughes@kineticdyn.com</td>
                      <td className="py-3.5 px-5 font-mono text-[#0D1527]">$19,200</td>
                      <td className="py-3.5 px-5 text-right">
                        <button className="text-[12px] text-[#004080] hover:underline font-medium">View Notes</button>
                      </td>
                    </tr>
                  </>
                ) : (
                  <>
                    <tr className="hover:bg-[#EBF1F8]/50 transition-colors">
                      <td className="py-3.5 px-5 font-mono text-[#0D1527]">WO-9102-ALPHA</td>
                      <td className="py-3.5 px-5">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0F766E]/10 text-[#0F766E] border border-[#0F766E]/20">
                          Dispatched
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-[#4F5E7B]">Field Crew 4 (Lead: J. Alvarez)</td>
                      <td className="py-3.5 px-5 font-mono text-[#0D1527]">45 mins remaining</td>
                      <td className="py-3.5 px-5 text-right">
                        <button className="text-[12px] text-[#004080] hover:underline font-medium">Inspect Log</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#EBF1F8]/50 transition-colors">
                      <td className="py-3.5 px-5 font-mono text-[#0D1527]">WO-9103-BETA</td>
                      <td className="py-3.5 px-5">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#004080]/10 text-[#004080] border border-[#004080]/20">
                          Assembly Queue
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-[#4F5E7B]">Workshop Bay 2</td>
                      <td className="py-3.5 px-5 font-mono text-[#0D1527]">2.5 hrs remaining</td>
                      <td className="py-3.5 px-5 text-right">
                        <button className="text-[12px] text-[#004080] hover:underline font-medium">Inspect Log</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#EBF1F8]/50 transition-colors">
                      <td className="py-3.5 px-5 font-mono text-[#0D1527]">WO-9104-GAMMA</td>
                      <td className="py-3.5 px-5">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#D9383A]/10 text-[#D9383A] border border-[#D9383A]/20">
                          Awaiting Parts
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-[#4F5E7B]">Procurement Desk</td>
                      <td className="py-3.5 px-5 font-mono text-[#0D1527]">SLA Paused</td>
                      <td className="py-3.5 px-5 text-right">
                        <button className="text-[12px] text-[#004080] hover:underline font-medium">Inspect Log</button>
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-[#D0DEEE] bg-[#EBF1F8] flex items-center justify-between text-xs text-[#4F5E7B]">
            <span>Showing sample dataset with simulated permissions</span>
            <button 
              onClick={onBack}
              className="text-[#004080] hover:underline font-mono font-medium"
            >
              Return to main page &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
