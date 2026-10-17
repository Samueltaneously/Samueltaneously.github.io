export const portfolio = {

      name: "Samuel Nelson",
      firstName: "Samuel",
      role: "Software Engineer",
      location: "Minneapolis, MN",
      availability: "Open to opportunities",

      bio: `I build thoughtful software for the web, with a particular interest
    in product engineering, developer experience, and systems that feel
    simple on the surface while being carefully engineered underneath.`,

      email: "samuel.h.nelson@protonmail.com",
      github: "https://github.com/Samueltaneously",
      linkedin: "https://linkedin.com/in/samuelhnelson",

      skills: {
        languages: [
          "TypeScript",
          "JavaScript",
          "C",
          "SQL",
          "Go"
        ],
        frontend: [
          "React",
          "Next.js",
          "React Native",
          "Tailwind"
        ],
        backend: [
          "SQLite",
          "PostgreSQL",
          "Node.js",
          "MongoDB",
          "Express.js",
          "REST APIs"
        ],
        tools: [
          "Git",
          "Postman"
        ]
      },




      projects: [
        {
          number: "01",
          title: "Secured Notes Mobile App",
          category: "ENCRYPTED FULL-STACK APPLICATION",
          description:
            "A cross-platform note-taking app with client-side encryption, and encrypted cloud synchronization through a Go backend.",
          longDescription:
            "Designed and developed a cross-platform mobile note-taking application inspired by Google Keep and Protected Text, emphasizing privacy and client-side encryption. Built the React Native client with TypeScript and SQLite for local persistence, alongside a Go backend using the Chi router for REST API access and encrypted note synchronization across devices.",
          technologies: [
            "TypeScript",
            "React Native",
            "SQLite",
            "Go (Chi Router)",
            "AES-256 Client-side Encryption",
            "Zero-knowledge server",
            "Expo Crypto",
            "REST API"
          ],
          github: "",
          demo: "",
          metrics: [
            ["AES-256 ", "256-bit key"],
            ["12 bytes per encryption", "96-bit nonce"],
            ["16 random bytes", "128-bit salt"]
          ],

          Architecture: {
            codeSampleFileName: "noteEncryption.ts",
            codeSample:
`
async function encryptNote(
  content: string,
  password: string
): Promise<string> {
  const salt = Crypto.getRandomBytes(16);
  const nonce = Crypto.getRandomBytes(12);

  const key = await deriveKey(password, salt);
  const aesKey = await Crypto.AESEncryptionKey.import(key);

  const plaintext = new TextEncoder().encode(content);
  const ciphertext = await Crypto.aesEncryptAsync(
    plaintext,
    aesKey,
    { nonce, tagLength: 16 }
  );

  return serializeEncryptedPayload({
    salt,
    nonce,
    ciphertext: await ciphertext.combined("base64")
  });
}
`,
stack: {
  client: {
    description: "React Native · TypeScript · Local-first storage",
    title: "Mobile Client",
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "SQLite",
      "Tailwind CSS"
    ]
  },

  backend: {
    description: "Go · Chi Router · Encrypted synchronization",
    title: "Backend & API",
    technologies: [
      "Go",
      "Chi Router",
      "REST API",
      "Encrypted Note Synchronization"
    ]
  },

  dataSecurity: {
    description: "Local persistence · Client-side encryption",
    title: "Data & Security",
    technologies: [
      "SQLite Local Persistence",
      "AES-256-GCM",
      "Password-Based Key Derivation",
      "Random Salts & Nonces",
      "Base64 Payload Serialization"
    ]
  },

  integrations: [],

  connections: {
    clientToBackend:
      "The mobile client encrypts note contents before sending them to the Go REST API. The API exchanges encrypted payloads for synchronization across devices.",
    backendToData:
      "The backend persists or retrieves encrypted note payloads from its configured storage layer. The server does not need plaintext note contents to relay ciphertext."
  }
},
            codeSampleWhy: "I implemented client-side encryption to protect note contents before they reach the server. Each encryption operation uses a cryptographically random salt and nonce, while authenticated encryption helps protect both confidentiality and data integrity. This approach supports encrypted cloud synchronization without requiring the server to handle plaintext notes or the user's encryption key."
          }

        },

        {
          number: "02",
          title: "Mood Music",
          category: "FULL-STACK APPLICATION",
          description:
            "A React Native music app that integrates with the Spotify API to support mood-based music discovery and playlist management.",
          longDescription:
            "Developed a React Native application using TypeScript to explore music and manage playlists through Spotify API integration. Built an Express.js backend with MongoDB persistence for user playlist data, while using Redux and Redux Saga to coordinate asynchronous requests and application state.",
          technologies: [
            "React Native",
            "TypeScript",
            "MongoDB",
            "Spotify API",
            "REST API",
            "Express.js"
          ],
          github: "https://github.com/Samueltaneously/mood-music",
          demo: "",
          metrics: [
            ["Mobile state", "Redux + Redux Saga"],
            ["Music integration", "Spotify Web API"],
            ["Persistence", "MongoDB"],
            ["Backend", "Express REST API"]
          ],

          Architecture: {
            codeSampleFileName: "playlistsSaga.ts",
            codeSample:
`
function* getDBPlaylists() {
  try {
    const response: AxiosResponse = yield call(
      axios.get,
      '/api/dbplaylists'
    );

    yield put({
      type: 'SET_PLAYLISTS',
      payload: response.data
    });
  } catch (error) {
    yield put({
      type: 'SET_PLAYLISTS_ERROR',
      payload: error
    });
  }
}

function* playlistsSaga() {
  yield takeLatest('GET_DB_PLAYLISTS', getDBPlaylists);
}
`,
stack: {
  client: {
    description: "React · Redux · Responsive progressive web app",
    title: "Frontend & PWA",
    technologies: [
      "React",
      "Redux",
      "React Hooks",
      "Material UI",
      "Progressive Web App"
    ]
  },

  backend: {
    description: "Node.js · Express · Authentication and authorization",
    title: "Backend & Authentication",
    technologies: [
      "Node.js",
      "Express.js",
      "REST API",
      "Passport.js",
      "Role-Based Authorization"
    ]
  },

  dataSecurity: {
    description: "PostgreSQL · Relational data persistence",
    title: "Database & Persistence",
    technologies: [
      "PostgreSQL",
      "Relational Data Modeling",
      "Persistent Application Data"
    ]
  },

  integrations: [],

  connections: {
    clientToBackend:
      "The React PWA communicates with the Express REST API to retrieve game and user data and submit administrative actions. Authentication and authorization are enforced by the backend.",
    backendToData:
      "The backend accesses PostgreSQL to persist and retrieve application records. Server-side authorization protects sensitive administrative operations, including role changes."
  }
},
            codeSampleWhy:
              "I used Redux Saga to separate asynchronous API requests from UI components and centralize playlist data fetching. Sagas coordinate network requests and dispatch actions to update the Redux store, creating a predictable data flow while keeping components focused on rendering. This structure also makes playlist functionality easier to maintain and extend as the application grows."
          }

        },

        {
          number: "03",
          title: "Dodgeball Stat Tracker",
          category: "FULL-STACK PROGRESSIVE WEB APP",
          description:
            "A full-stack progressive web app prototype for USA Dodgeball, featuring game statistics, user authentication, and administrative tools.",
          longDescription:
            "Collaborated on a full-stack React progressive web app prototype for USA Dodgeball to support game-statistics tracking and administrative workflows. Implemented PostgreSQL persistence, Passport.js authentication, role-based authorization, and API integrations. Worked within an Agile development team, iterating on the interface and features in response to client feedback.",
          technologies: [
            "Progressive Web App",
            "React",
            "PosgresSQL",
            "Passport Authentication",
            "REST API"
          ],
          github: "https://github.com/willbuck/dodgeball-stat-tracker",
          demo: "",
          metrics: [
            ["Access control", "Role-based authorization"],
            ["Authentication", "Passport.js"],
            ["Application type", "Progressive Web App"],
            ["Database", "PostgreSQL"]
          ],

          Architecture: {
            codeSampleFileName: "ManageUsers.jsx",

            codeSample:
`
const requireRole = (...allowedRoles) =>
  (req, res, next) => {
    if (!allowedRoles.includes(req.user?.auth)) {
      return res.sendStatus(403);
    }

    next();
  };

router.patch(
  '/users/:id/role',
  requireRole(4, 5),
  updateUserRole
);
`,
// `const dispatch = useDispatch();
// const allUsers = useSelector((store) => store.manageUsersReducer);
//
// useEffect(() => {
//   dispatch({ type: "FETCH_USER_LIST" });
// }, []);
//
// const handleCaptain = (id) => {
//   dispatch({ type: "PROMOTE_USER", payload: id, auth: 3 });
//   dispatch({ type: "FETCH_USER_LIST" });
// };
//
// const handleAdmin = (id) => {
//   dispatch({ type: "PROMOTE_USER", payload: id, auth: 4 });
//   dispatch({ type: "FETCH_USER_LIST" });
// };
//
// const handleSiteAdmin = (id) => {
//   dispatch({ type: "PROMOTE_USER", payload: id, auth: 5 });
//   dispatch({ type: "FETCH_USER_LIST" });
// };`,
stack: {
  client: {
    description: "",
    title: "Frontend & PWA",
    technologies: [
      "React",
      "Progressive Web App",
      "Redux",
      "React Hooks",
      "Material UI"
    ]
  },

  backend: {
    description: "",
    title: "Backend & Authentication",
    technologies: [
      "Node.js",
      "Express.js",
      "REST API",
      "Passport.js",
      "Role-Based Authorization"
    ]
  },

  dataSecurity: {
    description: "",
    title: "Database & Persistence",
    technologies: [
      "PostgreSQL",
      "Relational Data Persistence"
    ]
  },
  integrations: [],
    connections: {
      clientToBackend: "",
      backendToData: "",
    },
},
            codeSampleWhy:
              "I designed administrative workflows around role-based access, allowing authorized users to manage permissions through a centralized user-management interface. The authorization layer restricts sensitive role changes to permitted users, while the frontend reflects those administrative actions through application state. This separation helps keep administrative operations controlled and the user-management experience maintainable."
              // "I used React hooks and Redux to retrieve user data and manage administrative role changes through centralized application state. Role-specific actions connect the user-management interface to backend operations, keeping the UI synchronized with administrative workflows. This structure makes user management easier to maintain as administrative features evolve."
          }

        }
      ],




      experience: [
        {
          period: "2023 — Present",
          role: "Software Engineer",
          company: "Independent Contractor",
          description:
            "Design and deliver end-to-end software solutions for clients, spanning customer-facing applications, backend infrastructure, and workflow automation, with an emphasis on scalable architecture, performance, and production reliability.",
          bullets: [
            "Deliver custom web solutions for clients, translating requirements into responsive, maintainable web apps",
            "Work directly with stakeholders to define requirements, prioritize features, and deliver production-ready systems",
            "Build performant frontend systems and backend APIs with a focus on reliability and maintainability"
            // "Built reusable React components used across multiple product surfaces.",
            // "Implemented API integrations and database-backed features.",
            // "Improved automated test coverage for critical workflows."
          ]
        },

        {
          period: "2024 — Present",
          role: "Executive Accounts Specialist",
          company: "University of Minnesota",
          description:
            "Spearhead financial process improvements through VBA-driven Excel automation, while overseeing procurement and reimbursement workflows and serving as a subject matter expert on university financial systems and policies.",
          bullets: [
            "Automated monthly credit-card reconciliation using Excel VBA, reducing processing time by 83%",
            "Reduced daily reconciliations from approximately 30 minutes to 10 minutes through VBA automation",
            "Automated purchase-order expenditure and burn-rate reporting, reducing report preparation from approximately one hour to 10 minutes",
            "Evaluate and streamline financial workflows, acting as a subject matter expert and key contact for purchasing and reimbursement workflows, managing purchase orders, reimbursements, and procurement processes across systems"
          ]
        },

        {
          period: "2023",
          role: "Software Engineering Student",
          company: "Prime Digital Academy",
          description:
            "Completed immersive full-stack software engineering training focused on application development, RESTful API architecture, database integration, and collaborative Agile practices to deliver functional, end-to-end software solutions.",
          bullets: [
            "Collaborated in an Agile development team for capstone project, partnering with local stakeholder to develop MVP full-stack app",
            "Developed full-stack web apps with modern technologies",
            "Designed and implemented RESTful APIs for data communication in full-stack applications"
          ]
        },

        {
          period: "2018 — 2022",
          role: "Account Associate",
          company: "Wells Fargo",
          description:
            "Executed mortgage document custody and loan-file administration processes, supporting the secure handling, organization, and lifecycle management of financial documentation while maintaining operational controls and service standards.",
          bullets: [
            "Managed and analyzed high-volume financial and operational data using internal systems and Excel-based tools",
            "Investigated data discrepancies and resolved document issues, supporting record accuracy and compliance"
          ]
        },

        {
          period: "2014",
          role: "Bachelor of Arts in Political Science — Quantitative Analysis",
          company: "University of Minnesota",
          description:
            "Studied quantitative research methods, statistical analysis, and large-scale data analysis, utilizing Stata for statistical programming, data management, and empirical research.",
          bullets: [
            "Performed statistical analyses on national datasets to identify patterns, evaluate relationships, and test research hypotheses",
            "Programmed and executed statistical procedures in Stata to support quantitative research and empirical analysis"
          ]
        }

      ],



    };

