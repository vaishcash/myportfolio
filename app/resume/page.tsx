import Navbar from "@/components/Navbar";
import React from "react";

const Resume = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen p-8  flex justify-center">
        <div className="max-w-3xl w-full bg-gray-900 shadow-xl rounded-2xl p-6 border border-purple-600">
          <h1 className="text-4xl font-bold text-center text-purple-400">
            Vaishnavi Bharti
          </h1>
          <p className="text-center text-gray-400">
            UI/UX & Graphic Designer | Frontend Developer
          </p>

          <div className="mt-4 text-center text-gray-300">
            <p>
              New Delhi |{" "}
              <a
                href="mailto:vaishnavi333kashyap@gmail.com"
                className="text-purple-300 hover:underline"
              >
                vaishnavi333kashyap@gmail.com
              </a>
            </p>
            <p>📞 +91 79038 15004</p>
            <p>
              <a
                href="https://linkedin.com/in/vaishnavi-designer"
                className="text-purple-300 hover:underline"
              >
                LinkedIn
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/vaishcash"
                className="text-purple-300 hover:underline"
              >
                GitHub
              </a>
            </p>
          </div>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold border-b border-purple-500 pb-2">
              Skills
            </h2>
            <p className="mt-2 text-gray-300">
              HTML | CSS | JavaScript | TypeScript | UI/UX | WordPress
            </p>
            <p className="text-gray-300">
              React.js | Next.js | Tailwind CSS | Bootstrap
            </p>
            <p className="text-gray-300">Git | GitHub | Firebase</p>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold border-b border-purple-500 pb-2">
              About Me
            </h2>
            <p className="mt-2 text-gray-400">
              Creative professional with 3+ years in graphic and UI/UX design,
              now transitioning into web development to combine design and
              technical skills. Passionate about user-centered experiences.
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold border-b border-purple-500 pb-2">
              Work Experience
            </h2>
            <div className="mt-4">
              <p className="font-semibold text-purple-400">
                Graphic Designer - XYZ Digital Private Limited
              </p>
              <p className="text-gray-400">
                June 2023 – November 2024 | New Delhi, India
              </p>
            </div>
            <div className="mt-4">
              <p className="font-semibold text-purple-400">
                Graphic Designer & Social Media Executive - Greentech Foundation
              </p>
              <p className="text-gray-400">
                August 2022 - June 2023 | New Delhi, India
              </p>
            </div>
            <div className="mt-4">
              <p className="font-semibold text-purple-400">
                Graphic Designer - Edumigration
              </p>
              <p className="text-gray-400">
                September 2021 - June 2022 | New Delhi, India
              </p>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold border-b border-purple-500 pb-2">
              Key Achievements
            </h2>
            <ul className="mt-2 text-gray-400 list-disc list-inside">
              <li>
                Designed the exhibition area at IFSEC, enhancing user
                engagement.
              </li>
              <li>
                Planned and developed all event materials for Greentech in
                Bangkok event.
              </li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold border-b border-purple-500 pb-2">
              Personal Projects
            </h2>
            <div className="mt-4">
              <p className="font-semibold text-purple-300">PawPrint App</p>
              <p className="text-gray-400">
                Secure authentication, role-based access, and animal profile
                management.
              </p>
              <p>
                <a href="#" className="text-purple-300 hover:underline">
                  Netlify
                </a>{" "}
                |{" "}
                <a href="#" className="text-purple-300 hover:underline">
                  GitHub
                </a>
              </p>
            </div>
            <div className="mt-4">
              <p className="font-semibold text-purple-300">Roamify App</p>
              <p className="text-gray-400">
                React travel website with dynamic travel packages, UI, and
                responsive navigation.
              </p>
              <p>
                <a href="#" className="text-purple-300 hover:underline">
                  Netlify
                </a>{" "}
                |{" "}
                <a href="#" className="text-purple-300 hover:underline">
                  GitHub
                </a>
              </p>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold border-b border-purple-500 pb-2">
              Education
            </h2>
            <p className="mt-2 text-gray-400">
              Bachelor of Science in Multimedia, Kurukshetra University
              (2018-2021)
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Resume;
