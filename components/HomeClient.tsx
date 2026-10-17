"use client";

    import { useEffect, useState } from "react";
    import { CommandPalette } from "@/components/CommandPalette";
    import { Navigation } from "@/components/Navigation";
    import { Hero } from "@/components/Hero";
    import { Terminal } from "@/components/Terminal";
    import { Projects } from "@/components/Projects";
    import { Engineering } from "@/components/Engineering";
    import { Experience } from "@/components/Experience";
    // import { Journal } from "@/components/Journal";
    import { JournalSection } from "@/components/JournalSection";
import { Contact } from "@/components/Contact";
    import { Footer } from "@/components/Footer";
    import { DevDock } from "@/components/DevDock";

    export default function HomeClient() {
      const [commandOpen, setCommandOpen] = useState(false);

      useEffect(() => {
        const handler = (event: KeyboardEvent) => {
          if ((event.metaKey || event.ctrlKey) && event.key === "k") {
            event.preventDefault();
            setCommandOpen((open) => !open);
          }
        };

        window.addEventListener("keydown", handler);

        return () => window.removeEventListener("keydown", handler);
      }, []);

      return (
         <>
           <Navigation onCommand={() => setCommandOpen(true)} />

           <main>
             <Hero />
             <Terminal />
             <Projects />
             <Engineering />
             <Experience />
             <Contact />
           </main>

           <Footer />

           <CommandPalette
             open={commandOpen}
             onClose={() => setCommandOpen(false)}
           />

           <DevDock onCommand={() => setCommandOpen(true)} />
         </>
       );
     }
