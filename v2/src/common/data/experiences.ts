export const experiences = [
  {
    organization: "Medtrack",
    duration: "2023 - Present",
    details:
      "At MedTrack, I am contributing to building a transformative health data solution aimed at improving healthcare across Africa. By helping develop an interoperable system, ensuring secure and efficient access to patient information across healthcare facilities.",
  },
  {
    organization: "Crowdpad",
    duration: "2023 (Aug - Nov)",
    details: `
- Contributed to a CRM tailored for real estate professionals, enhancing client engagement and lead management.  
- Revamped the listing management system, enabling agents and brokerages to create and update property listings for their websites.  
- Implemented XML integration, allowing clients to generate XML feeds of listings for seamless sharing with external real estate portals and websites.  
- Migrated listing filtering to ElasticSearch, achieving faster, more flexible, and accurate searches.  
- Worked on additional features and updates, leveraging technologies like ElasticSearch, Firebase, Next.js, React, Tailwind CSS, TypeScript, and Node.js.
      `.trim(),
  },
  {
    organization: "Hurisoft",
    duration: "2021 - 2022",
    details: `
- Worked on internal tools and external projects for various clients.
- Developed, tested, and deployed solutions to meet project requirements.
- Improved and updated existing projects to enhance performance and usability.
- Collaborated with teams to create user-facing features and integrate them with back-end logic.
- Ensured websites met objectives like load speed, design, and functionality.
    `.trim(),
  },
  {
    organization: "Developers In Vogue",
    duration: "2022 (Jul - Sep)",
    details: `
- Created and updated bootcamp curriculum, including assignments, instructional plans, and project ideas.  
- Delivered engaging lectures on web development fundamentals like HTML, CSS, JavaScript, and related tools/frameworks.  
- Conducted code reviews, providing constructive feedback to help students improve their skills.  
- Offered one-on-one support and addressed student questions.  
- Led group projects, guiding students from ideation to deployment.  
- Monitored student progress and assessed performance through assignments, quizzes, and exams.

      `.trim(),
  },
  {
    organization: "Filly Coder",
    duration: "2020 - 2021",
    details: `
- Designed websites and web applications for various clients.  
- Built layouts using HTML5 and CSS3 based on client specifications.  
- Improved site performance and optimized user experience.  
- Managed hosting and deployed websites live.  
- Delivered design projects on time and within budget, meeting all requirements.
      `.trim(),
  },
];

export type ExperienceItem = (typeof experiences)[number];
