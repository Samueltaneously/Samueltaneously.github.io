// "use client";
//
// import { useEffect, useRef, useState } from "react";
// import { portfolio } from "@/data/portfolio";
//
// const initialHistory = [
//   "Welcome to alex.dev.",
//   'Type "help" to see available commands.'
// ];
//
// const commands: Record<string, string> = {
//   help: `Available commands:
//
// about       About me
// projects    View projects
// skills      Technical skills
// experience  Experience
// contact     Contact information
// clear       Clear terminal`,
//
//   about: portfolio.bio,
//
//   projects: portfolio.projects
//     .map((project) => `${project.number}  ${project.title}`)
//     .join("\n"),
//
//   skills: `LANGUAGES
//   ${portfolio.skills.languages.join("  ")}
//
// FRONTEND
//   ${portfolio.skills.frontend.join("  ")}
//
// BACKEND
//   ${portfolio.skills.backend.join("  ")}
//
// TOOLS
//   ${portfolio.skills.tools.join("  ")}`,
//
//   experience: portfolio.experience
//     .map(
//       (item) =>
//         `${item.period}
// ${item.role} — ${item.company}
// ${item.description}`
//     )
//     .join("\n\n"),
//
//   contact: `Email: ${portfolio.email}
// GitHub: ${portfolio.github}
// LinkedIn: ${portfolio.linkedin}`
// };
//
// export function Terminal() {
//   const [input, setInput] = useState("");
//   const [history, setHistory] = useState<string[]>(initialHistory);
//
//   const inputRef = useRef<HTMLInputElement>(null);
//
//   // useEffect(() => {
//   //   inputRef.current?.focus();
//   // }, []);
//
//   function execute(command: string) {
//     const normalized = command.trim().toLowerCase();
//
//     if (!normalized) return;
//
//     if (normalized === "clear") {
//       setHistory(initialHistory);
//       setInput("");
//
//       requestAnimationFrame(() => {
//         inputRef.current?.focus();
//       });
//
//       return;
//     }
//
//     const result =
//       commands[normalized] ??
//       `Command not found: ${normalized}
// Type "help" for available commands.`;
//
//     setHistory((current) => [
//       ...current,
//       `$ ${command}`,
//       result
//     ]);
//
//     setInput("");
//
//     requestAnimationFrame(() => {
//       inputRef.current?.focus();
//     });
//   }
//
//   function focusTerminal() {
//     inputRef.current?.focus();
//   }
//
//   return (
//     <div className="terminal">
//       <div className="terminal-header">
//         <div className="terminal-controls">
//           <span />
//           <span />
//           <span />
//         </div>
//
//         <span className="terminal-title">
//           alex@portfolio ~
//         </span>
//
//         <span className="terminal-spacer" />
//       </div>
//
//       <div
//         className="terminal-body"
//         onClick={focusTerminal}
//         role="presentation"
//       >
//         {history.map((line, index) => (
//           <pre key={index} className="terminal-line">
//             {line}
//           </pre>
//         ))}
//
//         <div className="terminal-input">
//           <span>$</span>
//
//           <input
//             ref={inputRef}
//             value={input}
//             onChange={(event) => setInput(event.target.value)}
//             onKeyDown={(event) => {
//               if (event.key === "Enter") {
//                 execute(input);
//               }
//             }}
//             aria-label="Terminal command"
//             autoComplete="off"
//             spellCheck={false}
//           />
//
//           <span className="cursor" />
//         </div>
//       </div>
//     </div>
//   );
// }






"use client";

import { useRef, useState } from "react";
import { portfolio } from "@/data/portfolio";

const initialHistory = [
  "Welcome to sam.dev.",
  'Type "help" to see available commands.',
];

const commands: Record<string, string> = {
  help: `Available commands:

about       About me
projects    View projects
skills      Technical skills
experience  Experience
contact     Contact information
clear       Clear terminal`,

  about: portfolio.bio,

  projects: portfolio.projects
    .map((project) => `${project.number}  ${project.title}`)
    .join("\n"),

  skills: `LANGUAGES
  ${portfolio.skills.languages.join("  ")}

FRONTEND
  ${portfolio.skills.frontend.join("  ")}

BACKEND
  ${portfolio.skills.backend.join("  ")}

TOOLS
  ${portfolio.skills.tools.join("  ")}`,

  experience: portfolio.experience
    .map(
      (item) =>
        `${item.period}
${item.role} — ${item.company}
${item.description}`
    )
    .join("\n\n"),

  contact: `Email: ${portfolio.email}
GitHub: ${portfolio.github}
LinkedIn: ${portfolio.linkedin}`,
};

export function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>(initialHistory);

  const inputRef = useRef<HTMLInputElement>(null);

  function execute(command: string) {
    const normalized = command.trim().toLowerCase();

    if (!normalized) return;

    if (normalized === "clear") {
      setHistory(initialHistory);
      setInput("");

      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });

      return;
    }

    const result =
      commands[normalized] ??
      `Command not found: ${normalized}
Type "help" for available commands.`;

    setHistory((current) => [
      ...current,
      `$ ${command}`,
      result,
    ]);

    setInput("");

    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  }

  function focusTerminal() {
    inputRef.current?.focus();
  }

  return (
    <section
      id="terminal"
      className="w-full bg-[#09090b] py-20 text-white sm:py-24"
    >
      {/* Match the width and alignment of the other sections */}
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Terminal window */}
        <div className="relative w-full min-w-0 overflow-hidden rounded-[14px] border border-white/[0.09] bg-[#0b0c0f] shadow-[0_30px_80px_rgba(0,0,0,0.25),inset_0_1px_rgba(255,255,255,0.025)]">
          {/* Terminal header */}
          <div className="flex h-[42px] items-center border-b border-white/[0.09] bg-white/[0.02] px-[15px]">
            <div className="flex shrink-0 gap-[6px]">
              <span className="size-2 rounded-full bg-[#ff5f57]" />
              <span className="size-2 rounded-full bg-[#febc2e]" />
              <span className="size-2 rounded-full bg-[#28c840]" />
            </div>

            <span className="mx-auto truncate px-3 font-mono text-[10px] text-[#696f7b]">
              samuel@portfolio ~
            </span>

            <span className="w-[30px] shrink-0" />
          </div>

          {/* Terminal body */}
          <div
            className="min-h-[240px] cursor-text overflow-x-auto p-[18px] font-mono text-[10px] sm:min-h-[260px] sm:p-[25px] sm:text-xs"
            onClick={focusTerminal}
            role="presentation"
          >
            {history.map((line, index) => (
              <pre
                key={index}
                className={`mb-2 whitespace-pre-wrap break-words ${
                  index < 2 ? "text-[#d1d5db]" : "text-[#9ca3af]"
                }`}
              >
                {line}
              </pre>
            ))}

            {/* Command input */}
            <div className="mt-[13px] flex min-w-0 items-center gap-[9px] text-[#34d399]">
              <span className="shrink-0">$</span>

              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    execute(input);
                  }
                }}
                aria-label="Terminal command"
                autoComplete="off"
                spellCheck={false}
                className="min-w-0 flex-1 border-0 bg-transparent font-mono text-inherit text-white outline-none"
              />

              <span className="h-[15px] w-[7px] shrink-0 animate-[blink_1s_infinite] bg-[#34d399]" />
            </div>
          </div>

          {/* Cursor animation */}
          <style jsx>{`
            @keyframes blink {
              50% {
                opacity: 0;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
