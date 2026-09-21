import type { ExperienceItem } from "~/components/widgets/Experience.astro";

export const experiences: ExperienceItem[] = [
  {
    title: "Information Technology Analyst (Lead Software Engineer)",
    company: "Sacramento County",
    location: "Sacramento, CA",
    dates: "Jul 2024 – Present",
    bullets: [
      "Lead a team of 4 modernizing the county's retirement system (SCERS), rebuilding legacy applications into scalable, service-oriented web platforms (React, .NET Core / C#, Node, PostgreSQL) that manage sensitive member and benefits data.",
      "Design event-driven integrations with Apache Kafka and secure REST APIs with Keycloak authentication (OAuth 2.0 / OIDC), meeting public-sector security and compliance requirements.",
      "Own architecture, data migration with reconciliation and integrity checks, code review, CI/CD, and production support for high-availability systems used daily by county staff.",
    ],
  },
  {
    title: "Adjunct Instructor",
    company: "California Institute of Applied Technology",
    location: "Remote",
    dates: "Jun 2023 – Present",
    icon: "tabler:school",
    bullets: [
      "Teach data structures, algorithms, and web technologies, translating hands-on engineering experience into clear, practical instruction.",
    ],
  },
  {
    title: "Senior Developer (Contract)",
    company: "Apple",
    location: "Santa Clara, CA",
    dates: "Aug 2023 – Dec 2023",
    bullets: [
      "Built distributed backend services and REST / GraphQL APIs (Node, Express, Java, PostgreSQL, Kafka) for high request volumes; optimized through caching, query tuning, and a microservices architecture.",
      "Integrated OAuth 2.0 and OpenID Connect across internal applications.",
    ],
  },
  {
    title: "Lead Software Engineer",
    company: "Williams-Sonoma",
    location: "San Francisco Bay Area",
    dates: "Oct 2021 – Jul 2023",
    bullets: [
      "Led a team of 5 (on-site and offshore) building and scaling the e-commerce platform and its sub-brands (Java, Spring, React, Vue, LitElement) — delivering Wedding Registry, Buy-Online / Pickup-in-Store, and mobile conversion features.",
      "Architected a micro-frontend platform that let teams build and deploy independently; owned the CI/CD pipeline (Jenkins, Docker, Kubernetes), improving deploy reliability and reducing production defects.",
      "Set code-review and testing standards; mentored junior developers in an Agile environment.",
    ],
  },
  {
    title: "Senior Database Administrator & SharePoint Developer",
    company: "U.S. Department of State, U.S. Embassy",
    location: "Kabul",
    dates: "Apr 2021 – Nov 2021",
    bullets: [
      "Administered and secured mission-critical SQL Server databases and built SharePoint solutions supporting embassy operations in a high-security U.S. federal government environment.",
      "Delivered backup/recovery, performance tuning, and least-privilege access control to strict reliability and compliance standards.",
    ],
  },
  {
    title: "Lead Software Engineer",
    company: "MDout, Inc.",
    location: "Remote, U.S. hours",
    dates: "Oct 2020 – Oct 2021",
    bullets: [
      "Led a 10-engineer team launching a SaaS Electronic Health Record (EHR) platform for U.S. optometry clinics (Node, TypeScript, Angular, MongoDB), handling patient-record data under healthcare privacy and security requirements.",
      "Established code-review, automated-testing, and documentation standards; trained the team on TypeScript, Angular, and Node.",
    ],
  },
  {
    title: "Senior Full-Stack Software Engineer",
    company: "International Organization for Migration (IOM)",
    location: "Kabul",
    dates: "Dec 2018 – Mar 2021",
    bullets: [
      "Built the MIDAS and SHURA identity and registration platforms end-to-end (.NET Core, C#, Java, Kotlin, Vue, React, Kafka) — systems handling biometric and personally identifiable data for a United Nations agency.",
      "Designed offline-first, distributed data sync for reliable operation in low-connectivity field environments; integrated biometric capture to improve data integrity and reduce fraud.",
      "Established organization-wide technology standards.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Ministry of Communications & Information Technologies",
    location: "Kabul",
    dates: "Oct 2017 – Dec 2018",
    bullets: [
      "Led the design and implementation of the national Online Passport System (C#, ASP.NET, SQL Server) serving 10,000+ daily users.",
      "Contributed to a Government Resource Planning platform adopted across government offices.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Speensoft",
    location: "Remote",
    dates: "Aug 2016 – Oct 2017",
    bullets: [
      "Built and launched ZootZoot, a cross-platform food/grocery delivery marketplace app for iOS and Android (Vue, React, React Native, Laravel, Firebase).",
      "Mentored developers on modern JavaScript frameworks.",
    ],
  },
  {
    title: "Earlier",
    company: "Oracle DBA Intern, UnionSys Technologies (2016) · Engineering Intern, Imagination Technologies (2015)",
    location: "",
    dates: "",
    icon: "tabler:history",
    bullets: ["Video-codec optimization in MIPS SIMD assembly, VLSI project exposure."],
  },
];
