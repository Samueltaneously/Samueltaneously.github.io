

"use client";

import { Command } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import {SMonogram} from "./icons/SMonogram"

export function Navigation({
  onCommand,
}: {
  onCommand: () => void;
}) {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/[0.06] bg-[rgba(8,9,11,0.72)] backdrop-blur-[18px]">
      <div className="mx-auto flex h-[62px] w-[calc(100%-30px)] max-w-[1180px] items-center justify-between min-[651px]:h-[72px] min-[651px]:w-[calc(100%-48px)]">


        <a
          href="#"
          aria-label="Samuel — Home"
          className="flex items-center gap-[10px] font-semibold tracking-[-0.03em]"
        >
          <SMonogram size={52}/>

          <span>{portfolio.firstName}</span>
        </a>


        {/*<a
          href="#"
          className="flex items-center gap-[10px] font-semibold tracking-[-0.03em]"
        >
          <span className="grid size-7 place-items-center rounded-lg bg-[linear-gradient(135deg,#8b5cf6,#5b21b6)] text-[13px] text-white">
            A
          </span>
          <span>{portfolio.firstName}</span>
        </a>*/}


        <nav className="ml-auto mr-8 hidden gap-8 min-[901px]:flex">

          <a
            href="#work"
            className="text-[13px] text-[#a6abb5] transition-colors duration-200 hover:text-white"
          >
            Work
          </a>

          <a
            href="#engineering"
            className="text-[13px] text-[#a6abb5] transition-colors duration-200 hover:text-white"
          >
            Engineering
          </a>

          <a
            href="#experience"
            className="text-[13px] text-[#a6abb5] transition-colors duration-200 hover:text-white"
          >
            About
          </a>

          <a
            href="#journal"
            className="text-[13px] text-[#a6abb5] transition-colors duration-200 hover:text-white"
          >
            Journal
          </a>

          <a
            href="#contact"
            className="text-[13px] text-[#a6abb5] transition-colors duration-200 hover:text-white"
          >
            Contact
          </a>

        </nav>

        <button
          className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/[0.09] bg-white/[0.025] px-[9px] py-[7px] text-[12px] text-[#a6abb5] transition-colors duration-200 hover:border-white/[0.16] hover:text-white [&_kbd]:border [&_kbd]:border-white/[0.09] [&_kbd]:rounded [&_kbd]:px-[5px] [&_kbd]:py-px [&_kbd]:font-mono [&_kbd]:text-[10px] [&_kbd]:text-[#696f7b] max-[650px]:[&_span]:hidden max-[650px]:[&_kbd]:hidden"
          onClick={onCommand}
          aria-label="Open command palette"
        >
          <Command size={15} />
          <span>Command</span>
          <kbd>⌘K</kbd>
        </button>
      </div>
    </header>
  );
}



//  ****************************************   O U T D A T E D   ****************************************  //

  // "use client";
  //
  //     import { Command } from "lucide-react";
  //     import { portfolio } from "@/data/portfolio";
  //
  //     export function Navigation({
  //       onCommand
  //     }: {
  //       onCommand: () => void;
  //     }) {
  //       return (
  //         <header className="nav">
  //           <div className="container nav-inner">
  //             <a href="#" className="logo">
  //               <span className="logo-mark">A</span>
  //               <span>{portfolio.firstName}</span>
  //             </a>
  //
  //             <nav className="nav-links">
  //               <a href="#work">Work</a>
  //               <a href="#engineering">Engineering</a>
  //               <a href="#about">About</a>
  //               <a href="#journal">Journal</a>
  //             </nav>
  //
  //             <button
  //               className="command-button"
  //               onClick={onCommand}
  //               aria-label="Open command palette"
  //             >
  //               <Command size={15} />
  //               <span>Command</span>
  //               <kbd>⌘K</kbd>
  //             </button>
  //           </div>
  //         </header>
  //       );
  //     }
//
