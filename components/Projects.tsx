
"use client";

import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
} from "lucide-react";
import { GitHubIcon } from "./icons/GitHubIcon";
import { portfolio } from "@/data/portfolio";

type Project = (typeof portfolio.projects)[number];

type ProjectsProps = {
  projects?: readonly Project[];
  onArchitectureClick?: (project: Project) => void;
};

export function Projects({
  projects = portfolio.projects,
  onArchitectureClick,
}: ProjectsProps) {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#08090b] py-24 text-zinc-100 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-emerald-400">
              01 / WORK
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Things I've built.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
            A selection of projects where I've had to think about
            more than just the UI.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title || index}
              onClick={() => onArchitectureClick?.(project)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0f12] transition duration-300 hover:border-emerald-400/30"
            >
              {/* Project number and category */}
              <div className="flex items-center gap-4 px-6 pt-6">
                {project.number && (
                  <span className="font-mono text-xs text-emerald-400">
                    {project.number}
                  </span>
                )}

                {project.category && (
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-zinc-400">
                    {project.category}
                  </span>
                )}

                <ArrowUpRight
                  size={20}
                  className="ml-auto text-zinc-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-400"
                />
              </div>

              {/* Project preview */}
              <div className="px-6 pt-6">
                <div className="relative flex min-h-56 items-center justify-center overflow-hidden rounded-xl border border-white/[0.06] bg-[#08090b] p-6 sm:min-h-64">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.09),transparent_70%)]" />

                  {index === 0 && <NotesAppPreview />}
                  {index === 1 && <MoodMusicAppPreview />}
                  {index === 2 && <StatTrackerAppPreview />}

                  {index > 2 && (
                    <div className="relative flex flex-col items-center gap-3 text-zinc-500">
                      <Layers3 size={32} strokeWidth={1.25} />
                      <span className="font-mono text-xs">
                        {project.category || "PROJECT"}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Project details */}
              <div className="p-6 sm:p-7">
                {project.title && (
                  <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {project.title}
                  </h3>
                )}

                {project.description && (
                  <p className="mt-3 text-sm font-medium leading-6 text-zinc-300">
                    {project.description}
                  </p>
                )}

                {project.longDescription && (
                  <p className="mt-3 text-sm leading-7 text-zinc-500">
                    {project.longDescription}
                  </p>
                )}

                {/* Technologies */}
                {project.technologies?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) =>
                      technology ? (
                        <span
                          key={technology}
                          className="rounded-md border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 font-mono text-[11px] text-zinc-400"
                        >
                          {technology}
                        </span>
                      ) : null
                    )}
                  </div>
                )}

                {/* Metrics */}
                {project.metrics?.some(
                  ([label, value]) =>
                    label && value != null && value !== ""
                ) && (
                  <div className="mt-7 grid grid-cols-2 gap-4 border-y border-white/[0.08] py-5 sm:grid-cols-3">
                    {project.metrics.map(
                      ([label, value], metricIndex) =>
                        label &&
                        value != null &&
                        value !== "" ? (
                          <div
                            key={label || metricIndex}
                            className="min-w-0"
                          >
                            <strong className="block text-lg font-semibold text-white">
                              {value}
                            </strong>

                            <span className="mt-1 block text-xs leading-5 text-zinc-500">
                              {label}
                            </span>
                          </div>
                        ) : null
                    )}
                  </div>
                )}

                {/* Project actions */}
                {(project.demo ||
                  project.github ||
                  project.Architecture) && (
                  <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex items-center gap-2 text-xs font-medium text-zinc-300 transition hover:text-emerald-400"
                      >
                        <ExternalLink size={14} />
                        Live demo
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex items-center gap-2 text-xs font-medium text-zinc-300 transition hover:text-emerald-400"
                      >
                        <GitHubIcon size={14} />
                        Source
                      </a>
                    )}

                    {project.Architecture && (
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          onArchitectureClick?.(project);
                        }}
                        className="inline-flex items-center gap-2 text-xs font-medium text-zinc-300 transition hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0d0f12]"
                        aria-label={`View architecture for ${project.title}`}
                      >
                        <Layers3 size={14} />
                        Architecture
                      </button>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}






