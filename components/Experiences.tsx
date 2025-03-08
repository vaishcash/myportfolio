

import React from "react";
import { BookCard } from "./card/card";

const projectData = [
  {
    title: "Frontend Developer - Rezume (Startup)",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    description:
      "Developed the frontend for a resume-building platform that provides users with resume templates and scoring based on industry standards. Implemented role-based authentication, form validations, and data storage using Firebase. Designed a clean and intuitive UI to enhance user experience and engagement.",
    dates: "January 2024 - Present",
  },
  {
    title: "Web Developer Intern - CodSoft",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    description:
      "Worked on frontend development projects, enhancing web applications with responsive and dynamic UI components. Gained experience in using React and Next.js to optimize performance and improve user experience. Collaborated with the development team to implement new features and debug existing issues.",
    dates: "November 2023 - January 2024",
  },
  {
    title: "Graphic Designer - XYZ Digital Private Limited",
    techStack: [
      "Figma",
      "Adobe InDesign",
      "Illustrator",
      "Photoshop",
      "CorelDRAW",
      "Canva",
    ],
    description:
      "Designed innovative exhibition areas and successfully managed the CCTV IFSEC exhibition, significantly enhancing brand visibility and generating increased leads. Developed captivating cover packages for newly launched products, maintaining product appeal and brand consistency for clients such as Daichi, Mastel, and international clients like Ruision. Directed the design and production of social media posts, EDMs, logos, tags, videos, and data sheets, leading to a 300% increase in brand value.",
    dates: "June 2023 - November 2023",
  },
  {
    title: "Graphic Designer and Social Media Executive - Greentech Foundation",
    techStack: [
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Photoshop",
      "CorelDRAW",
    ],
    description:
      "Designed and managed international event templates, booklets, and promotional materials, including for high-profile events in Bangkok. Applied advanced color theory, typography, and layout design to ensure clear communication of event messages and audience engagement. Collaborated with cross-functional teams to create visually compelling materials that enhanced brand visibility and event success.",
    dates: "August 2022 - June 2023",
  },
  {
    title: "Graphic Designer - Edumigration",
    techStack: [
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Photoshop",
      "CorelDRAW",
    ],
    description:
      "Developed visually appealing infographics to simplify complex immigration processes, timelines, and requirements for clients. Designed engaging training materials and manuals for staff, ensuring clarity and ease of navigation. Contributed to improving internal and external communication through high-quality visual assets.",
    dates: "September 2021 - June 2022",
  },
];

function ExperienceCard() {
  return (
    <div  id="experience" className="pt-32">
      <div  className="flex  flex-col justify-center items-center text-center ">
        <h1 className="text-4xl">Experience</h1>
        <p className="text-md bg-gradient-to-r from-gray-500 via-gray-100 to-gray-500 text-transparent bg-clip-text px-44 max-sm:px-16">
          My journey has been a learning experience shaped by my work at my
          previous organizations. Have a look at them!
        </p>
      </div>

      <div className="flex flex-wrap justify-center mt-16">
        {projectData.map((item, index) => (
          <BookCard
            key={index}
            title={item.title}
            techStack={item.techStack}
            description={item.description}
          
          />
        ))}
      </div>
    </div>
  );
}

export default ExperienceCard;
