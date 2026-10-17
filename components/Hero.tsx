

"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  MapPin,
} from "lucide-react";
import { GitHubIcon } from "./icons/GitHubIcon";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="about"
      className="relative isolate flex h-auto min-h-[680px] overflow-hidden bg-[#09090b] pb-[100px] text-white min-[651px]:h-screen min-[651px]:min-h-[720px] min-[901px]:min-h-[800px] min-[651px]:pb-0"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.38] [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]"
      />

      {/* Hero content */}
      <div className="container relative z-[2] mx-auto max-w-7xl grid w-[calc(100%-30px)] grid-cols-1 items-stretch gap-[35px] pt-[130px] pb-[90px] min-[451px]:gap-[35px] min-[651px]:w-[calc(100%-48px)] min-[651px]:grid-cols-[minmax(0,1fr)_310px] min-[651px]:items-center min-[651px]:gap-[45px] min-[651px]:pt-20 min-[651px]:pb-0 min-[701px]:grid-cols-[minmax(0,1fr)_390px] min-[701px]:gap-20 min-[901px]:gap-20">

        {/* Hero copy */}
        <div className="relative z-[2] order-1 min-w-0 min-[651px]:order-none">
          <div className="mb-7 inline-flex items-center gap-[9px] rounded-full border border-white/[0.09] bg-white/[0.025] px-[11px] py-[7px] font-mono text-[11px] text-[#a6abb5]">
            <span className="size-[6px] shrink-0 rounded-full bg-[#34d399] shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
            {portfolio.availability}
          </div>

          <h1 className="m-0 max-w-[850px] text-[clamp(48px,14vw,72px)] font-semibold leading-[0.95] tracking-[-0.075em] min-[651px]:text-[clamp(52px,11vw,82px)] min-[901px]:text-[clamp(58px,9vw,112px)]">
            I build software
            <br />
            <span className="bg-[linear-gradient(110deg,#fff_5%,#c4b5fd_38%,#67e8f9_90%)] bg-clip-text text-transparent">
              for the web.
            </span>
          </h1>

          <p className="my-[34px] max-w-[590px] text-[15px] leading-[1.75] text-[#a6abb5] min-[651px]:text-[17px]">
            I'm {portfolio.name}, a {portfolio.role.toLowerCase()} based in{" "}
            {portfolio.location}. I care about thoughtful interfaces, solid
            architecture, and software that feels simple to use.
          </p>

          <div className="flex flex-wrap items-center gap-[10px]">
            <a
              href="#work"
              className="inline-flex items-center gap-[9px] rounded-lg bg-white px-4 py-[11px] text-[13px] font-medium !text-[#09090b] transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:bg-[#e9e9eb]"
            >
              View my work
              <ArrowDown size={16} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-[9px] rounded-lg border border-white/[0.09] bg-white/[0.025] px-4 py-[11px] text-[13px] font-medium text-[#f3f4f6] transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-white/[0.16]"
            >
              Résumé
              <ArrowUpRight size={16} />
            </a>

            <a
              href={portfolio.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid size-[41px] place-items-center rounded-lg border border-white/[0.09] text-[#a6abb5] transition-colors duration-200 hover:border-white/[0.16] hover:text-white"
            >
              <GitHubIcon size={26} />
            </a>
          </div>

          <div className="mt-[50px] flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.08em] text-[#696f7b] min-[651px]:mt-[75px]">
            <span>Currently building</span>
            <span className="h-px w-[45px] shrink-0 bg-white/[0.16]" />
            <span>Full-stack applications &amp; developer tools</span>
          </div>
        </div>

        {/* Hero photo */}
        <div className="relative z-[2] order-[-1] mx-auto w-[min(290px,82vw)] max-w-[290px] min-[451px]:w-[min(330px,82vw)] min-[451px]:max-w-[330px] min-[651px]:order-none min-[651px]:mx-0 min-[651px]:w-full min-[651px]:max-w-[310px] min-[651px]:justify-self-end min-[701px]:max-w-[390px]">
          <div className="pointer-events-none absolute inset-[10%_-20%_-10%] -z-10 rounded-full bg-[rgba(139,92,246,0.14)] blur-[70px]" />

          <div className="relative w-full overflow-visible border-0 bg-transparent">
            <img
              src="/me.jpg"
              alt={`${portfolio.name} — ${portfolio.role}`}
              className="relative z-[2] block h-auto w-full object-contain [filter:saturate(0.9)_contrast(1.04)_drop-shadow(0_35px_45px_rgba(0,0,0,0.38))_drop-shadow(0_0_45px_rgba(139,92,246,0.10)]"
            />

            {/* Online status */}
            <div className="absolute top-2 right-2 z-[4] flex items-center gap-[7px] rounded-full border border-white/[0.12] bg-[rgba(8,9,11,0.72)] px-[10px] py-[7px] font-mono text-[8px] tracking-[0.08em] text-[#d1d5db] backdrop-blur-[12px] min-[451px]:top-[10px] min-[451px]:right-[10px] min-[1051px]:top-4 min-[1051px]:right-4">
              <span className="size-[6px] shrink-0 rounded-full bg-[#34d399] shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
              <span>ONLINE</span>
            </div>
          </div>

          {/* Floating info card */}
          <div className="absolute right-0 bottom-[15px] z-[5] flex min-w-[185px] items-center gap-[11px] rounded-[10px] bg-[rgba(13,15,18,0.94)] p-[11px] shadow-[0_20px_50px_rgba(0,0,0,0.3),0_0_25px_rgba(139,92,246,0.05)] backdrop-blur-[18px] min-[451px]:right-[-10px] min-[451px]:bottom-5 min-[451px]:min-w-[210px] min-[451px]:p-[13px] min-[651px]:right-[-18px] min-[651px]:bottom-7 min-[651px]:min-w-[190px] min-[1051px]:right-[-28px]">
            <div className="grid size-[29px] shrink-0 place-items-center rounded-[7px] bg-[rgba(139,92,246,0.12)] text-[#a78bfa] min-[451px]:size-8">
              <Code2 size={15} />
            </div>

            <div className="flex min-w-0 flex-col gap-[3px]">
              <strong className="block text-[10px] font-medium text-[#f3f4f6]">
                {portfolio.role}
              </strong>

              <span className="flex items-center gap-1 font-mono text-[8px] text-[#696f7b]">
                <MapPin size={11} />
                {portfolio.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient background orbs */}
      <div className="hero-orb pointer-events-none absolute top-[5%] right-[-100px] size-[500px] rounded-full bg-[rgba(124,58,237,0.16)] blur-[80px]" />
      <div className="hero-orb pointer-events-none absolute right-[20%] bottom-[-250px] size-[400px] rounded-full bg-[rgba(34,211,238,0.08)] blur-[80px]" />
    </section>
  );
}



//  ****************************************   O U T D A T E D   ****************************************  //

  // "use client";
  //
  // import {
  //   ArrowDown,
  //   ArrowUpRight,
  //   Code2,
  //   MapPin
  // } from "lucide-react";
  // import { portfolio } from "@/data/portfolio";
  //
  // export function Hero() {
  //   return (
  //     <section className="hero" id="about">
  //       <div className="hero-grid" />
  //
  //       <div className="container hero-content">
  //         <div className="hero-copy">
  //           <div className="eyebrow">
  //             <span className="status-dot" />
  //             {portfolio.availability}
  //           </div>
  //
  //           <h1>
  //             I build software
  //             <br />
  //             <span className="gradient-text">for the web.</span>
  //           </h1>
  //
  //           <p className="hero-description">
  //             I'm {portfolio.name}, a {portfolio.role.toLowerCase()} based in{" "}
  //             {portfolio.location}. I care about thoughtful interfaces, solid
  //             architecture, and software that feels simple to use.
  //           </p>
  //
  //           <div className="hero-actions">
  //             <a href="#work" className="button button-primary">
  //               View my work
  //               <ArrowDown size={16} />
  //             </a>
  //
  //             <a
  //               href="/resume.pdf"
  //               className="button button-secondary"
  //               target="_blank"
  //               rel="noreferrer"
  //             >
  //               Résumé
  //               <ArrowUpRight size={16} />
  //             </a>
  //
  //             <a
  //               href={portfolio.github}
  //               className="icon-button"
  //               target="_blank"
  //               rel="noreferrer"
  //               aria-label="GitHub"
  //             >
  //               <Code2 size={18} />
  //             </a>
  //           </div>
  //
  //           <div className="hero-meta">
  //             <span>Currently building</span>
  //             <span className="meta-line" />
  //             <span>Full-stack applications & developer tools</span>
  //           </div>
  //         </div>
  //
  //         <div className="hero-photo-wrap">
  //           <div className="hero-photo-glow" />
  //
  //           <div className="hero-photo-frame">
  //             <img
  //               src="/me.jpg"
  //               alt={`${portfolio.name} — ${portfolio.role}`}
  //               className="hero-photo"
  //             />
  //
  //             <div className="hero-photo-overlay" />
  //
  //             <div className="hero-photo-status">
  //               <span className="status-dot" />
  //               <span>ONLINE</span>
  //             </div>
  //           </div>
  //
  //           <div className="hero-info-card">
  //             <div className="hero-info-icon">
  //               <Code2 size={15} />
  //             </div>
  //
  //             <div>
  //               <strong>{portfolio.role}</strong>
  //
  //               <span>
  //                 <MapPin size={11} />
  //                 {portfolio.location}
  //               </span>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //
  //       <div className="hero-orb orb-one" />
  //       <div className="hero-orb orb-two" />
  //     </section>
  //   );
  // }
//
