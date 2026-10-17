// import { ArrowUpRight } from "lucide-react";
//     import { portfolio } from "@/data/portfolio";
//
//     export function Experience() {
//       return (
//         <section className="section" id="experience">
//           <div className="container">
//             <div className="section-heading">
//               <div>
//                 <span className="section-number">03 / EXPERIENCE</span>
//                 <h2>Where I've been.</h2>
//               </div>
//             </div>
//
//             <div className="experience-layout">
//               <div className="experience-list">
//                 {portfolio.experience.map((item) => (
//                   <article
//                     className="experience-item"
//                     key={`${item.period}-${item.role}`}
//                   >
//                     <div className="experience-period">
//                       {item.period}
//                     </div>
//
//                     <div>
//                       <h3>{item.role}</h3>
//
//                       <div className="experience-company">
//                         {item.company}
//                       </div>
//
//                       <p>{item.description}</p>
//
//                       <ul>
//                         {item.bullets.map((bullet) => (
//                           <li key={bullet}>{bullet}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//
//               <aside className="skills-panel">
//                 <span className="section-number">TOOLBOX</span>
//
//                 <SkillGroup
//                   title="Languages"
//                   skills={portfolio.skills.languages}
//                 />
//
//                 <SkillGroup
//                   title="Frontend"
//                   skills={portfolio.skills.frontend}
//                 />
//
//                 <SkillGroup
//                   title="Backend"
//                   skills={portfolio.skills.backend}
//                 />
//
//                 <SkillGroup
//                   title="Tools"
//                   skills={portfolio.skills.tools}
//                 />
//               </aside>
//             </div>
//           </div>
//         </section>
//       );
//     }
//
//     function SkillGroup({
//       title,
//       skills
//     }: {
//       title: string;
//       skills: string[];
//     }) {
//       return (
//         <div className="skill-group">
//           <h4>{title}</h4>
//
//           <div className="skill-list">
//             {skills.map((skill) => (
//               <span key={skill}>{skill}</span>
//             ))}
//           </div>
//         </div>
//       );
//     }






import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Experience() {
  return (
    <section
      className="relative bg-[#09090b] px-6 py-24 text-white sm:px-8 lg:py-32"
      id="experience"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
            03 / Experience
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Where I've been.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          {/* Experience timeline */}
          <div className="space-y-0">
            {portfolio.experience.map((item, index) => (
              <article
                className="group relative grid gap-4 border-t border-white/10 py-8 sm:grid-cols-[140px_1fr] sm:gap-8"
                key={`${item.period}-${item.role}`}
              >
                <div className="text-sm text-zinc-500">
                  {item.period}
                </div>

                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white ">
                      {/*<h3 className="text-lg font-semibold text-white transition-colors group-hover:text-emerald-400">*/}
                        {item.role}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-emerald-400/80">
                        {item.company}
                      </p>
                    </div>

                    {/*<ArrowUpRight
                      size={18}
                      className="text-zinc-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-400"
                    />*/}
                  </div>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-6 text-zinc-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Skills panel */}
          <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 lg:sticky lg:top-24">
            <div className="mb-7 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                Toolbox
              </span>

              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
            </div>

            <div className="space-y-7">
              <SkillGroup
                title="Languages"
                skills={portfolio.skills.languages}
              />

              <SkillGroup
                title="Frontend"
                skills={portfolio.skills.frontend}
              />

              <SkillGroup
                title="Backend"
                skills={portfolio.skills.backend}
              />

              <SkillGroup
                title="Tools"
                skills={portfolio.skills.tools}
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div>
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
        {title}
      </h4>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5 text-xs text-zinc-300 transition-colors hover:border-emerald-400/30 hover:text-emerald-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
