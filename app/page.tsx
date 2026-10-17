import { Hero } from "@/components/Hero";
import { Terminal } from "@/components/Terminal";
import { PortfolioPage } from "@/components/PortfolioPage";
import { Projects } from "@/components/Projects";
import { Engineering } from "@/components/Engineering";
import { Experience } from "@/components/Experience";
import { JournalSection } from "@/components/JournalSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CommandPaletteWrapper } from "@/components/CommandPaletteWrapper";

export default function Home() { return ( <> <CommandPaletteWrapper />

  <main>
    <Hero />
    <Terminal />
    <PortfolioPage/>
    <Experience />
    <JournalSection />
    <Contact />
  </main>

  <Footer />
</>


); }





// ********************* Pre-Server Componenet Journal Code Below ********************* //

  // "use client";
  //
  //     import { useEffect, useState } from "react";
  //     import { CommandPalette } from "@/components/CommandPalette";
  //     import { Navigation } from "@/components/Navigation";
  //     import { Hero } from "@/components/Hero";
  //     import { Terminal } from "@/components/Terminal";
  //     import { Projects } from "@/components/Projects";
  //     import { Engineering } from "@/components/Engineering";
  //     import { Experience } from "@/components/Experience";
  //     // import { Journal } from "@/components/Journal";
  //     import { JournalSection } from "@/components/JournalSection";
  // import { Contact } from "@/components/Contact";
  //     import { Footer } from "@/components/Footer";
  //     import { DevDock } from "@/components/DevDock";
  //
  //     export default function Home() {
  //       const [commandOpen, setCommandOpen] = useState(false);
  //
  //       useEffect(() => {
  //         const handler = (event: KeyboardEvent) => {
  //           if ((event.metaKey || event.ctrlKey) && event.key === "k") {
  //             event.preventDefault();
  //             setCommandOpen((open) => !open);
  //           }
  //         };
  //
  //         window.addEventListener("keydown", handler);
  //
  //         return () => window.removeEventListener("keydown", handler);
  //       }, []);
  //
  //       return (
  //         <>
  //           <Navigation onCommand={() => setCommandOpen(true)} />
  //
  //           <main>
  //             <Hero />
  //
  //             {/*<section className="section">
  //               <div className="container">
  //                 <Terminal />
  //               </div>
  //             </section>*/}
  //
  //             <Terminal />
  //
  //             <Projects />
  //
  //             <Engineering />
  //
  //             <Experience />
  //
  //             <JournalSection />
  //
  //             <Contact />
  //           </main>
  //
  //           {/*<footer className="footer">
  //             <div className="container footer-inner">
  //               <span>© 2026 Samuel Nelson</span>
  //
  //               <span className="footer-status">
  //                 <span className="status-dot" />
  //                 Designing Software For You
  //               </span>
  //             </div>
  //           </footer>*/}
  //
  //           <Footer />
  //
  //           <CommandPalette
  //             open={commandOpen}
  //             onClose={() => setCommandOpen(false)}
  //           />
  //
  //           <DevDock
  //             onCommand={() => setCommandOpen(true)}
  //           />
  //
  //         </>
  //       );
  //     }
//