//  ****************************************   O U T D A T E D   ****************************************  //
  //
  // journal: [
  //   {
  //     slug: "why-postgresql",
  //     date: "Sep 12, 2026",
  //     title: "Why I chose PostgreSQL for my latest project",
  //     excerpt:
  //       "A practical look at relational modeling, querying patterns, and why the simplest database was the right choice.",
  //     tags: ["PostgreSQL", "Architecture", "Databases"],
  //     readTime: "5 min read",
  //     content: [
  //       {
  //         type: "paragraph",
  //         text: "When I started the project, I considered several database options. The obvious question was not which database was more impressive, but which one would make the application easier to reason about."
  //       },
  //       {
  //         type: "heading",
  //         text: "The problem"
  //       },
  //       {
  //         type: "paragraph",
  //         text: "The application had users, projects, events, relationships between entities, and several queries that depended on those relationships. That pushed me toward a relational model fairly quickly."
  //       },
  //       {
  //         type: "heading",
  //         text: "The decision"
  //       },
  //       {
  //         type: "paragraph",
  //         text: "I chose PostgreSQL because it gave me strong relational guarantees, excellent querying capabilities, and a mature ecosystem without requiring another abstraction layer to solve problems I did not actually have."
  //       },
  //       {
  //         type: "heading",
  //         text: "What I learned"
  //       },
  //       {
  //         type: "paragraph",
  //         text: "The biggest lesson was that choosing technology is often more about reducing unnecessary complexity than maximizing technical novelty."
  //       }
  //     ]
  //   },
  //
  //
  //   {
  //     slug: "optimistic-ui",
  //     date: "Aug 28, 2026",
  //     title: "Implementing optimistic UI updates",
  //     excerpt:
  //       "What happens when the interface updates before the server responds—and how to handle failure gracefully.",
  //     tags: ["React", "UX", "State Management"],
  //     readTime: "6 min read",
  //     content: [
  //       {
  //         type: "paragraph",
  //         text: "Optimistic interfaces are one of my favorite ways to make an application feel fast. Instead of waiting for a server response before updating the interface, the UI assumes the operation will succeed."
  //       },
  //       {
  //         type: "heading",
  //         text: "Why optimistic updates matter"
  //       },
  //       {
  //         type: "paragraph",
  //         text: "Most interactions do not need to feel like they are waiting on a network request. When the interface can safely predict the result, updating immediately creates a much more responsive experience."
  //       },
  //       {
  //         type: "heading",
  //         text: "The hard part"
  //       },
  //       {
  //         type: "paragraph",
  //         text: "The interesting engineering problem is failure. If the server rejects the operation, the UI needs to recover without confusing the user or leaving local state inconsistent."
  //       }
  //     ]
  //   },
  //
  //
  //   {
  //     slug: "websocket-server",
  //     date: "Aug 04, 2026",
  //     title: "What I learned building a WebSocket server",
  //     excerpt:
  //       "A breakdown of connection lifecycle, broadcasting, state synchronization, and the edge cases I didn't expect.",
  //     tags: ["WebSockets", "Node.js", "Realtime"],
  //     readTime: "7 min read",
  //     content: [
  //       {
  //         type: "paragraph",
  //         text: "Building a WebSocket server changed how I think about application state. A normal request has a beginning and an end. A persistent connection introduces an entirely different lifecycle."
  //       },
  //       {
  //         type: "heading",
  //         text: "Connection lifecycle"
  //       },
  //       {
  //         type: "paragraph",
  //         text: "Connections can appear, disappear, reconnect, and fail unexpectedly. Designing around those states is just as important as implementing the successful path."
  //       },
  //       {
  //         type: "heading",
  //         text: "State synchronization"
  //       },
  //       {
  //         type: "paragraph",
  //         text: "Realtime software makes it impossible to ignore the question of which version of state is authoritative. That became one of the most useful architectural lessons from the project."
  //       }
  //     ]
  //   },
  //
  //
  //   {
  //     slug: "serverless",
  //     date: "Aug 04, 2026",
  //     title: "What I learned building a WebSocket server",
  //     excerpt:
  //       "A breakdown of connection lifecycle, broadcasting, state synchronization, and the edge cases I didn't expect.",
  //     tags: ["WebSockets", "Node.js", "Realtime"],
  //     readTime: "7 min read",
  //     content: [
  //       {
  //         type: "paragraph",
  //         text: "Building a WebSocket server changed how I think about application state. A normal request has a beginning and an end. A persistent connection introduces an entirely different lifecycle."
  //       },
  //       {
  //         type: "heading",
  //         text: "Connection lifecycle"
  //       },
  //       {
  //         type: "paragraph",
  //         text: "Connections can appear, disappear, reconnect, and fail unexpectedly. Designing around those states is just as important as implementing the successful path."
  //       },
  //       {
  //         type: "heading",
  //         text: "State synchronization"
  //       },
  //       {
  //         type: "paragraph",
  //         text: "Realtime software makes it impossible to ignore the question of which version of state is authoritative. That became one of the most useful architectural lessons from the project."
  //       }
  //     ]
  //   }
  //
  // ]
//
