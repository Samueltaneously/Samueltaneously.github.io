

"use client";

import { ArrowLeft, Clock, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { JournalEntry } from "@/types/journal";

export function JournalModal({
  entry,
  onClose,
}: {
  entry: JournalEntry | null;
  onClose: () => void;
  }) {


  if (!entry) return null;

  const wordCount = entry.content.trim().split(/\s+/).filter(Boolean).length;
  const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md sm:p-6"
      onClick={onClose}
    >
      <article
        role="dialog"
        aria-modal="true"
        aria-labelledby="journal-modal-title"
        className="relative my-auto flex max-h-[90dvh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f12] shadow-[0_25px_100px_rgba(0,0,0,0.6)]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close journal entry"
          className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-400 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <X size={18} />
        </button>

        {/* Article header */}
        <header className="shrink-0 border-b border-white/[0.08] px-6 pb-8 pt-8 sm:px-10 sm:pb-10 sm:pt-10">
          <div className="mb-6 flex flex-wrap items-center gap-3 pr-10 text-xs text-zinc-500">
            <time dateTime={entry.date}>{entry.date}</time>

            <span className="h-1 w-1 rounded-full bg-zinc-700" />

            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {readTime}
            </span>
          </div>

          <h2
            id="journal-modal-title"
            className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
          >
            {entry.title}
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            {entry.excerpt}
          </p>

          {entry.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-emerald-400/15 bg-emerald-400/[0.06] px-2.5 py-1.5 text-xs text-emerald-300/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Markdown article content */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-8 sm:px-10 sm:py-10">
          <div
            className={[
              "journal-prose mx-auto max-w-2xl",
              "text-sm leading-8 text-zinc-400 sm:text-base",
              "[&_h1]:mb-5 [&_h1]:mt-10 [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h1]:text-white",
              "[&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-white",
              "[&_h3]:mb-3 [&_h3]:mt-9 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-white",
              "[&_h4]:mb-3 [&_h4]:mt-7 [&_h4]:font-semibold [&_h4]:text-white",
              "[&_p]:mb-5 [&_p]:leading-8",
              "[&_a]:text-emerald-400 [&_a]:underline [&_a]:decoration-emerald-400/30 [&_a]:underline-offset-4 hover:[&_a]:decoration-emerald-400",
              "[&_strong]:font-semibold [&_strong]:text-zinc-200",
              "[&_em]:text-zinc-300",
              "[&_ul]:mb-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
              "[&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6",
              "[&_li]:pl-1 [&_li::marker]:text-emerald-400",
              "[&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:border-emerald-400/50 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-zinc-300",
              "[&_hr]:my-10 [&_hr]:border-white/10",
              "[&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-white/10 [&_pre]:bg-black/40 [&_pre]:p-4",
              "[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-emerald-200",
              "[&_code]:rounded [&_code]:bg-white/[0.06] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.9em] [&_code]:text-emerald-300",
              "[&_table]:my-8 [&_table]:w-full [&_table]:border-collapse [&_table]:text-left [&_table]:text-sm",
              "[&_th]:border-b [&_th]:border-white/15 [&_th]:px-3 [&_th]:py-3 [&_th]:font-semibold [&_th]:text-white",
              "[&_td]:border-b [&_td]:border-white/[0.08] [&_td]:px-3 [&_td]:py-3",
              "[&_img]:my-8 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-xl",
              "[&_input[type=checkbox]]:mr-2 [&_input[type=checkbox]]:accent-emerald-400",
              "[&>*:first-child]:mt-0 [&>*:last-child]:mb-0",
            ].join(" ")}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ href, children, ...props }) => {
                  const isExternal =
                    href?.startsWith("https://") ||
                    href?.startsWith("http://");

                  return (
                    <a
                      href={href}
                      {...props}
                      {...(isExternal
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                    >
                      {children}
                    </a>
                  );
                },
              }}
            >
              {entry.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Article footer */}
        <footer className="flex shrink-0 flex-col gap-4 border-t border-white/[0.08] bg-white/[0.015] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <button
            type="button"
            onClick={onClose}
            className="flex w-fit items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <ArrowLeft size={14} />
            Back to journal
          </button>

          {/*esc keydown was breaking site when used in addition to the MoreNotesModal, disabled*/}
          {/*<span className="text-xs text-zinc-600">
            Press{" "}
            <kbd className="mx-1 rounded border border-white/10 bg-white/[0.04] px-1.5 py-1 font-mono text-zinc-400">
              ESC
            </kbd>{" "}
            to close
          </span>*/}

        </footer>
      </article>
    </div>
  );
}
