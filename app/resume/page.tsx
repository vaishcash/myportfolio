import React from "react";
import {
  GithubIcon,
 
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const Resume = () => {
  return (
    <div className="bg-gradient-to-br z-30 from-black via-purple-950 to-black min-h-screen p-4 md:p-8 flex justify-center items-start">
      <Navbar />
      <div className="max-w-4xl w-full bg-gray-900 shadow-2xl rounded-2xl p-6 md:p-8 border border-purple-500/30 backdrop-blur-sm hover:border-purple-500/10 transition-all mt-16 animate-fadeIn duration-300 z-50">
        {/* Header Section */}
        <div className="text-center space-y-3 animate-fadeIn">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 text-transparent bg-clip-text">
            Vaishnavi Bharti
          </h1>
          <p className="text-xl text-gray-400">
            UI/UX & Graphic Designer | Frontend Developer
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-gray-300">
            <a
              href="https://maps.google.com"
              className="flex items-center gap-2 hover:text-purple-400 transition-colors"
            >
              <MapPin size={18} />
              <span>New Delhi</span>
            </a>
            <a
              href="mailto:vaishnavi333kashyap@gmail.com"
              className="flex items-center gap-2 hover:text-purple-400 transition-colors"
            >
              <Mail size={18} />
              <span>vaishnavi333kashyap@gmail.com</span>
            </a>
            <a
              href="tel:+917903815004"
              className="flex items-center gap-2 hover:text-purple-400 transition-colors"
            >
              <Phone size={18} />
              <span>+91 79038 15004</span>
            </a>
            <div className="flex justify-center gap-4 ">
              <Link
                href="https://www.linkedin.com/in/vaishnavi-designer/"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>

              <Link
                href="https://x.com/vaishna939452"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>

              <Link
                href="https://github.com/vaishcash"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-purple-400 mb-4 flex items-center">
            <span className="bg-purple-500/10 px-4 py-1 rounded-full">
              Skills
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "UI/UX",
              "WordPress",
              "React.js",
              "Next.js",
              "Tailwind CSS",
              "Bootstrap",
              "Git",
              "Firebase",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-purple-500/5 px-4 py-2 rounded-lg text-gray-300 hover:bg-purple-500/10 transition-colors text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* About Me Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-purple-400 mb-4 flex items-center">
            <span className="bg-purple-500/10 px-4 py-1 rounded-full">
              About Me
            </span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Creative professional with 3+ years in graphic and UI/UX design, now
            transitioning into web development to combine design and technical
            skills. Passionate about user-centered experiences.
          </p>
        </section>

        {/* Work Experience Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-purple-400 mb-4 flex items-center">
            <span className="bg-purple-500/10 px-4 py-1 rounded-full">
              Work Experience
            </span>
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Graphic Designer",
                company: "XYZ Digital Private Limited",
                period: "June 2023 – November 2024",
                location: "New Delhi, India",
              },
              {
                title: "Graphic Designer & Social Media Executive",
                company: "Greentech Foundation",
                period: "August 2022 - June 2023",
                location: "New Delhi, India",
              },
              {
                title: "Graphic Designer",
                company: "Edumigration",
                period: "September 2021 - June 2022",
                location: "New Delhi, India",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-purple-500/5 p-4 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                <h3 className="text-purple-300 font-semibold">{job.title}</h3>
                <p className="text-gray-400">{job.company}</p>
                <p className="text-gray-500 text-sm flex items-center gap-2">
                  <span>{job.period}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-purple-400 mb-4 flex items-center">
            <span className="bg-purple-500/10 px-4 py-1 rounded-full">
              Personal Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                name: "PawPrint App",
                description:
                  "Secure authentication, role-based access, and animal profile management.",
                links: {
                  netlify: "https://pawprint0.netlify.app",
                  github: "https://github.com/vaishcash/auth_paw",
                },
              },

              {
                name: "MadRocket",
                description:
                  "A student data management app designed to store, update, and manage student records efficiently. It enhances data accuracy and accessibility for educational institutions.",
                links: {
                  netlify: "https://madrocket-project.netlify.app/dashboard",
                  github:
                    "https://github.com/vaishcash/madrocket-technologies-media",
                },
              },
              {
                name: "Harmoni Fakestore",
                description:
                  "A modern eCommerce platform offering a seamless shopping experience with a dynamic product catalog, secure checkout, and responsive design. Built for businesses to showcase and sell products effortlessly.",
                links: {
                  netlify: "https://fakesite-harmoni.netlify.app/",
                  github: "https://github.com/vaishcash/Harmoni",
                },
              },
              {
                name: "Roamify App",
                description:
                  "React travel website with dynamic travel packages, UI, and responsive navigation.",
                links: {
                  netlify: "https://roamify-ify.netlify.app",
                  github: "https://github.com/vaishcash/Roamify",
                },
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-purple-500/5 p-4 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                <h3 className="text-purple-300 font-semibold">
                  {project.name}
                </h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="flex gap-4 mt-3">
                  <a
                    href={project.links.netlify}
                    className="text-purple-400 hover:text-purple-300 flex items-center gap-1"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.links.github}
                    className="text-purple-400 hover:text-purple-300 flex items-center gap-1"
                  >
                    <GithubIcon size={16} />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-purple-400 mb-4 flex items-center">
            <span className="bg-purple-500/10 px-4 py-1 rounded-full">
              Education
            </span>
          </h2>
          <div className="bg-purple-500/5 p-4 rounded-lg">
            <h3 className="text-purple-300">
              Bachelor of Science in Multimedia
            </h3>
            <p className="text-gray-400">Kurukshetra University</p>
            <p className="text-gray-500">2018-2021</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
