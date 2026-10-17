import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { JournalEntry } from "@/types/journal";

const journalsDirectory = path.join(
  process.cwd(),
  "data",
  "journals"
);

export function getJournals(): JournalEntry[] {
  if (!fs.existsSync(journalsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(journalsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const source = fs.readFileSync(
        path.join(journalsDirectory, file),
        "utf8"
      );

      const { data, content } = matter(source);

      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ""),
        excerpt: String(data.excerpt ?? ""),
        tags: Array.isArray(data.tags)
          ? data.tags.map(String)
          : [],
        content,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}
