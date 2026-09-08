import { Icons } from "@/components/icons";
import { House } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Astro } from "@/components/ui/svgs/astro";

export const DATA = {
  name: "Jean Marco Roa",
  initials: "JMR",
  url: "https://jeanroa.dev",
  location: "Chile",
  locationLink: "https://www.google.com/maps/place/chile",
  description:
    "Full-stack Software Engineer specialized in building end-to-end digital products and automation systems.",
  summary:
    "Full-stack Software Engineer specialized in building end-to-end digital products and automation systems. Strong experience with React, React Native, Python (Flask/Django), PHP, WordPress, and API integrations.\n\nProven track record designing scalable SaaS platforms, optimizing workflows through automation, and delivering high-impact solutions for international clients. Comfortable working across frontend, backend, and DevOps environments.\n\n**Languages:** Spanish (Native), English (C1), Portuguese (C1), Norwegian Bokmål (B1)",
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    projects: {
      order: 2,
      enabled: true,
      label: "Projects",
      heading: "Selected work",
      text: "Client websites and digital products I've designed and built, from corporate sites on Next.js to WordPress platforms with custom modules.",
    },
    work: { order: 3, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 4, enabled: true, heading: "Education" },
    skills: { order: 5, enabled: true, heading: "Skills" },
    testimonials: {
      order: 6,
      enabled: true,
      label: "Testimonials",
      heading: "What people say",
      text: "Recommendations from clients, colleagues, and collaborators on LinkedIn.",
    },
    hackathons: {
      order: 7,
      enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    photos: {
      order: 6,
      enabled: false,
      heading: "My Recent Travels",
    },
    contact: {
      order: 8,
      enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Reach me by email or LinkedIn. I'm always open to discussing new projects, collaborations, and opportunities.",
    },
  },
  photos: [],
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Angular", icon: undefined },
    { name: "TypeScript", icon: Typescript },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Astro", icon: Astro },
    { name: "React Native", icon: ReactLight },
    { name: "Vue", icon: undefined },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Flask", icon: Python },
    { name: "Django", icon: Python },
    { name: "PHP", icon: undefined },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MySQL", icon: undefined },
    { name: "Docker", icon: Docker },
    { name: "AWS", icon: undefined },
    { name: "CI/CD", icon: undefined },
    { name: "REST APIs", icon: undefined },
    { name: "WordPress", icon: undefined },
    { name: "Scrum", icon: undefined },
  ],
  navbar: [{ href: "/", icon: House, label: "Home" }],
  cv: [
    {
      href: "https://docs.google.com/document/d/1QuX_VyqkoaMf_1hC7SbJU2xv5wCxP24U/view?usp=sharing",
      label: "CV (English)",
    },
    {
      href: "https://docs.google.com/document/d/1ioo_y_igYuNnamdNGbkXs8HB3R4T27HA/view?usp=sharing",
      label: "CV (Español)",
    },
  ],
  contact: {
    email: "contact@jeanroa.dev",
    tel: "+569 3149 8555",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jeanmra/",
        icon: Icons.linkedin,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/drakvyn",
        icon: Icons.github,
        navbar: true,
      },
      Youtube: {
        name: "YouTube",
        url: "https://www.youtube.com/@drakvyn",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:contact@jeanroa.dev",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "SeNTRA",
      href: "",
      badges: [],
      location: "Chile",
      title: "Software Engineer",
      logoUrl: "https://avatar.vercel.sh/sentra?size=40",
      start: "September 2025",
      end: "June 2026",
      description: `- Design and deliver end-to-end fullstack features using Angular, Node.js, and PostgreSQL, working across UI, API, and database layers in a production environment with real operational data.
- Implement modular backend services with clear domain boundaries, enforcing business rules, input validation, and transactional consistency to ensure data correctness and system reliability.
- Write and optimize complex SQL queries involving joins, aggregations, and time-based grouping (daily, weekly, monthly), supporting reporting and performance-sensitive workflows.
- Collaborate closely with Product and QA to clarify requirements, surface edge cases, and ensure features are testable, stable, and production-ready.
- Contribute to code reviews, internal documentation, and performance improvements, strengthening maintainability and long-term scalability of the platform.`,
    },
    {
      company: "Fogata Group",
      href: "",
      badges: ["Project"],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "https://avatar.vercel.sh/fogata-group?size=40",
      start: "March 2025",
      end: "December 2025",
      description: `- Designed and developed an end-to-end SaaS platform, implementing scalable and secure architecture using Flask, MySQL, and React + TypeScript.
- Built a secure REST API integrating advanced authentication with Auth0 and Firebase, improving both security and user experience.
- Automated deployment using containers, enhancing platform availability and maintainability.
- Implemented advanced features like interactive maps, custom permissions, and real-time notifications, boosting user engagement.
- Delivered visual and functional solutions aligned with the client's objectives, resulting in significant productivity improvements.`,
    },
    {
      company: "CCSolutions",
      href: "",
      badges: [],
      location: "Remote",
      title: "Senior Software Developer",
      logoUrl: "https://avatar.vercel.sh/ccsolutions?size=40",
      start: "May 2024",
      end: "January 2025",
      description: `- Developed a modular CMS focused on scalability and performance, using Astro to build user interfaces and Directus as the content manager.
- Collaborated with the DevOps team to ensure smooth application functionality and CI/CD pipelines.
- Created clean, functional interfaces that enabled agile feature delivery, supported junior developers, and enhanced the product's value and user experience.`,
    },
    {
      company: "Annalect",
      href: "https://www.annalect.com",
      badges: [],
      location: "Remote",
      title: "Data Analyst",
      logoUrl: "https://www.google.com/s2/favicons?domain=annalect.com&sz=128",
      start: "May 2023",
      end: "March 2024",
      description: `- Achieved rapid professional growth and became the lead analyst for the Volkswagen account in Canada and the US within three months.
- Coordinated international teams and delivered strategic presentations in English to executives in London, Mexico, and Canada.
- Transformed data into actionable insights, boosting marketing campaign effectiveness, reach, and audience engagement.`,
    },
    {
      company: "Yapp",
      href: "",
      badges: [],
      location: "Chile",
      title: "Software Developer",
      logoUrl: "https://avatar.vercel.sh/yapp?size=40",
      start: "April 2022",
      end: "April 2023",
      description: `- Worked on a critical healthcare application used by the Chilean Ministry of Health.
- Helped improve access to medication for chronic patients by enhancing the app.
- Built a new desktop application in three months using Ruby on Rails and AWS, successfully replacing a previous React and Firebase solution and optimizing its performance.`,
    },
    {
      company: "Freelance",
      href: "",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "https://avatar.vercel.sh/freelance?size=40",
      start: "March 2020",
      end: undefined,
      description: `- Developed custom tech solutions for clients across the Americas and Europe, tailoring products to specific cultural and technical needs.
- Specialized in automation, AI, and process optimization, helping businesses reduce operational time and improve performance.
- Focused on client value and efficiency, designing digital products that enhanced user experience and data-driven decision-making.`,
    },
  ],
  education: [
    {
      school: "CISCO",
      href: "https://www.cisco.com",
      degree: "Networking Certificate",
      logoUrl: "https://www.google.com/s2/favicons?domain=cisco.com&sz=128",
      start: "2024",
      end: "2024",
    },
    {
      school: "Instituto Keys",
      href: "",
      degree: "Diploma in Programming, Caracas, Venezuela",
      logoUrl: "https://avatar.vercel.sh/instituto-keys?size=40",
      start: "2016",
      end: "2016",
    },
    {
      school: "Instituto Cell",
      href: "",
      degree: "Technician in Electronics and Microsoldering, Phones and Computers, Caracas, Venezuela",
      logoUrl: "https://avatar.vercel.sh/instituto-cell?size=40",
      start: "2014",
      end: "2014",
    },
    {
      school: "Udemy",
      href: "https://www.udemy.com",
      degree: "Linux · Web Design · Web Development · WordPress Plugin Development · React & MERN Stack · Python Development & Scripting · Web Scraping · Bash Automation · Flask & Django · Mobile Development · Cybersecurity · React Native",
      logoUrl: "https://www.google.com/s2/favicons?domain=udemy.com&sz=128",
      start: "2018",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Tritium Ingeniería",
      href: "https://www.tritiuming.cl/",
      dates: "2025",
      active: true,
      description:
        "Corporate website for an engineering firm in Santiago. Project showcase, contact form, and a clean layout built with Next.js and deployed on Netlify.",
      technologies: ["Next.js", "Netlify", "TypeScript", "TailwindCSS"],
      links: [],
      image: "/tritium.png",
      video: "",
    },
    {
      title: "SecretBus",
      href: "https://secretbus.cl/",
      dates: "2025",
      active: true,
      description:
        "Landing page for Chile's first mobile pub for women. Booking flow, service showcase, and contact channels, built on WordPress with custom modules.",
      technologies: ["WordPress", "PHP", "Custom Modules", "CSS"],
      links: [],
      image: "/bus.png",
      video: "",
    },
    {
      title: "Activos Gestionados",
      href: "https://activosgestionados.com/",
      dates: "2025",
      active: true,
      description:
        "Real estate platform for property sales, rentals, and administration. Property slider, service pages, and lead capture forms on WordPress with custom modules.",
      technologies: ["WordPress", "PHP", "Custom Modules", "CSS"],
      links: [],
      image: "/activos.png",
      video: "",
    },
    {
      title: "Sanitas Health",
      href: "https://sanitashealth.cl/",
      dates: "2025",
      active: true,
      description:
        "Website for a home care provider serving older adults in the Metropolitan Region. Services, testimonials, and contact forms on WordPress with custom modules.",
      technologies: ["WordPress", "PHP", "Custom Modules", "CSS"],
      links: [],
      image: "/sanitas.png",
      video: "",
    },
  ],
  hackathons: [],
  testimonials: [
    {
      quote:
        "Jean is an outstanding mentor, technically excellent in every sense of the word, and personally wonderful. I had the pleasure of working under his guidance, and he is a project leader who brings out the best in every team member, leveraging their strengths and often stepping in himself to support their weaknesses. A developer who is truly gold for any team.",
      name: "Azariel Moreno",
      title: "Full-Stack Developer",
      company: "",
      image: "",
    },
    {
      quote:
        "Jean is our go-to for any CSS animations we want to implement on our site. He is highly skilled and does not require further instructions. A pleasure to work with. Recommend for any animation project.",
      name: "Marcela Ávila Vivero",
      title: "Founder & CEO",
      company: "Findie",
      image: "",
    },
    {
      quote:
        "Jean is a highly committed professional. He faced a challenge on my website and exceeded expectations. His dedication and attention to detail were exceptional. Thanks to his help, I was able to resolve a significant issue. I recommend him 100%.",
      name: "Nancy Miranda",
      title: "Content Creator",
      company: "",
      image: "",
    },
    {
      quote:
        "I had the pleasure of working with Jean and can say my experience with him was great. He always wants to learn, improve, and give his best. Sometimes we had to meet a bit late and he was willing to take those meetings, so I'm very grateful for his effort.",
      name: "Santiago Correa",
      title: "Senior Frontend Engineer",
      company: "Statista",
      image: "",
    },
  ],
} as const;
