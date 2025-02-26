import React from "react";
import { BookCard } from "./card/card";

const projectData = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A feature-rich admin dashboard for managing e-commerce platforms, built with a modern UI and real-time analytics. Implements authentication, dynamic charts, and order tracking.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Chart.js",
    ],
    date: "June 2024",
    imgSrc:
      "https://img.freepik.com/free-vector/triangle-inside-circle_1045-180.jpg", // Example image
  },
  {
    title: "Social Media App",
    description:
      "A scalable social networking platform with real-time messaging, user authentication, and media sharing. Optimized for performance and mobile responsiveness.",
    techStack: ["React Native", "Redux", "Node.js", "MongoDB", "Socket.io"],
    date: "August 2024",
    imgSrc:
      "https://marketplace.canva.com/EAFzjXx_i5w/1/0/1600w/canva-blue-illustrative-e-commerce-online-shop-logo-fZejT2DpGCw.jpg", // Example image
  },
  {
    title: "Task Management App",
    description:
      "A productivity-focused web application that allows users to manage tasks, set deadlines, and track progress with real-time updates and notifications.",
    techStack: ["Vue.js", "TypeScript", "Firebase", "Tailwind CSS"],
    date: "September 2024",
    imgSrc:
      "https://cdn.logojoy.com/wp-content/uploads/2018/08/23161057/1-23.png", // Example image
  },
];

function ExperienceCard() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center mt-44">
        <h1 className="text-4xl">Experience</h1>
        <p className="text-md bg-gradient-to-r from-gray-500 via-gray-100 to-gray-500 text-transparent bg-clip-text px-44 max-sm:px-16">
          My journey has been a learning experience shaped by my work at my
          previous organizations. Have a look at them!
        </p>
      </div>

      <div className="flex flex-wrap justify-center  mt-16">
        {projectData.map((item, index) => (
          <BookCard
            key={index} // Adding key to avoid React warning
            imgSrc={item.imgSrc}
            techStack={item.techStack} // Corrected techStack prop
            title={item.title}
          />
        ))}
      </div>
    </>
  );
}

export default ExperienceCard;
