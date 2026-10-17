
"use client";

import {
  ArrowUpRight,
  Clock3,
  Search,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { JournalEntry } from "@/types/journal";

type Props = {
  entries: JournalEntry[];
  onClose: () => void;
  onSelectEntry: (entry: JournalEntry) => void;
  isJournalOpen: boolean;
};



export function MoreNotesModal({
  entries,
  onClose,
  onSelectEntry,
  isJournalOpen,
}: Props) {

  const [query, setQuery] = useState("");
  const [activeDate, setActiveDate] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLElement>>(new Map());


  const filteredEntries = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return entries.filter((entry) => {
      if (!normalizedQuery) return true;

      const searchableText = [
        entry.title,
        entry.date,
        entry.excerpt,
        entry.content,
        ...entry.tags,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [entries, query]);

  // Keep the timeline synchronized with the scrollable notes.
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = filteredEntries
      .map((entry) => cardRefs.current.get(entry.slug))
      .filter((card): card is HTMLElement => Boolean(card));

    if (!cards.length) {
      setActiveDate(null);
      return;
    }

    const observer = new IntersectionObserver(
      (observations) => {
        const visible = observations
          .filter((item) => item.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible.length) {
          setActiveDate(
            (visible[0].target as HTMLElement).dataset.date ?? null
          );
        }
      },
      {
        root: container,
        rootMargin: "-8% 0px -75% 0px",
        threshold: 0,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredEntries]);

  const timelineDates = useMemo(() => {
    const seen = new Set<string>();

    return filteredEntries.filter((entry) => {
      if (seen.has(entry.date)) return false;
      seen.add(entry.date);
      return true;
    });
  }, [filteredEntries]);

  function jumpToEntry(slug: string) {
    const card = cardRefs.current.get(slug);
    if (!card || !scrollRef.current) return;

    scrollRef.current.scrollTo({
      top: card.offsetTop - scrollRef.current.offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-2 backdrop-blur-md sm:p-4 lg:p-6"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="more-notes-title"
        className="relative flex h-[96dvh] w-full max-w-[1500px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f12] shadow-[0_25px_100px_rgba(0,0,0,0.6)] sm:h-[92dvh]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <header className="shrink-0 border-b border-white/[0.08] px-5 py-6 sm:px-8 sm:py-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-400">
                04 / Journal archive
              </span>

              <h2
                id="more-notes-title"
                className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
              >
                All the little things.
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                {filteredEntries.length}{" "}
                {filteredEntries.length === 1 ? "note" : "notes"}
                {query.trim() ? " found" : " in the archive"}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close journal archive"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-400 transition-colors hover:border-emerald-400/40 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <X size={18} />
            </button>
          </div>

          {/* Search */}
          <div className="relative mt-6">
            <Search
              size={17}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search notes, tags, ideas, or dates..."
              aria-label="Search journal notes"
              className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-11 pr-11 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-emerald-400/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-emerald-400/20"
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-zinc-500 hover:text-white"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </header>

        {/* Archive body */}
        <div className="flex min-h-0 flex-1">
          {/* Timeline sidebar */}
          <aside className="hidden w-48 shrink-0 overflow-y-auto border-r border-white/[0.08] px-5 py-7 md:block lg:w-60 lg:px-7">
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
              On this timeline
            </p>

            <div className="relative">
              <div className="absolute bottom-2 left-[5px] top-2 w-px bg-white/10" />

              <div className="space-y-1">
                {timelineDates.map((entry) => {
                  const isActive = activeDate === entry.date;

                  return (
                    <button
                      type="button"
                      key={entry.slug}
                      onClick={() => jumpToEntry(entry.slug)}
                      className="group relative flex w-full items-start gap-3 rounded-lg px-2 py-3 text-left transition-colors hover:bg-white/[0.03]"
                    >
                      <span
                        className={[
                          "relative z-10 mt-1.5 h-[11px] w-[11px] shrink-0 rounded-full border transition-colors",
                          isActive
                            ? "border-emerald-400 bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.3)]"
                            : "border-zinc-700 bg-[#0d0f12] group-hover:border-emerald-400/60",
                        ].join(" ")}
                      />

                      <span
                        className={[
                          "text-xs leading-5 transition-colors",
                          isActive
                            ? "font-medium text-emerald-400"
                            : "text-zinc-500 group-hover:text-zinc-300",
                        ].join(" ")}
                      >
                        {entry.date}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Scrollable note list */}
          <div
            ref={scrollRef}
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-6 sm:py-7 lg:px-9"
          >
            {filteredEntries.length === 0 ? (
              <div className="flex min-h-64 flex-col items-center justify-center text-center">
                <Search size={24} className="text-zinc-600" />

                <h3 className="mt-4 text-base font-medium text-white">
                  No notes found
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">
                  Try another title, keyword, tag, or date.
                </p>

                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="mt-5 text-sm text-emerald-400 hover:text-emerald-300"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {filteredEntries.map((entry) => (

                  <button
                    type="button"
                    key={entry.slug}
                    onClick={() => onSelectEntry(entry)}
                    data-date={entry.date}
                    ref={(node) => {
                      if (node) {
                        cardRefs.current.set(entry.slug, node);
                      } else {
                        cardRefs.current.delete(entry.slug);
                      }
                    }}
                    aria-label={`Read note: ${entry.title}`}
                    className="group flex min-h-[250px] w-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  >
                    <time className="text-xs font-medium tracking-wide text-zinc-500">
                      {entry.date}
                    </time>

                    <h3 className="mt-4 text-lg font-semibold leading-snug text-white transition-colors group-hover:text-emerald-400">
                      {entry.title}
                    </h3>

                    <p className="mt-3 line-clamp-4 text-sm leading-6 text-zinc-400">
                      {entry.excerpt}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                      {entry.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-1 text-[10px] text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-white/[0.08] pt-3">
                      <span className="text-xs font-medium text-zinc-500 transition-colors group-hover:text-emerald-400">
                        Read note
                      </span>

                      <ArrowUpRight
                        size={15}
                        className="text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-400"
                      />
                    </div>
                  </button>

                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="flex shrink-0 items-center justify-between border-t border-white/[0.08] bg-white/[0.015] px-5 py-4 sm:px-8">
          <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-600">
            Journal archive
          </span>

          <span className="flex items-center gap-1.5 text-xs text-zinc-600">
            <Clock3 size={13} />
            Browse at your own pace
          </span>
        </footer>
      </section>
    </div>
  );
}
