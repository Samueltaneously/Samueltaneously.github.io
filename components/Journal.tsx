
"use client";


import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
// import { portfolio } from "@/data/portfolio";
import type { JournalEntry } from "@/types/journal";
import { JournalModal } from "./JournalModal";
import { MoreNotesModal } from "./MoreNotesModal";



type Props = {
  entries: JournalEntry[];
};



export function Journal({ entries }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [selectedEntry, setSelectedEntry] =
    useState<JournalEntry | null>(null);

  const [isMoreNotesOpen, setIsMoreNotesOpen] = useState(false);

  function scroll(direction: "left" | "right") {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "right" ? 420 : -420,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const isAnyModalOpen = isMoreNotesOpen || selectedEntry !== null;

    if (!isAnyModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMoreNotesOpen, selectedEntry]);



  return (
    <section
      className="overflow-hidden px-6 py-24 sm:px-8 lg:py-32"
      id="journal"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
              04 / Journal
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Things I&apos;m thinking about.
            </h2>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end lg:max-w-xl">
            <p className="max-w-md text-sm leading-7 text-zinc-400">
              Short notes on engineering decisions, experiments, and things
              I&apos;ve learned while building.
            </p>

            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous journal entries"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <ArrowLeft size={16} />
              </button>

              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next journal entries"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Journal carousel */}
        <div>
          {entries.length === 0 ? (
            <p className="py-10 text-sm text-zinc-500">
              No journal entries yet. Check back soon.
            </p>
          ) : (
            <div
              ref={scrollRef}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pt-2 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {entries.map((entry) => (
                <button
                  type="button"
                  key={entry.slug}
                  onClick={() => setSelectedEntry(entry)}
                  aria-label={`Read note: ${entry.title}`}
                  className="group flex min-h-[290px] w-[85vw] max-w-[360px] shrink-0 snap-start flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:w-[340px] sm:p-7"
                >
                  <div className="text-xs font-medium tracking-wide text-zinc-500">
                    {entry.date}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold leading-snug text-white transition-colors group-hover:text-emerald-400">
                    {entry.title}
                  </h3>

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-zinc-400">
                    {entry.excerpt}
                  </p>

                  <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-1 text-[11px] text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-zinc-400 transition-colors group-hover:text-emerald-400">
                      Read note
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </button>
              ))}
            </div>)}

          <button
            type="button"
            onClick={() => setIsMoreNotesOpen(true)}
            className="group flex w-full items-center justify-between border-t border-white/[0.08] pt-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label="Open all journal notes"
          >
            <span className="text-[10px] font-medium tracking-[0.2em] text-zinc-600 transition-colors group-hover:text-emerald-400">
              MORE NOTES
              <span className="ml-2 tracking-normal">
                ({entries.length})
              </span>
            </span>

            <ArrowRight
              size={18}
              className="text-zinc-600 transition-all group-hover:translate-x-1 group-hover:text-emerald-400"
            />
          </button>
        </div>
      </div>

      <JournalModal
        entry={selectedEntry}
        onClose={() => setSelectedEntry(null)}
      />

      {isMoreNotesOpen && (
        <MoreNotesModal
          entries={entries}
          onClose={() => setIsMoreNotesOpen(false)}
          isJournalOpen={selectedEntry !== null}
          onSelectEntry={(entry) => {
            setSelectedEntry(entry);
          }}
        />
      )}


    </section>
  );
}
