
"use client";

import { ArrowRight, ArrowUp, FileText, Code2, Mail, User, X, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { GitHubIcon } from "./icons/GitHubIcon";

const commands = [
  { label: "Top of page", href: "#about", icon: ArrowUp },
  { label: "View work", href: "#work", icon: ArrowRight },
  { label: "About me", href: "#experience", icon: User },
  { label: "Engineering", href: "#engineering", icon: ArrowRight },
  { label: "Résumé", href: "/resume.pdf", icon: FileText },
  { label: "GitHub", href: portfolio.github, icon: GitHubIcon, external: true },
  { label: "Contact", href: `mailto:${portfolio.email}`, icon: Mail }];



export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void; }) {

  const [selected, setSelected] = useState(0);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCommands = commands.filter((command) => command.label.toLowerCase().includes(query.toLowerCase()) );

  useEffect(() => { if (!open) return;

  setSelected(0);
  setQuery("");

  requestAnimationFrame(() => {
    inputRef.current?.focus();
  });

  }, [open]);

  useEffect(() => { if (!open) return;

  const handler = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      setSelected((current) =>
        Math.min(current + 1, filteredCommands.length - 1)
      );

      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      setSelected((current) => Math.max(current - 1, 0));

      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();

      const command = filteredCommands[selected];

      if (command) {
        activateCommand(command.href);
      }
    }
  };

  window.addEventListener("keydown", handler);

  return () => {
    window.removeEventListener("keydown", handler);
  };

  }, [open, onClose, selected, filteredCommands]);

  useEffect(() => {
    if (selected >= filteredCommands.length) { setSelected(Math.max(filteredCommands.length - 1, 0)); }
  }, [filteredCommands.length, selected]);

  if (!open) return null;

  function activateCommand(href: string) { onClose();

  if (href.startsWith("#")) {
    requestAnimationFrame(() => {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth"
      });
    });

    return;
  }

  if (href.startsWith("mailto:")) {
    window.location.href = href;
    return;
  }

  if (href.startsWith("http://") || href.startsWith("https://")) {
    window.open(href, "_blank", "noopener,noreferrer");
    return;
  }

  window.location.href = href;

  }

  return ( <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 px-4 pb-8 pt-[15vh] backdrop-blur-sm sm:pt-[18vh]" onClick={onClose}

  >
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f12] shadow-2xl shadow-black/50 animate-in fade-in slide-in-from-top-2 duration-200"
      onClick={(event) => event.stopPropagation()}
    >
      {/* Search */}
      <div className="flex items-center gap-3 border-b border-white/10 px-4">
        <Search
          size={18}
          className="shrink-0 text-neutral-500"
        />

        <input
          ref={inputRef}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setSelected(0);
          }}
          placeholder="Search portfolio..."
          aria-label="Search portfolio"
          autoComplete="off"
          spellCheck={false}
          className="h-14 min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-neutral-600"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close command palette"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
        >
          <X size={17} />
        </button>
      </div>

      {/* Results */}
      <div className="max-h-[min(360px,50vh)] overflow-y-auto p-2">
        <div className="px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-600">
          Navigation
        </div>

        {filteredCommands.length === 0 ? (
          <div className="px-3 py-10 text-center text-sm text-neutral-500">
            No commands found.
          </div>
        ) : (
          filteredCommands.map((command, index) => {
            const Icon = command.icon;
            const isSelected = index === selected;

            return (
              <button
                type="button"
                key={command.label}
                className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
                  isSelected
                    ? "bg-white/[0.08] text-white"
                    : "text-neutral-400 hover:bg-white/[0.04] hover:text-white"
                }`}
                onMouseEnter={() => setSelected(index)}
                onClick={() => activateCommand(command.href)}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                    isSelected
                      ? "border-violet-400/20 bg-violet-400/10 text-violet-300"
                      : "border-white/[0.06] bg-white/[0.02] text-neutral-500"
                  }`}
                >
                  <Icon size={16} />
                </span>

                <span className="flex-1 font-medium">
                  {command.label}
                </span>

                <ArrowRight
                  size={14}
                  className={`transition-transform ${
                    isSelected
                      ? "translate-x-0 text-violet-300"
                      : "-translate-x-1 text-neutral-700 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
                />
              </button>
            );
          })
        )}
      </div>

      {/* Keyboard shortcuts */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 bg-white/[0.02] px-4 py-3">
        <span className="flex items-center gap-2 text-[11px] text-neutral-500">
          <kbd className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-1 font-mono text-[10px] text-neutral-400">
            ↑↓
          </kbd>
          Navigate
        </span>

        <span className="flex items-center gap-2 text-[11px] text-neutral-500">
          <kbd className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-1 font-mono text-[10px] text-neutral-400">
            ↵
          </kbd>
          Select
        </span>

        <span className="flex items-center gap-2 text-[11px] text-neutral-500">
          <kbd className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-1 font-mono text-[10px] text-neutral-400">
            ESC
          </kbd>
          Close
        </span>
      </div>
    </div>
  </div>

  ); }


//  ****************************************   O U T D A T E D   ****************************************  //

  // "use client";
  //
  // import {
  //   ArrowRight,
  //   FileText,
  //   Code2,
  //   Mail,
  //   User,
  //   X
  // } from "lucide-react";
  // import { useEffect, useRef, useState } from "react";
  // import { portfolio } from "@/data/portfolio";
  //
  // const commands = [
  //   {
  //     label: "View work",
  //     href: "#work",
  //     icon: ArrowRight
  //   },
  //   {
  //     label: "About me",
  //     href: "#about",
  //     icon: User
  //   },
  //   {
  //     label: "Engineering",
  //     href: "#engineering",
  //     icon: ArrowRight
  //   },
  //   {
  //     label: "Résumé",
  //     href: "/resume.pdf",
  //     icon: FileText
  //   },
  //   {
  //     label: "GitHub",
  //     href: portfolio.github,
  //     icon: Code2,
  //     external: true
  //   },
  //   {
  //     label: "Contact",
  //     href: `mailto:${portfolio.email}`,
  //     icon: Mail
  //   }
  // ];
  //
  // export function CommandPalette({
  //   open,
  //   onClose
  // }: {
  //   open: boolean;
  //   onClose: () => void;
  // }) {
  //   const [selected, setSelected] = useState(0);
  //   const [query, setQuery] = useState("");
  //   const inputRef = useRef<HTMLInputElement>(null);
  //
  //   const filteredCommands = commands.filter((command) =>
  //     command.label.toLowerCase().includes(query.toLowerCase())
  //   );
  //
  //   useEffect(() => {
  //     if (!open) return;
  //
  //     setSelected(0);
  //     setQuery("");
  //
  //     requestAnimationFrame(() => {
  //       inputRef.current?.focus();
  //     });
  //   }, [open]);
  //
  //   useEffect(() => {
  //     if (!open) return;
  //
  //     const handler = (event: KeyboardEvent) => {
  //       if (event.key === "Escape") {
  //         event.preventDefault();
  //         onClose();
  //         return;
  //       }
  //
  //       if (event.key === "ArrowDown") {
  //         event.preventDefault();
  //
  //         setSelected((current) =>
  //           Math.min(current + 1, filteredCommands.length - 1)
  //         );
  //
  //         return;
  //       }
  //
  //       if (event.key === "ArrowUp") {
  //         event.preventDefault();
  //
  //         setSelected((current) =>
  //           Math.max(current - 1, 0)
  //         );
  //
  //         return;
  //       }
  //
  //       if (event.key === "Enter") {
  //         event.preventDefault();
  //
  //         const command = filteredCommands[selected];
  //
  //         if (command) {
  //           activateCommand(command.href);
  //         }
  //       }
  //     };
  //
  //     window.addEventListener("keydown", handler);
  //
  //     return () => {
  //       window.removeEventListener("keydown", handler);
  //     };
  //   }, [open, onClose, selected, filteredCommands]);
  //
  //   useEffect(() => {
  //     if (selected >= filteredCommands.length) {
  //       setSelected(Math.max(filteredCommands.length - 1, 0));
  //     }
  //   }, [filteredCommands.length, selected]);
  //
  //   if (!open) return null;
  //
  //   function activateCommand(href: string) {
  //     onClose();
  //
  //     if (href.startsWith("#")) {
  //       requestAnimationFrame(() => {
  //         document.querySelector(href)?.scrollIntoView({
  //           behavior: "smooth"
  //         });
  //       });
  //
  //       return;
  //     }
  //
  //     window.location.href = href;
  //   }
  //
  //   return (
  //     <div className="command-overlay" onClick={onClose}>
  //       <div
  //         className="command-modal"
  //         onClick={(event) => event.stopPropagation()}
  //       >
  //         <div className="command-search">
  //           <span>⌕</span>
  //
  //           <input
  //             ref={inputRef}
  //             value={query}
  //             onChange={(event) => {
  //               setQuery(event.target.value);
  //               setSelected(0);
  //             }}
  //             placeholder="Search portfolio..."
  //             aria-label="Search portfolio"
  //             autoComplete="off"
  //           />
  //
  //           <button onClick={onClose} aria-label="Close command palette">
  //             <X size={17} />
  //           </button>
  //         </div>
  //
  //         <div className="command-results">
  //           {filteredCommands.length === 0 ? (
  //             <div className="command-empty">
  //               No commands found.
  //             </div>
  //           ) : (
  //             filteredCommands.map((command, index) => {
  //               const Icon = command.icon;
  //
  //               return (
  //                 <button
  //                   type="button"
  //                   key={command.label}
  //                   className={`command-item ${
  //                     index === selected ? "selected" : ""
  //                   }`}
  //                   onMouseEnter={() => setSelected(index)}
  //                   onClick={() => activateCommand(command.href)}
  //                 >
  //                   <span className="command-icon">
  //                     <Icon size={16} />
  //                   </span>
  //
  //                   <span>{command.label}</span>
  //
  //                   <ArrowRight
  //                     size={14}
  //                     className="command-arrow"
  //                   />
  //                 </button>
  //               );
  //             })
  //           )}
  //         </div>
  //
  //         <div className="command-footer">
  //           <span>↑↓ navigate</span>
  //           <span>↵ select</span>
  //           <span>esc close</span>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
//
