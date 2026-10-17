"use client";

import {
  Activity,
  Database,
  Layers3,
  Server,
  Zap,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";



type Project = (typeof portfolio.projects)[number];
type ArchitectureData = NonNullable<Project["Architecture"]>;

type EngineeringProps = {
  projectTitle?: string;
  architecture?: ArchitectureData | null;
};


const FALLBACK_ARCHITECTURE: ArchitectureData = {
  codeSampleFileName: "Example.tsx",

  codeSample: `function Application() {
  return (
    <main>
      <h1>Application Architecture</h1>
    </main>
  );
}`,

stack: {
  client: {
    title: "Client Application",
    description: "User interface and application state",
    technologies: ["React", "TypeScript"],
  },

  backend: {
    title: "Backend & API",
    description: "Application logic and API requests",
    technologies: ["REST API", "Server"],
  },

  dataSecurity: {
    title: "Data & Persistence",
    description: "Data storage and application security",
    technologies: ["Database", "Data Persistence"],
  },

  integrations: [],

  connections: {
    clientToBackend:
      "The client communicates with the backend through the application's API.",

    backendToData:
      "The backend manages data access and persistence.",
  },
},

  codeSampleWhy:
    "This example illustrates how an application's layers work together. Select a project to explore its architecture, technology stack, and implementation details.",
};



function getIndentLevel(line: string): number {
  const leadingWhitespace = line.match(/^[ \t]*/)?.[0] ?? "";

  return leadingWhitespace.replace(/\t/g, "  ").length / 2;
}





export function Engineering({
  projectTitle,
  architecture,
}: EngineeringProps) {
  const data = architecture ?? FALLBACK_ARCHITECTURE;

  const connections = {
    clientToBackend:
      data.stack?.connections?.clientToBackend ||
      "The client communicates with the backend through the application's API.",

    backendToData:
      data.stack?.connections?.backendToData ||
      "The backend manages data access and persistence.",
  };

  const project = portfolio.projects.find(
    (project) => project.title === projectTitle
  );

  const demoUrl = project?.demo?.trim();

  const stackConfig = [
    {
      key: "client",
      number: "01",
      icon: Layers3,
      accent: "text-sky-400",
    },
    {
      key: "backend",
      number: "02",
      icon: Server,
      accent: "text-emerald-400",
    },
    {
      key: "dataSecurity",
      number: "03",
      icon: Database,
      accent: "text-violet-400",
    },
  ] as const;

  const stacks = stackConfig.map((config) => ({
    ...config,
    ...data.stack[config.key],
  }));

  const integrations = data.stack.integrations ?? [];


  function normalizeCode(code: string): string {
    const lines = code.replace(/^\n|\n\s*$/g, "").split("\n");

    const nonEmptyLines = lines.filter((line) => line.trim().length > 0);

    const minIndent = Math.min(
      ...nonEmptyLines.map((line) => line.match(/^[ \t]*/)?.[0].length ?? 0)
    );

    return lines
      .map((line) => line.slice(minIndent))
      .join("\n");
  }

  const fileName =
    data.codeSampleFileName?.trim() ||
    FALLBACK_ARCHITECTURE.codeSampleFileName;

  const explanation =
    data.codeSampleWhy?.trim() ||
    FALLBACK_ARCHITECTURE.codeSampleWhy;

  const codeSample = normalizeCode(
    data.codeSample || FALLBACK_ARCHITECTURE.codeSample
  );

  const codeLines = codeSample.split("\n");




  return (
    <section
      id="engineering"
      className="relative scroll-mt-20 overflow-hidden bg-[#0b0c0f] py-20 text-zinc-100 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end sm:mb-12">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-emerald-400">
              02 / ENGINEERING
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              More than the pixels.
            </h2>

            <p
              aria-live="polite"
              className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1"
            >
              {projectTitle ? (
                <>
                  <span className="text-sm font-medium text-emerald-400">
                    Exploring:
                  </span>

                  <span className="relative inline-block text-xl font-semibold tracking-tight bg-gradient-to-br from-violet-400 to-blue-500 bg-clip-text text-transparent sm:text-2xl">
                    {projectTitle}
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-violet-400 to-blue-500" />
                  </span>
                </>
              ) : (
                <span className="text-sm font-medium text-emerald-400">
                  Architecture overview
                </span>
              )}
            </p>
          </div>

          <p className="max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
            I like understanding what happens underneath the
            interface, too.
          </p>
        </div>

        {/* Architecture and technology stack */}
        <div className="">
          {/* Architecture diagram */}
          <div
            id="architecture"
            className="rounded-2xl border border-white/[0.08] bg-[#101216] p-5 sm:p-6"
          >
            <div className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.15em] text-zinc-400">
              <Server size={15} className="text-emerald-400" />
              SYSTEM ARCHITECTURE
            </div>


            <div className="mt-5 rounded-xl border border-white/[0.06]
              bg-[#090b0e] p-4 sm:p-5">

              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[10px]
                  tracking-widest text-zinc-500">
                  REQUEST / DATA FLOW
                </span>
                <span className="text-[10px] text-zinc-600">
                  {stacks.length} layers
                </span>
              </div>

              <div className="grid grid-cols-1 gap-0 md:grid-cols-3
                md:items-stretch md:gap-3">

                {stacks.map((stack, index) => {
                  const Icon = stack.icon;

                  return (
                    <div key={stack.key} className="flex min-w-0
                      flex-col">

                      <div className="flex flex-1 flex-col rounded-xl
                        border border-white/[0.09] bg-[#111419] p-3">

                        <span className="font-mono text-[10px]
                          text-zinc-600">
                          COMPONENT / 0{index + 1}
                        </span>

                        <Icon size={19} className={`${stack.accent} mt-3`} />

                        <h3 className="mt-3 break-words text-sm
                          font-semibold text-zinc-100">
                          {stack.title}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-zinc-400">
                          {stack.description || "Project component"}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {stack.technologies.slice(0, 4).map((tech) => (
                            <span key={tech} className="rounded
                              bg-white/[0.04] px-1.5 py-1 text-[10px]
                              text-zinc-400">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {index < stacks.length - 1 && (
                        <div className="flex min-h-14 flex-col
                          items-center justify-center gap-1 md:hidden">
                          <span className="text-[10px] text-zinc-500">
                            {index === 0
                              ? "API / request"
                              : "Persistence / sync"}
                          </span>
                          <span className="text-emerald-400">↓</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 space-y-3 border-t
                border-white/[0.07] pt-4">

                <div className="flex gap-3">
                  <span className="mt-0.5 text-emerald-400">↗</span>
                  <div className="min-w-0">
                    <span className="font-mono text-[10px]
                      tracking-widest text-zinc-500">
                      CLIENT → BACKEND
                    </span>
                    <p className="mt-1 text-xs leading-5 text-zinc-400">
                      {connections.clientToBackend}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="mt-0.5 text-emerald-400">↗</span>
                  <div className="min-w-0">
                    <span className="font-mono text-[10px]
                      tracking-widest text-zinc-500">
                      BACKEND → DATA
                    </span>
                    <p className="mt-1 text-xs leading-5 text-zinc-400">
                      {connections.backendToData}
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <p className="mt-4 text-sm leading-6 text-zinc-400">
              {projectTitle
                ? `An overview of the technologies and responsibilities behind ${projectTitle}.`
                : "Explore the components, responsibilities, and tradeoffs behind each project."}
            </p>
          </div>

          {/* Technology stack */}
          {/*<div className="rounded-2xl border border-white/[0.08] bg-[#101216] p-5 sm:p-6">
            <div className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.15em] text-zinc-400">
              <Layers3 size={15} className="text-emerald-400" />
              TECHNOLOGY STACK
            </div>

            <div className="mt-5 space-y-3">
              {stacks.map((stack) => {
                const Icon = stack.icon;

                return (
                  <article
                    key={stack.key}
                    className="rounded-xl border border-white/[0.08]
                      bg-gradient-to-br from-white/[0.035]
                      to-transparent p-4 transition-colors
                      hover:border-white/[0.15]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg border border-white/[0.08]
                        bg-white/[0.04] p-2">
                        <Icon size={17} className={stack.accent} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center
                          justify-between gap-2">
                          <h3 className="text-sm font-semibold text-zinc-100">
                            {stack.title}
                          </h3>

                          <span className="font-mono text-[10px]
                            tracking-widest text-zinc-600">
                            LAYER {stack.number}
                          </span>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-zinc-400">
                          {stack.description || "Project component"}
                        </p>

                        <ul className="mt-3 flex flex-wrap gap-1.5">
                          {stack.technologies.map((technology) => (
                            <li
                              key={technology}
                              className="rounded-md border border-white/[0.08]
                                bg-black/20 px-2 py-1 text-[11px]
                                leading-4 text-zinc-300"
                            >
                              {technology}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              })}

              {integrations.length > 0 && (
                <div className="rounded-xl border border-sky-400/20
                  bg-sky-400/[0.04] p-4">
                  <div className="flex items-center gap-2">
                    <Activity size={16} className="text-sky-400" />
                    <h3 className="text-sm font-semibold text-zinc-200">
                      External integrations
                    </h3>
                  </div>

                  <ul className="mt-3 flex flex-wrap gap-2">
                    {integrations.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-sky-400/15
                          px-2 py-1 text-xs text-sky-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>*/}
        </div>

        {/* Code showcase */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101216] sm:mt-7">
          <div className="flex flex-col justify-between gap-5 border-b border-white/[0.08] p-6 sm:flex-row sm:items-center sm:gap-8 sm:py-6 sm:pl-8 sm:pr-12">
            <div className="min-w-0">
              <span className="font-mono text-xs tracking-[0.2em] text-emerald-400">
                CODE / FEATURED
              </span>

              <h3 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Small details, deliberate decisions.
              </h3>
            </div>

            {/* Larger filename box, shifted left */}
            <span className="w-fit min-w-44 shrink-0 rounded-lg border border-white/[0.10] bg-[#090a0d] px-5 py-3 text-center font-mono text-sm text-zinc-300 sm:mr-4 md:mr-22 lg:mr-14 xl:mr-22">
              {fileName}
            </span>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_280px]">

            {/* Code editor */}
            <div className="min-w-0 overflow-x-auto bg-[#0d0f12] py-5 sm:py-7">
              <div className="flex min-w-max font-mono text-xs leading-7 sm:text-sm">
                {/* Line numbers */}
                <div
                  aria-hidden="true"
                  className="sticky left-0 z-10 flex shrink-0 flex-col border-r border-white/[0.06] bg-[#0d0f12] px-4 text-right text-zinc-600 select-none sm:px-5"
                >
                  {codeLines.map((_, index) => (
                    <span key={index} className="block h-7">
                      {index + 1}
                    </span>
                  ))}
                </div>

                {/* Code content */}
                <pre className="m-0 px-5 text-zinc-300 sm:px-7">
                  <code className="block whitespace-pre">
                    {codeLines.map((line, index) => {
                      const indentLevel = getIndentLevel(line);

                      return (
                        <span
                          key={index}
                          className="relative block h-7 whitespace-pre"
                        >
                          {Array.from(
                            { length: indentLevel },
                            (_, level) => (
                              <span
                                key={level}
                                aria-hidden="true"
                                className="pointer-events-none absolute bottom-0 top-0 w-px bg-white/[0.10]"
                                style={{
                                  left: `${level * 1}rem`,
                                }}
                              />
                            )
                          )}

                          {line || "\u00A0"}
                        </span>
                      );
                    })}
                  </code>
                </pre>
              </div>
            </div>


            {/* Code explanation */}
            <div className="flex flex-col justify-center border-t border-white/[0.08] p-6 sm:p-8 lg:border-l lg:border-t-0">
              <span className="font-mono text-[10px] tracking-[0.2em] text-emerald-400">
                WHY
              </span>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {explanation}
              </p>

              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 text-xs font-medium text-zinc-200 transition hover:text-emerald-400"
                >
                  See the project
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Architecture diagram helpers */

function ArchitectureNode({
  label,
  sublabel,
  highlighted = false,
  icon,
}: {
  label: string;
  sublabel: string;
  highlighted?: boolean;
  icon: React.ReactNode;
}) {
  return (
    <div
      className={`flex w-full min-w-0 flex-col items-center gap-1.5 rounded-xl border p-2.5 text-center transition-colors ${
        highlighted
          ? "border-emerald-400/30 bg-emerald-400/[0.06] shadow-[0_0_30px_rgba(52,211,153,0.04)]"
          : "border-white/[0.08] bg-[#101216]"
      }`}
    >
      <span
        className={
          highlighted ? "text-emerald-400" : "text-zinc-500"
        }
      >
        {icon}
      </span>

      <strong className="break-words text-xs font-medium text-zinc-200 sm:text-sm">
        {label}
      </strong>

      <span className="break-words text-[10px] leading-4 text-zinc-500 sm:text-xs">
        {sublabel}
      </span>
    </div>
  );
}

function ArchitectureLine() {
  return (
    <div className="flex h-5 flex-col items-center justify-center">
      <div className="h-full w-px bg-gradient-to-b from-emerald-400/40 to-white/10" />
    </div>
  );
}




//  ****************************************   O U T D A T E D   ****************************************  //

  // import {
  //       Activity,
  //       CheckCircle2,
  //       Gauge,
  //       GitBranch,
  //       Server,
  //       TestTube2
  //     } from "lucide-react";
  //
  //     export function Engineering() {
  //       return (
  //         <section className="section engineering-section" id="engineering">
  //           <div className="container">
  //             <div className="section-heading">
  //               <div>
  //                 <span className="section-number">
  //                   02 / ENGINEERING
  //                 </span>
  //
  //                 <h2>More than the pixels.</h2>
  //               </div>
  //
  //               <p>
  //                 I like understanding what happens underneath the interface,
  //                 too.
  //               </p>
  //             </div>
  //
  //             <div className="engineering-grid">
  //               <div className="architecture-card" id="architecture">
  //                 <div className="card-label">
  //                   <Server size={15} />
  //                   SYSTEM ARCHITECTURE
  //                 </div>
  //
  //                 <div className="architecture-diagram">
  //                   <ArchitectureNode
  //                     label="Browser"
  //                     sublabel="React / Next.js"
  //                   />
  //
  //                   <ArchitectureLine />
  //
  //                   <ArchitectureNode
  //                     label="Application"
  //                     sublabel="Server + API"
  //                     highlighted
  //                   />
  //
  //                   <ArchitectureLine />
  //
  //                   <div className="architecture-split">
  //                     <ArchitectureNode
  //                       label="PostgreSQL"
  //                       sublabel="Primary data"
  //                     />
  //
  //                     <ArchitectureNode
  //                       label="Redis"
  //                       sublabel="Cache / events"
  //                     />
  //                   </div>
  //                 </div>
  //
  //                 <p className="architecture-copy">
  //                   The interesting part isn't using a particular technology.
  //                   It's understanding why each piece exists and what tradeoffs
  //                   it introduces.
  //                 </p>
  //               </div>
  //
  //               <div className="metrics-card">
  //                 <div className="card-label">
  //                   <Activity size={15} />
  //                   SYSTEM STATUS
  //                 </div>
  //
  //                 <div className="status-list">
  //                   <Status
  //                     icon={<Gauge />}
  //                     label="Performance"
  //                     value="98 / 100"
  //                   />
  //
  //                   <Status
  //                     icon={<CheckCircle2 />}
  //                     label="Accessibility"
  //                     value="100 / 100"
  //                   />
  //
  //                   <Status
  //                     icon={<TestTube2 />}
  //                     label="Test coverage"
  //                     value="87%"
  //                   />
  //
  //                   <Status
  //                     icon={<GitBranch />}
  //                     label="CI pipeline"
  //                     value="Passing"
  //                   />
  //                 </div>
  //
  //                 <div className="deployment">
  //                   <div>
  //                     <span>Latest deployment</span>
  //                     <strong>3 minutes ago</strong>
  //                   </div>
  //
  //                   <span className="status-badge">
  //                     Production
  //                   </span>
  //                 </div>
  //               </div>
  //             </div>
  //
  //             <div className="code-showcase">
  //               <div className="code-header">
  //                 <div>
  //                   <span className="section-number">
  //                     CODE / FEATURED
  //                   </span>
  //
  //                   <h3>Small details, deliberate decisions.</h3>
  //                 </div>
  //
  //                 <span className="code-file">
  //                   ProjectGrid.tsx
  //                 </span>
  //               </div>
  //
  //               <div className="code-window">
  //                 <div className="line-numbers">
  //                   {Array.from({ length: 20 }, (_, i) => (
  //                     <span key={i}>{i + 1}</span>
  //                   ))}
  //                 </div>
  //
  //                 <pre>
  //                   <code>
  //     {`const { data, isLoading } = useProjects();
  //
  //     if (isLoading) {
  //       return <ProjectSkeleton />;
  //     }
  //
  //     return (
  //       <ProjectGrid
  //         projects={data}
  //         onSelect={handleProjectSelect}
  //       />
  //     );`}
  //                   </code>
  //                 </pre>
  //
  //                 <div className="code-explanation">
  //                   <span>WHY</span>
  //
  //                   <p>
  //                     Server state is separated from UI state so components
  //                     remain predictable and independently testable.
  //                   </p>
  //
  //                   <a href="#work" className="text-link">
  //                     See the project →
  //                   </a>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </section>
  //       );
  //     }
  //
  //     function ArchitectureNode({
  //       label,
  //       sublabel,
  //       highlighted = false
  //     }: {
  //       label: string;
  //       sublabel: string;
  //       highlighted?: boolean;
  //     }) {
  //       return (
  //         <div
  //           className={`architecture-node ${
  //             highlighted ? "highlighted" : ""
  //           }`}
  //         >
  //           <strong>{label}</strong>
  //           <span>{sublabel}</span>
  //         </div>
  //       );
  //     }
  //
  //     function ArchitectureLine() {
  //       return <div className="architecture-line" />;
  //     }
  //
  //     function Status({
  //       icon,
  //       label,
  //       value
  //     }: {
  //       icon: React.ReactNode;
  //       label: string;
  //       value: string;
  //     }) {
  //       return (
  //         <div className="status-row">
  //           <div className="status-icon">{icon}</div>
  //
  //           <div className="status-label">
  //             <span>{label}</span>
  //             <strong>{value}</strong>
  //           </div>
  //
  //           <span className="status-dot" />
  //         </div>
  //       );
  //     }
//
