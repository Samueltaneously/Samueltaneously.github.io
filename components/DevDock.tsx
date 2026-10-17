


"use client";

import { Activity, ArrowUpRight, BriefcaseBusiness, Command, FileText, Code2, Mail, X, Code } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GitHubIcon } from "./icons/GitHubIcon";

import { portfolio } from "@/data/portfolio";



export function DevDock({ onCommand }: { onCommand: () => void; }) {

  const [open, setOpen] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        dockRef.current &&
        !dockRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);



function openCommandPalette() { setOpen(false); onCommand(); }

  return (
    <div
      ref={dockRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8"
    >
      {open && (
      <div className="w-[min(340px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f12]/95 shadow-2xl shadow-black/50 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-200">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10px] tracking-[0.18em] text-neutral-500">
              ENGINEERING TOOLKIT
            </span>

            <strong className="text-sm font-semibold text-white">
              {portfolio.firstName}.dev
            </strong>
          </div>

        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close developer dock"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
        >
          <X size={15} />
        </button>
      </div>

      {/* System status */}
      <div className="mx-4 mt-4 flex items-center gap-3 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.04] p-3">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>

        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <strong className="text-xs font-medium text-neutral-200">
            Portfolio operational
          </strong>

          <span className="text-[11px] text-neutral-500">
            All systems nominal
          </span>
        </div>

        <Activity size={14} className="text-emerald-400" />
      </div>

      {/* Actions */}
      <div className="p-2">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-neutral-400 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
        >
          <FileText size={15} className="text-neutral-500 group-hover:text-violet-300" />
          <span className="flex-1">Résumé</span>
          <ArrowUpRight size={13} className="text-neutral-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <a
          href={portfolio.github}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-neutral-400 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
        >
          <GitHubIcon size={15} className="text-neutral-500 group-hover:text-violet-300" />
          <span className="flex-1">GitHub</span>
          <ArrowUpRight size={13} className="text-neutral-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <a
          href="#work"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-neutral-400 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
        >
          <BriefcaseBusiness size={15} className="text-neutral-500 group-hover:text-violet-300" />
          <span className="flex-1">Projects</span>
          <ArrowUpRight size={13} className="text-neutral-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <button
          type="button"
          onClick={openCommandPalette}
          className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm text-neutral-400 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
        >
          <Command size={15} className="text-neutral-500 group-hover:text-violet-300" />
          <span className="flex-1">Command palette</span>
          <kbd className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-1 font-mono text-[10px] text-neutral-500">
            ⌘K
          </kbd>
        </button>

        <a
          href={`mailto:${portfolio.email}`}
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-neutral-400 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
        >
          <Mail size={15} className="text-neutral-500 group-hover:text-violet-300" />
          <span className="flex-1">Contact</span>
          <ArrowUpRight size={13} className="text-neutral-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center gap-2 border-t border-white/10 px-4 py-3 font-mono text-[10px] text-neutral-600">
        <span>Built with: Next.js</span>
        <span>·</span>
        <span>TypeScript</span>
        <span>·</span>
        <span>TailwindCSS</span>
      </div>
    </div>
  )}

  {/* Floating trigger */}
  <button
    type="button"
    onClick={() => setOpen((current) => !current)}
    aria-label={
      open
        ? "Close engineering toolkit"
        : "Open engineering toolkit"
    }
    aria-expanded={open}
    className="group relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-[#111318] shadow-xl shadow-black/30 transition-all duration-200 hover:scale-105 hover:border-violet-400/40 hover:bg-[#191b22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
  >
    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-400 to-blue-500 text-sm font-bold text-white shadow-lg shadow-violet-500/20">
      {open ? <X size={17} /> : <Code2 size={19}/>}
    </span>

    {!open && (
      <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-[#111318]">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </span>
    )}
  </button>
</div>

); }



//  ****************************************   O U T D A T E D   ****************************************  //

  // "use client";
  //
  // import {
  //   Activity,
  //   ArrowUpRight,
  //   BriefcaseBusiness,
  //   Command,
  //   FileText,
  //   Code2,
  //   Mail,
  //   X
  // } from "lucide-react";
  // import { useState } from "react";
  // import { portfolio } from "@/data/portfolio";
  //
  // export function DevDock({
  //   onCommand
  // }: {
  //   onCommand: () => void;
  // }) {
  //   const [open, setOpen] = useState(false);
  //
  //   function openCommandPalette() {
  //     setOpen(false);
  //     onCommand();
  //   }
  //
  //   return (
  //     <div className={`dev-dock ${open ? "open" : ""}`}>
  //       {open && (
  //         <div className="dev-dock-panel">
  //           <div className="dev-dock-header">
  //             <div>
  //               <span className="dev-dock-label">
  //                 ENGINEERING TOOLKIT
  //               </span>
  //
  //               <strong>{portfolio.firstName}.dev</strong>
  //             </div>
  //
  //             <button
  //               type="button"
  //               onClick={() => setOpen(false)}
  //               aria-label="Close developer dock"
  //             >
  //               <X size={15} />
  //             </button>
  //           </div>
  //
  //           <div className="dev-dock-status">
  //             <span className="status-dot" />
  //
  //             <div>
  //               <strong>Portfolio operational</strong>
  //               <span>All systems nominal</span>
  //             </div>
  //
  //             <Activity size={14} />
  //           </div>
  //
  //           <div className="dev-dock-actions">
  //             <a
  //               href="/resume.pdf"
  //               target="_blank"
  //               rel="noreferrer"
  //               onClick={() => setOpen(false)}
  //             >
  //               <FileText size={15} />
  //               Résumé
  //               <ArrowUpRight size={13} />
  //             </a>
  //
  //             <a
  //               href={portfolio.github}
  //               target="_blank"
  //               rel="noreferrer"
  //               onClick={() => setOpen(false)}
  //             >
  //               <Code2 size={15} />
  //               GitHub
  //               <ArrowUpRight size={13} />
  //             </a>
  //
  //             <a
  //               href="#work"
  //               onClick={() => setOpen(false)}
  //             >
  //               <BriefcaseBusiness size={15} />
  //               Projects
  //               <ArrowUpRight size={13} />
  //             </a>
  //
  //             <button
  //               type="button"
  //               onClick={openCommandPalette}
  //             >
  //               <Command size={15} />
  //               Command palette
  //               <span className="dev-dock-shortcut">⌘K</span>
  //             </button>
  //
  //             <a
  //               href={`mailto:${portfolio.email}`}
  //               onClick={() => setOpen(false)}
  //             >
  //               <Mail size={15} />
  //               Contact
  //               <ArrowUpRight size={13} />
  //             </a>
  //           </div>
  //
  //           <div className="dev-dock-footer">
  //             <span>Built with Next.js</span>
  //             <span>•</span>
  //             <span>TypeScript</span>
  //           </div>
  //         </div>
  //       )}
  //
  //       <button
  //         type="button"
  //         className="dev-dock-trigger"
  //         onClick={() => setOpen((current) => !current)}
  //         aria-label={
  //           open
  //             ? "Close engineering toolkit"
  //             : "Open engineering toolkit"
  //         }
  //         aria-expanded={open}
  //       >
  //         <span className="dev-dock-logo">
  //           A
  //         </span>
  //
  //         <span className="dev-dock-pulse" />
  //       </button>
  //     </div>
  //   );
  // }
//