function NotesAppPreview() {
  const notes = [
    {
      title: "Weekend plans",
      body: ["Visit the farmers market", "Pick up coffee beans", "Read for an hour"],
      color: "bg-[#fff3c4]",
      type: "checklist",
    },
    {
      title: "Project ideas",
      body: ["Personal dashboard", "Notes app redesign", "Explore new APIs"],
      color: "bg-[#dcefe3]",
      type: "list",
    },
    {
      title: "Things to remember",
      body: ["Ship the new feature", "Reply to Jordan", "Book a dentist appointment"],
      color: "bg-[#f8dfdf]",
      type: "list",
    },
    {
      title: "Design inspiration",
      body: ["Simple interfaces", "Soft colors", "Thoughtful interactions"],
      color: "bg-[#e5e1fa]",
      type: "list",
    },
    {
      title: "Quick thought",
      body: ["Great products feel effortless."],
      color: "bg-[#dce8f9]",
      type: "quote",
    },
    {
      title: "Shopping list",
      body: ["Oat milk", "Avocados", "Fresh bread"],
      color: "bg-[#f6e4ce]",
      type: "list",
    },
  ];

  return (
    <div className="relative z-10 w-full max-w-[230px] sm:max-w-[250px]">
      {/* Smartphone frame */}
      <div className="relative rounded-[2.4rem] border-[5px] border-[#303238] bg-[#111216] p-[5px] shadow-[0_24px_70px_rgba(0,0,0,0.65)]">
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[1.9rem] bg-[#faf9f6] text-[#292a2d]">
          {/* Status bar */}
          <div className="flex h-9 items-center justify-between px-5 pt-1 text-[9px] font-semibold">
            <span>9:41</span>

            {/* Camera / speaker island */}
            <div className="absolute left-1/2 top-[7px] h-[13px] w-[52px] -translate-x-1/2 rounded-full bg-[#17181b]" />

            <div className="flex items-center gap-1.5">
              {/* Signal */}
              <div className="flex h-3 items-end gap-[2px]">
                {[4, 6, 8, 10].map((height, i) => (
                  <span
                    key={i}
                    style={{ height: `${height}px` }}
                    className="w-[2px] rounded-sm bg-[#292a2d]"
                  />
                ))}
              </div>

              <span className="text-[8px]">Wi-Fi</span>

              {/* Battery */}
              <div className="relative h-[8px] w-[14px] rounded-[2px] border border-[#292a2d] p-[1px]">
                <div className="h-full w-3/4 rounded-[1px] bg-[#292a2d]" />
              </div>
            </div>
          </div>

          {/* App header */}
          <div className="flex items-center justify-between px-3 pb-3 pt-1">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-[17px] w-[17px]"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  {/* Note document */}
                  <path
                    d="M7 3.5h7l4 4V16"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 3.5v4h4"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 3.5a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h6"
                    strokeLinejoin="round"
                  />

                  {/* Note lines */}
                  <path
                    d="M9 11h5M9 14h4"
                    strokeLinecap="round"
                  />

                  {/* Secure padlock */}
                  <rect
                    x="13"
                    y="14"
                    width="8"
                    height="7"
                    rx="1.8"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15 14v-1.5a2 2 0 0 1 4 0V14"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="17"
                    cy="17"
                    r="0.8"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M17 17.8v1"
                    stroke="#FFFFFF"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>

                {/*<svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-[17px] w-[17px]"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"
                    strokeLinejoin="round"
                  />
                  <path d="M9 12h6M9 15h6" strokeLinecap="round" />
                </svg>*/}
              </div>

              <span className="text-[14px] font-medium tracking-tight">
                Secured Notes
              </span>
            </div>

            {/*<div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e8e6e1] text-[10px] font-semibold text-[#66645f]">
              J
            </div>*/}
          </div>

          {/* Search bar */}
          <div className="mx-3 mb-3 flex h-9 items-center gap-2 rounded-xl bg-[#efeee9] px-3 shadow-sm">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 shrink-0 text-[#65655f]"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="10.8" cy="10.8" r="6.3" />
              <path d="m15.5 15.5 4 4" strokeLinecap="round" />
            </svg>

            <span className="text-[10px] text-[#77766f]">
              Search your notes
            </span>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="ml-auto h-4 w-4 text-[#65655f]"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M4 7h16M7 12h10M10 17h4" strokeLinecap="round" />
            </svg>
          </div>

          {/* Notes heading */}
          <div className="px-4 pb-2 text-[9px] font-medium tracking-wide text-[#85837c]">
            NOTES
          </div>

          {/* Two-column masonry-style notes grid */}
          <div className="grid grid-cols-2 items-start gap-2 px-2.5 pb-12">
            {[0, 1].map((column) => (
              <div key={column} className="flex min-w-0 flex-col gap-2">
                {notes
                  .filter((_, index) => index % 2 === column)
                  .map((note) => (
                    <div
                      key={note.title}
                      className={`overflow-hidden rounded-[9px] border border-black/[0.06] ${note.color} p-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.06)]`}
                    >
                      <h4 className="text-[9px] font-semibold leading-[1.4] text-[#30302e]">
                        {note.title}
                      </h4>

                      <div className="mt-2 space-y-1.5">
                        {note.body.map((line, index) => (
                          <div
                            key={line}
                            className="flex items-start gap-1"
                          >
                            {note.type === "checklist" ? (
                              <span
                                className={`mt-[2px] flex h-[7px] w-[7px] shrink-0 items-center justify-center rounded-[2px] border ${
                                  index === 0
                                    ? "border-[#77776d] bg-[#77776d]"
                                    : "border-[#a5a398]"
                                }`}
                              >
                                {index === 0 && (
                                  <svg
                                    viewBox="0 0 12 12"
                                    className="h-[6px] w-[6px] text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  >
                                    <path d="m2 6 2.5 2.5L10 3" />
                                  </svg>
                                )}
                              </span>
                            ) : (
                              <span className="mt-[4px] h-[3px] w-[3px] shrink-0 rounded-full bg-[#8c8a80]" />
                            )}

                            <span
                              className={`text-[7px] leading-[1.5] ${
                                note.type === "checklist" && index === 0
                                  ? "text-[#8c8a80] line-through"
                                  : "text-[#57564f]"
                              }`}
                            >
                              {line}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 flex items-center justify-end">
                        <span className="text-[7px] text-black/30">
                          {note.type === "quote" ? "Just now" : " "}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Floating add-note button */}
          <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-3xl bg-gray-400 text-[#292a2d] shadow-[0_3px_8px_rgba(0,0,0,0.18)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>

          {/* Bottom gesture indicator */}
          <div className="absolute bottom-[4px] left-1/2 h-[3px] w-14 -translate-x-1/2 rounded-full bg-[#292a2d]/70" />
        </div>
      </div>

      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute -inset-5 -z-10 rounded-full bg-emerald-400/[0.07] blur-2xl" />
    </div>
  );
}

function MoodMusicAppPreview() {
  const moods = [
    { label: "Happy", emoji: "☀️", color: "bg-[#FFE6A7]" },
    { label: "Dreamy", emoji: "☁️", color: "bg-[#E6DDFB]" },
    { label: "Chill", emoji: "🌿", color: "bg-[#DCEFE3]" },
    { label: "Heartbroken", emoji: "💔", color: "bg-[#F8DDE3]" },
    { label: "Energetic", emoji: "⚡", color: "bg-[#FFDCC7]" },
    { label: "Nostalgic", emoji: "🌙", color: "bg-[#DCE7FA]" },
    { label: "Romantic", emoji: "💗", color: "bg-[#F8DCEF]" },
    { label: "Melancholy", emoji: "🌧️", color: "bg-[#DFE5F0]" },
    { label: "Unstoppable", emoji: "🔥", color: "bg-[#F9E1BD]" },
  ];

  const navItems = [
    {
      label: "Home",
      icon: <><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z" strokeLinejoin="round" /></>,
    },
    {
      label: "Music",
      icon: <><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></>,
    },
    {
      label: "Playlists",
      icon: <><path d="M4 6h16M4 11h16M4 16h10" /><path d="m17 15 4 3-4 3Z" strokeLinejoin="round" /></>,
    },
    {
      label: "Profile",
      icon: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    },
    {
      label: "Settings",
      icon: <><circle cx="12" cy="12" r="3" /><path d="M19 13.5a7 7 0 0 0 0-3l2-1.5-2-3.5-2.4 1a8 8 0 0 0-2.6-1L13.5 3h-3L10 5.5a8 8 0 0 0-2.6 1L5 5.5 3 9l2 1.5a7 7 0 0 0 0 3L3 15l2 3.5 2.4-1a8 8 0 0 0 2.6 1l.5 2.5h3l.5-2.5a8 8 0 0 0 2.6-1l2.4 1 2-3.5Z" strokeLinejoin="round" /></>,
    },
  ];

  return (
    <div className="relative z-10 w-full max-w-[230px] sm:max-w-[250px]">
      {/* Smartphone frame */}
      <div className="relative rounded-[2.4rem] border-[5px] border-[#303238] bg-[#111216] p-[5px] shadow-[0_24px_70px_rgba(0,0,0,0.65)]">
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[1.9rem] bg-white text-[#292A2D]">

          {/* Status bar */}
          <div className="relative flex h-9 items-center justify-between px-5 pt-1 text-[9px] font-semibold">
            <span>9:41</span>
            <div className="absolute left-1/2 top-[7px] h-[13px] w-[52px] -translate-x-1/2 rounded-full bg-[#17181B]" />
            <div className="flex items-center gap-1.5">
              <div className="flex h-3 items-end gap-[2px]">
                {[4, 6, 8, 10].map((height, i) => (
                  <span key={i} style={{ height: `${height}px` }} className="w-[2px] rounded-sm bg-[#292A2D]" />
                ))}
              </div>
              <span className="text-[8px]">Wi-Fi</span>
              <div className="relative h-[8px] w-[14px] rounded-[2px] border border-[#292A2D] p-[1px]">
                <div className="h-full w-3/4 rounded-[1px] bg-[#292A2D]" />
              </div>
            </div>
          </div>

          {/* App branding */}
          <div className="flex items-center justify-center gap-1.5 pb-1 pt-1">
            <span className="text-[14px] text-[#9A83D5]">♫</span>
            <span className="text-[11px] font-bold tracking-tight">Mood Music</span>
          </div>

          {/* Greeting */}
          <div className="px-3 pb-5 pt-5 text-center">
            <h2 className="text-[25px] font-bold leading-tight tracking-[-1px] text-[#292A2D]">
              Hello!
            </h2>
            <p className="mt-1 text-[12px] font-medium tracking-[-0.2px] text-[#777780]">
              How are you feeling?
            </p>
            <div className="mx-auto mt-3 h-[3px] w-8 rounded-full bg-[#D8C9FA]" />
          </div>

          {/* Mood section heading */}
          <div className="flex items-center justify-between px-3 pb-2">
            <span className="text-[9px] font-bold tracking-[0.8px] text-[#777780]">
              PICK YOUR VIBE
            </span>
            <span className="text-[8px] text-[#A3A0AA]">9 moods</span>
          </div>

          {/* Three columns, three rows */}
          <div className="grid grid-cols-3 gap-x-1.5 gap-y-2 px-2.5">
            {moods.map((mood) => (
              <div
                key={mood.label}
                className={`flex min-w-0 flex-col items-center justify-center gap-1 rounded-full border border-black/[0.04] ${mood.color} px-0.5 py-2.5`}
              >
                <span className="text-[14px] leading-none">{mood.emoji}</span>
                <span className="text-center text-[7px] font-semibold leading-tight text-[#45434C]">
                  {mood.label}
                </span>
              </div>
            ))}
          </div>

          {/* Mood recommendation preview */}
          <div className="mx-3 mt-4 flex items-center gap-2 rounded-xl bg-[#F8F6FC] px-2.5 py-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[14px] shadow-sm">
              🌿
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[9px] font-bold text-[#393641]">
                Your mood, your music.
              </p>
              <p className="mt-0.5 text-[7px] text-[#8B8796]">
                Find the perfect soundtrack.
              </p>
            </div>
            <span className="text-[16px] text-[#9C88D8]">→</span>
          </div>

          {/* Artist / Track toggle preview */}
          <div className="px-3 pb-4 pt-4">
            <p className="mb-2 text-[8px] font-bold tracking-[0.6px] text-[#777780]">
              OR FIND YOUR SOUND
            </p>
            <div className="flex h-9 items-center rounded-xl bg-[#F3F2F6] p-1">
              <div className="flex h-full flex-1 items-center justify-center gap-1 rounded-[9px] bg-white text-[9px] font-semibold text-[#62518C] shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" stroke="currentColor" strokeWidth="1.7">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21a8 8 0 0 1 16 0" />
                </svg>
                Artist
              </div>
              <div className="flex h-full flex-1 items-center justify-center gap-1 text-[9px] font-semibold text-[#92909A]">
                <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" stroke="currentColor" strokeWidth="1.7">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
                Track
              </div>
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="absolute inset-x-0 bottom-[7px] border-t border-[#F0EFF3] bg-white px-1 pt-2.5">
            <div className="flex items-center justify-around">
              {navItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex min-w-0 flex-col items-center gap-1 ${
                    index === 0 ? "text-[#9A83D5]" : "text-[#AAA8B1]"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[16px] w-[16px]"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {item.icon}
                  </svg>
                  <span className="text-[6px] font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom gesture indicator */}
          <div className="absolute bottom-[2px] left-1/2 h-[3px] w-14 -translate-x-1/2 rounded-full bg-[#292A2D]/70" />
        </div>
      </div>

      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute -inset-5 -z-10 rounded-full bg-purple-400/[0.09] blur-2xl" />
    </div>
  );
}

function StatTrackerAppPreview() {
  const tournaments = [
    {
      name: "USA Dodgeball Nationals",
      date: "NOV 14–16, 2026",
      location: "Orlando, FL",
      type: "NATIONAL",
      color: "bg-red-600",
    },
    {
      name: "Midwest Regional Open",
      date: "NOV 21, 2026",
      location: "Minneapolis, MN",
      type: "REGIONAL",
      color: "bg-blue-700",
    },
    // {
    //   name: "Winter Dodgeball Classic",
    //   date: "DEC 05, 2026",
    //   location: "Chicago, IL",
    //   type: "OPEN",
    //   color: "bg-slate-800",
    // },
    // {
    //   name: "National Youth Championship",
    //   date: "DEC 12, 2026",
    //   location: "Dallas, TX",
    //   type: "YOUTH",
    //   color: "bg-indigo-700",
    // },
  ];

  return (
    <div className="relative z-10 mx-auto w-full max-w-[280px] sm:max-w-[300px]">
      {/* Smartphone frame */}
      <div className="relative rounded-[2.5rem] border-[5px] border-[#303238] bg-[#111216] p-[5px] shadow-[0_24px_70px_rgba(0,0,0,0.55)]">
        {/* Screen */}
        <div className="relative flex h-[570px] flex-col overflow-hidden rounded-[1.95rem] bg-[#f5f6f8] text-slate-900">

          {/* Status bar */}
          <div className="relative flex h-9 shrink-0 items-center justify-between px-5 pt-1 text-[9px] font-bold">
            <span>9:41</span>

            <div className="absolute left-1/2 top-[7px] h-[13px] w-[52px] -translate-x-1/2 rounded-full bg-[#17181b]" />

            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 20 14" className="h-3 w-4" fill="currentColor">
                <path d="M1 5Q10 -3 19 5L10 13Z" />
              </svg>
              <div className="h-[8px] w-[14px] rounded-[2px] border border-current p-[1px]">
                <div className="h-full w-3/4 rounded-[1px] bg-current" />
              </div>
            </div>
          </div>

          {/* Top bar */}
          <header className="relative flex h-[58px] shrink-0 items-center justify-between border-b border-slate-200 bg-white px-3">
            {/* USA Dodgeball logo */}
            <div className="flex items-center gap-1.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#142b52] text-white shadow-sm">
                <svg viewBox="0 0 40 40" className="h-8 w-8">
                  <circle cx="20" cy="20" r="18" fill="#fff" />
                  <circle cx="20" cy="20" r="16" fill="#142b52" />
                  <path d="M5 14H35L32 19H8Z" fill="#e52b38" />
                  <path d="M5 23H35L32 28H8Z" fill="#e52b38" />
                  <circle cx="20" cy="20" r="5" fill="white" />
                  <path d="M16 20h8M20 16v8" stroke="#142b52" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="leading-none">
                <div className="text-[9px] font-black tracking-tight text-[#142b52]">
                  USA
                </div>
                <div className="mt-1 text-[8px] font-extrabold tracking-tight text-red-600">
                  DODGEBALL
                </div>
              </div>
            </div>

            {/* Center title */}
            <h1 className="absolute left-1/2 -translate-x-1/2 text-[13px] font-extrabold tracking-tight">
              Home
            </h1>

            {/* Profile icon */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-600">
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 20c0-4 2.8-6 7-6s7 2 7 6" strokeLinecap="round" />
              </svg>
            </div>
          </header>

          {/* Main content */}
          <main className="min-h-0 flex-1 overflow-y-auto px-3 pb-4 pt-4">
            {/* Page introduction */}
            <div className="mb-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-red-600">
                Play. Compete. Connect.
              </p>
              <h2 className="mt-1 text-[20px] font-black leading-tight tracking-tight text-[#142b52]">
                Tournament Hub
              </h2>
              <p className="mt-1 text-[10px] text-slate-500">
                Find your next competition.
              </p>
            </div>

            {/* Static search bar */}
            <div className="mb-4 flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 shadow-sm">
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="10.8" cy="10.8" r="6.3" />
                <path d="m15.5 15.5 4 4" strokeLinecap="round" />
              </svg>
              <span className="text-[9px] text-slate-400">
                Search past tournaments...
              </span>
            </div>

            {/* Upcoming tournaments heading */}
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-[11px] font-extrabold text-[#142b52]">
                Upcoming Tournaments
              </h3>
              <span className="rounded-full bg-red-50 px-2 py-1 text-[8px] font-bold text-red-600">
                {tournaments.length} EVENTS
              </span>
            </div>

            {/* Tournament cards */}
            <div className="space-y-2.5">
              {tournaments.map((tournament, index) => (
                <article
                  key={tournament.name}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_2px_5px_rgba(15,23,42,0.04)]"
                >
                  <div className={`h-1 ${tournament.color}`} />

                  <div className="flex gap-2.5 p-2.5">
                    {/* Event emblem */}
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${tournament.color} text-white`}>
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M4 9h16M4 15h16M12 3c4 4 4 14 0 18M12 3c-4 4-4 14 0 18" />
                      </svg>
                    </div>

                    {/* Event details */}
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center justify-between gap-1">
                        <span className="text-[7px] font-extrabold tracking-wider text-red-600">
                          {tournament.type}
                        </span>
                        <span className="text-[7px] font-semibold text-slate-400">
                          EVENT {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h4 className="text-[10px] font-extrabold leading-snug text-[#142b52]">
                        {tournament.name}
                      </h4>

                      <div className="mt-1.5 flex items-center gap-1 text-[8px] text-slate-500">
                        <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="5" width="18" height="16" rx="2" />
                          <path d="M16 3v4M8 3v4M3 10h18" />
                        </svg>
                        {tournament.date}
                      </div>

                      <div className="mt-1 flex items-center gap-1 text-[8px] text-slate-500">
                        <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                        {tournament.location}
                      </div>
                    </div>

                    {/* Decorative arrow */}
                    <div className="flex items-center">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Static archive link */}
            <div className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white py-2.5 text-[9px] font-bold text-[#142b52]">
              Search tournament archive
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </main>

          {/* Static bottom navigation */}
          <nav className="z-10 flex h-[57px] shrink-0 items-center justify-around border-t border-slate-200 bg-white px-2">
            {/* Back */}
            <div className="flex w-1/3 flex-col items-center gap-1 text-slate-400">
              <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6M9 12h11" />
              </svg>
              <span className="text-[8px] font-semibold">Back</span>
            </div>

            {/* Home */}
            <div className="flex w-1/3 flex-col items-center gap-1 text-red-600">
              <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1Z" />
              </svg>
              <span className="text-[8px] font-bold">Home</span>
            </div>

            {/* Menu */}
            <div className="flex w-1/3 flex-col items-center gap-1 text-slate-400">
              <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="text-[8px] font-semibold">Menu</span>
            </div>
          </nav>

          {/* Bottom gesture indicator */}
          <div className="pointer-events-none absolute bottom-[4px] left-1/2 z-30 h-[3px] w-14 -translate-x-1/2 rounded-full bg-slate-900/70" />
        </div>
      </div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-5 -z-10 rounded-full bg-blue-500/[0.07] blur-2xl" />
    </div>
  );
}




function RealtimePreview() {
  return (
    <div className="relative z-10 flex w-full max-w-sm overflow-hidden rounded-lg border border-white/10 bg-[#101216] shadow-2xl">
      <div className="flex w-12 shrink-0 flex-col items-center gap-5 border-r border-white/[0.06] py-5">
        {[0, 1, 2, 3].map((item) => (
          <span
            key={item}
            className={`h-3 w-3 rounded-sm ${
              item === 0 ? "bg-emerald-400/80" : "bg-zinc-700"
            }`}
          />
        ))}
      </div>

      <div className="min-w-0 flex-1 space-y-4 p-5">
        <div className="h-2 w-3/4 rounded bg-zinc-600/70" />
        <div className="h-2 w-1/2 rounded bg-zinc-700/70" />
        <div className="h-2 w-2/3 rounded bg-zinc-700/70" />

        <div className="space-y-3 rounded-md border border-white/[0.06] bg-black/20 p-4">
          <div className="h-2 w-full rounded bg-emerald-400/40" />
          <div className="h-2 w-4/5 rounded bg-zinc-700" />
          <div className="h-2 w-3/5 rounded bg-zinc-700" />
        </div>

        <div className="flex items-center gap-2 text-[10px] text-zinc-400">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-400/20 text-violet-300">
            J
          </span>
          Jordan is editing
          <span className="ml-auto h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
        </div>
      </div>
    </div>
  );
}

function AnalyticsPreview() {
  const heights = [32, 48, 42, 64, 56, 78, 69, 92];

  return (
    <div className="relative z-10 w-full max-w-sm rounded-lg border border-white/10 bg-[#101216] p-5 shadow-2xl sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs text-zinc-400">
          Engineering velocity
        </span>
        <strong className="text-sm font-semibold text-emerald-400">
          +28.4%
        </strong>
      </div>

      <div className="mt-7 flex h-28 items-end gap-2 sm:h-32">
        {heights.map((height, index) => (
          <span
            key={index}
            style={{ height: `${height}%` }}
            className={`flex-1 rounded-t-sm transition-colors ${
              index === heights.length - 1
                ? "bg-emerald-400"
                : "bg-emerald-400/25 hover:bg-emerald-400/60"
            }`}
          />
        ))}
      </div>

      <div className="mt-3 flex justify-between font-mono text-[9px] tracking-wider text-zinc-600">
        <span>MON</span>
        <span>WED</span>
        <span>FRI</span>
      </div>
    </div>
  );
}

function KnowledgePreview() {
  return (
    <div className="relative z-10 w-full max-w-sm space-y-3 rounded-lg border border-white/10 bg-[#101216] p-4 shadow-2xl sm:p-5">
      <div className="flex items-center gap-3 rounded-md border border-white/10 bg-black/20 px-3 py-3 text-xs text-zinc-400">
        <span className="text-lg text-emerald-400">⌕</span>
        distributed systems
      </div>

      {[
        {
          title: "Distributed systems notes",
          subtitle: "Architecture · 14 related notes",
        },
        {
          title: "Event-driven architecture",
          subtitle: "Systems · 8 related notes",
        },
      ].map((result) => (
        <div
          key={result.title}
          className="flex items-start gap-3 rounded-md border border-white/[0.06] p-3 transition hover:border-emerald-400/20"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-emerald-400/10 font-mono text-sm text-emerald-400">
            #
          </span>

          <div className="min-w-0">
            <strong className="block text-xs font-medium text-zinc-200">
              {result.title}
            </strong>
            <small className="mt-1 block text-[10px] text-zinc-500">
              {result.subtitle}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
}




//  ****************************************   O U T D A T E D   ****************************************  //

  // import {
  //   ArrowUpRight,
  //   Code2,
  //   ExternalLink,
  //   Layers3
  // } from "lucide-react";
  // import { portfolio } from "@/data/portfolio";
  //
  // export function Projects() {
  //   return (
  //     <section className="section" id="work">
  //       <div className="container">
  //         <div className="section-heading">
  //           <div>
  //             <span className="section-number">01 / WORK</span>
  //             <h2>Things I've built.</h2>
  //           </div>
  //
  //           <p>
  //             A selection of projects where I've had to think about more than
  //             just the UI.
  //           </p>
  //
  //         </div>
  //
  //         <div className="projects">
  //           {portfolio.projects.map((project, index) => (
  //
  //             <article className="project-card" key={project.title}>
  //               <div className="project-top">
  //                 <span className="project-number">
  //                   {project.number}
  //                 </span>
  //
  //                 <span className="project-category">
  //                   {project.category}
  //                 </span>
  //
  //                 <ArrowUpRight className="project-arrow" size={20} />
  //               </div>
  //
  //               <div className="project-preview">
  //                 <div className={`mock-interface interface-${index + 1}`}>
  //                   {index === 0 && <RealtimePreview />}
  //                   {index === 1 && <AnalyticsPreview />}
  //                   {index === 2 && <KnowledgePreview />}
  //                 </div>
  //               </div>
  //
  //               <div className="project-content">
  //                 <h3>{project.title}</h3>
  //
  //                 <p className="project-description">
  //                   {project.description}
  //                 </p>
  //
  //                 <p className="project-long-description">
  //                   {project.longDescription}
  //                 </p>
  //
  //                 <div className="tag-list">
  //                   {project.technologies.map((technology) => (
  //                     <span className="tag" key={technology}>
  //                       {technology}
  //                     </span>
  //                   ))}
  //                 </div>
  //
  //                 <div className="project-metrics">
  //                   {project.metrics.map(([label, value]) => (
  //                     <div key={label}>
  //                       <strong>{value}</strong>
  //                       <span>{label}</span>
  //                     </div>
  //                   ))}
  //                 </div>
  //
  //                 <div className="project-links">
  //                   <a
  //                     href={project.demo}
  //                     target="_blank"
  //                     rel="noreferrer"
  //                     className="text-link"
  //                   >
  //                     <ExternalLink size={15} />
  //                     Live demo
  //                   </a>
  //
  //                   <a
  //                     href={project.github}
  //                     target="_blank"
  //                     rel="noreferrer"
  //                     className="text-link"
  //                   >
  //                     <Code2 size={15} />
  //                     Source
  //                   </a>
  //
  //                   <a href="#architecture" className="text-link">
  //                     <Layers3 size={15} />
  //                     Architecture
  //                   </a>
  //                 </div>
  //               </div>
  //             </article>
  //           ))}
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }
  //
  // function RealtimePreview() {
  //   return (
  //     <div className="editor-preview">
  //       <div className="mini-sidebar">
  //         <span />
  //         <span />
  //         <span />
  //         <span />
  //       </div>
  //
  //       <div className="editor-content">
  //         <div className="fake-line wide" />
  //         <div className="fake-line medium" />
  //         <div className="fake-line short" />
  //
  //         <div className="fake-block">
  //           <div />
  //           <div />
  //           <div />
  //         </div>
  //
  //         <div className="collaborator">
  //           <span className="avatar">J</span>
  //           Jordan is editing
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  //
  // function AnalyticsPreview() {
  //   return (
  //     <div className="analytics-preview">
  //       <div className="analytics-top">
  //         <span>Engineering velocity</span>
  //         <strong>+28.4%</strong>
  //       </div>
  //
  //       <div className="chart">
  //         {[32, 48, 42, 64, 56, 78, 69, 92].map(
  //           (height, index) => (
  //             <span
  //               key={index}
  //               style={{ height: `${height}%` }}
  //             />
  //           )
  //         )}
  //       </div>
  //
  //       <div className="chart-labels">
  //         <span>MON</span>
  //         <span>WED</span>
  //         <span>FRI</span>
  //       </div>
  //     </div>
  //   );
  // }
  //
  // function KnowledgePreview() {
  //   return (
  //     <div className="knowledge-preview">
  //       <div className="knowledge-search">
  //         <span>⌕</span>
  //         distributed systems
  //       </div>
  //
  //       <div className="knowledge-result">
  //         <span className="result-icon">#</span>
  //
  //         <div>
  //           <strong>Distributed systems notes</strong>
  //           <small>
  //             Architecture · 14 related notes
  //           </small>
  //         </div>
  //       </div>
  //
  //       <div className="knowledge-result">
  //         <span className="result-icon">#</span>
  //
  //         <div>
  //           <strong>Event-driven architecture</strong>
  //           <small>
  //             Systems · 8 related notes
  //           </small>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
//
