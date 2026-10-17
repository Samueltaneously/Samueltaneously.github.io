
import { getJournals } from "@/lib/journals";
import { Journal } from "./Journal";

export function JournalSection() {
  const entries = getJournals();

  return <Journal entries={entries} />;
}
