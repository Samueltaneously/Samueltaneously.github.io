"use client";

import { useEffect, useState } from "react"; import { CommandPalette } from "@/components/CommandPalette"; import { DevDock } from "@/components/DevDock"; import { Navigation } from "@/components/Navigation";

export function CommandPaletteWrapper() { const [commandOpen, setCommandOpen] = useState(false);

useEffect(() => { const handler = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setCommandOpen((open) => !open); } };

window.addEventListener("keydown", handler);
return () => window.removeEventListener("keydown", handler);


}, []);

return ( <> <Navigation onCommand={() => setCommandOpen(true)} />

  <CommandPalette
    open={commandOpen}
    onClose={() => setCommandOpen(false)}
  />

  <DevDock onCommand={() => setCommandOpen(true)} />
</>


); }
