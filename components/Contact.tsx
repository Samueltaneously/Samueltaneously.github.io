

"use client";

import { ArrowUpRight, Code2, Mail, User } from "lucide-react"; import { portfolio } from "@/data/portfolio";
import { GitHubIcon } from "./icons/GitHubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";

export function Contact() {
  return (

<section
  className="relative isolate overflow-hidden bg-[#09090b] px-5 py-20 text-white sm:px-8 sm:py-28"
    id="contact"
>
  <div className="mx-auto max-w-6xl">
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0f12] p-7 sm:p-12 lg:p-16">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full bg-violet-500/15 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]"
      />

      <div className="relative z-10 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.2em] text-neutral-500">
            05 / CONTACT
          </span>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's build something
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              worth shipping.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-neutral-400 sm:text-lg">
            I'm currently open to software engineering opportunities,
            and interesting projects.
          </p>

          <a
            href={`mailto:${portfolio.email}`}
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-medium !text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            <Mail size={16} />
            Say hello
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="flex min-w-48 flex-col border-t border-white/10 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <a
            href={portfolio.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 py-4 text-sm text-neutral-400 transition-colors hover:text-white"
          >
            <GitHubIcon
              size={18}
              className="text-neutral-500 transition-colors group-hover:text-white"
            />
            <span>GitHub</span>
            <ArrowUpRight
              size={15}
              className="ml-auto transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 border-t border-white/10 py-4 text-sm text-neutral-400 transition-colors hover:text-white"
          >
            <LinkedInIcon
              size={18}
              className="text-neutral-500 transition-colors group-hover:text-white"
            />
            <span>LinkedIn</span>
            <ArrowUpRight
              size={15}
              className="ml-auto transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

); }


//  ****************************************   O U T D A T E D   ****************************************  //

  // import {
  //   ArrowUpRight,
  //   Code2,
  //   Mail,
  //   User
  // } from "lucide-react";
  // import { portfolio } from "@/data/portfolio";
  //
  // export function Contact() {
  //   return (
  //     <section className="section contact-section" id="contact">
  //       <div className="container">
  //         <div className="contact-card">
  //           <div className="contact-glow" />
  //
  //           <div className="contact-content">
  //             <span className="section-number">
  //               05 / CONTACT
  //             </span>
  //
  //             <h2>
  //               Let's build something
  //               <br />
  //               <span className="gradient-text">worth shipping.</span>
  //             </h2>
  //
  //             <p>
  //               I'm currently open to software engineering opportunities,
  //               interesting projects, and conversations about building
  //               things well.
  //             </p>
  //
  //             <a
  //               href={`mailto:${portfolio.email}`}
  //               className="button button-primary"
  //             >
  //               <Mail size={16} />
  //               Say hello
  //               <ArrowUpRight size={16} />
  //             </a>
  //           </div>
  //
  //           <div className="contact-links">
  //             <a
  //               href={portfolio.github}
  //               target="_blank"
  //               rel="noreferrer"
  //             >
  //               <Code2 size={18} />
  //               GitHub
  //               <ArrowUpRight size={15} />
  //             </a>
  //
  //             <a
  //               href={portfolio.linkedin}
  //               target="_blank"
  //               rel="noreferrer"
  //             >
  //               <User size={18} />
  //               LinkedIn
  //               <ArrowUpRight size={15} />
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }
//
