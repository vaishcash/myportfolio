"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  Github,
  ExternalLink,
  Edit,
  Share2,
  Archive,
  Star,
  Clock,
  Calendar,
  Filter,
  X,
  Pin,
  Code,
} from "lucide-react";
import { format } from "date-fns";
import Image from "next/image";
import Navbar from "@/components/Navbar";

// Define project data structure
interface Project {
  id: string;
  title: string;
  duration: string;
  techStack: string[];
  description: string;
  status: "Active" | "Completed";
  links: {
    github?: string;
    demo?: string;
  };
  thumbnail: string;
  lastModified: Date;
  category: string[];
  pinned?: boolean;
}

// Sample project data
const projectsData: Project[] = [
  {
    id: "1",
    title: "PawPrint App",
    duration: "Jan 2024 - Present",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    description:
      "A comprehensive platform connecting animal shelters with potential adopters. Features include user authentication, role-based access control, and animal profile management. The app streamlines the adoption process by providing dedicated routes for those seeking help and those wanting to offer support.",
    status: "Active",
    links: {
      github: "https://github.com/vaishcash/pawprint",
      demo: "https://pawprint-app.netlify.app",
    },
    thumbnail:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    lastModified: new Date("2024-05-15"),
    category: ["Development", "Frontend"],
    pinned: true,
  },
  {
    id: "2",
    title: "Roamify Travel Platform",
    duration: "Nov 2023 - Mar 2024",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    description:
      "A modern travel planning interface built with React and TypeScript. Features include dynamic travel package display, travel insurance information section, and responsive design across all devices. The platform showcases 6 travel packages with reusable components.",
    status: "Completed",
    links: {
      github: "https://github.com/vaishcash/roamify",
      demo: "https://roamify-travel.netlify.app",
    },
    thumbnail:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    lastModified: new Date("2024-03-20"),
    category: ["Development", "Frontend"],
  },
  {
    id: "3",
    title: "IFSEC Exhibition Design",
    duration: "Aug 2023 - Sep 2023",
    techStack: ["Adobe Illustrator", "Photoshop", "InDesign"],
    description:
      "Comprehensive exhibition area design for XYZ Digital at IFSEC, India's premier surveillance expo. Created an engaging and visually impactful experience that increased visitor engagement by 30%. Designed all promotional materials, booth layout, and interactive elements.",
    status: "Completed",
    links: {},
    thumbnail:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    lastModified: new Date("2023-09-30"),
    category: ["Design", "Exhibition"],
  },
  {
    id: "4",
    title: "Greentech Bangkok Event Materials",
    duration: "Apr 2023 - May 2023",
    techStack: ["Adobe Illustrator", "Photoshop", "InDesign"],
    description:
      "Developed all event materials for Greentech's Bangkok event, including brochures, podium graphics, backdrops, and leaflets. Ensured a cohesive and visually compelling brand presence throughout the event that aligned with the organization's environmental mission.",
    status: "Completed",
    links: {},
    thumbnail:
      "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    lastModified: new Date("2023-05-25"),
    category: ["Design", "Event"],
  },
  {
    id: "5",
    title: "Personal Portfolio Website",
    duration: "Feb 2023 - Mar 2023",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    description:
      "Designed and developed a personal portfolio website to showcase my work as a UI/UX designer and frontend developer. Features include a responsive design, animated transitions, project showcase, and contact form. Implemented with modern web technologies.",
    status: "Completed",
    links: {
      demo: "https://vaishnavibharti.dev",
    },
    thumbnail:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80",
    lastModified: new Date("2023-03-15"),
    category: ["Development", "Design", "Frontend"],
    pinned: true,
  },
  {
    id: "6",
    title: "Digital Marketing Campaign for XYZ",
    duration: "Oct 2022 - Dec 2022",
    techStack: ["Adobe Illustrator", "Photoshop", "Social Media"],
    description:
      "Created a comprehensive digital marketing campaign for XYZ Digital that increased engagement by 30%. Designed social media graphics, email templates, and web banners. Collaborated with the marketing team to develop a cohesive brand identity across all platforms.",
    status: "Completed",
    links: {},
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
    lastModified: new Date("2022-12-20"),
    category: ["Design", "Marketing"],
  },
  {
    id: "7",
    title: "Educational Services Branding",
    duration: "Jan 2022 - Mar 2022",
    techStack: ["Adobe Illustrator", "Photoshop", "Brand Design"],
    description:
      "Designed promotional materials for educational and immigration services at Edumigration. Created visual content for digital marketing campaigns and developed brand identity elements for company collateral. Established a consistent visual language across all materials.",
    status: "Completed",
    links: {},
    thumbnail:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    lastModified: new Date("2022-03-30"),
    category: ["Design", "Branding"],
  },
  {
    id: "8",
    title: "Weather Dashboard App",
    duration: "Nov 2021 - Dec 2021",
    techStack: ["JavaScript", "HTML", "CSS", "API Integration"],
    description:
      "Developed a weather dashboard application that provides real-time weather information for multiple cities. Features include current weather conditions, 5-day forecast, search history, and responsive design. Integrated with OpenWeatherMap API for data retrieval.",
    status: "Completed",
    links: {
      github: "https://github.com/vaishcash/weather-dashboard",
      demo: "https://weather-dashboard-vb.netlify.app",
    },
    thumbnail:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80",
    lastModified: new Date("2021-12-15"),
    category: ["Development", "Frontend"],
  },
];

function Notes() {
  // State for filtering and search
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [expandedDescriptions, setExpandedDescriptions] = useState<
    Record<string, boolean>
  >({});
  const [filteredProjects, setFilteredProjects] =
    useState<Project[]>(projectsData);
  const [activeTechFilters, setActiveTechFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [yearFilter, setYearFilter] = useState<string | null>(null);

  // Get all unique tech stack items
  const allTechStacks = Array.from(
    new Set(projectsData.flatMap((project) => project.techStack))
  ).sort();

  // Get all unique years
  const allYears = Array.from(
    new Set(
      projectsData.map((project) =>
        new Date(project.lastModified).getFullYear().toString()
      )
    )
  ).sort((a, b) => parseInt(b) - parseInt(a));

  // Get recent projects (last 5 modified)
  const recentProjects = [...projectsData]
    .sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime())
    .slice(0, 5);

  // Get pinned projects
  const pinnedProjects = projectsData.filter((project) => project.pinned);

  // Toggle description expansion
  const toggleDescription = (id: string) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Toggle tech filter
  const toggleTechFilter = (tech: string) => {
    setActiveTechFilters((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  // Toggle year filter
  const toggleYearFilter = (year: string) => {
    setYearFilter((prev) => (prev === year ? null : year));
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setActiveFilter("All Projects");
    setActiveTechFilters([]);
    setYearFilter(null);
  };

  // Filter projects based on search term, category, tech stack, and year
  useEffect(() => {
    let results = projectsData;

    // Filter by search term
    if (searchTerm) {
      results = results.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (activeFilter !== "All Projects") {
      results = results.filter((project) =>
        project.category.includes(activeFilter)
      );
    }

    // Filter by tech stack
    if (activeTechFilters.length > 0) {
      results = results.filter((project) =>
        activeTechFilters.some((tech) => project.techStack.includes(tech))
      );
    }

    // Filter by year
    if (yearFilter) {
      results = results.filter(
        (project) =>
          new Date(project.lastModified).getFullYear().toString() === yearFilter
      );
    }

    setFilteredProjects(results);
  }, [searchTerm, activeFilter, activeTechFilters, yearFilter]);

  // Get project counts by year
  const projectCountsByYear = allYears.map((year) => {
    const count = projectsData.filter(
      (project) =>
        new Date(project.lastModified).getFullYear().toString() === year
    ).length;
    return { year, count };
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-16 bg-gradient-to-b from-[#0a0a1f] via-[#1a0b2e] to-[#2d0a4d] text-white relative overflow-hidden   ">
        <div className="container  mx-auto px-4 py-8  ">
          {/* Header Section */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-white font-poppins mb-6">
              My Professional Journey
            </h1>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 ">
              {/* Navigation */}
              <nav className="flex flex-wrap gap-4 z-30">
                {["All Projects", "Development", "Design", "Timeline"].map(
                  (filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-4 py-2 rounded-md transition-all duration-300 ${
                        activeFilter === filter
                          ? "bg-[#2C3E50] text-white font-medium"
                          : "bg-white text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      {filter}
                    </button>
                  )
                )}
              </nav>

              {/* Search and Add Project */}
              <div className="flex z-30  flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3498DB] focus:border-transparent"
                  />
                  <Search
                    className="absolute left-3 top-2.5 text-gray-400"
                    size={18}
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-4 py-2 bg-black text-white border border-gray-300 rounded-md flex items-center gap-2 hover:bg-gray-100 hover:text-black  transition-colors duration-300"
                >
                  <Filter size={18} />
                  <span>Filters</span>
                  {(activeTechFilters.length > 0 || yearFilter) && (
                    <span className="bg-[#3498DB] text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {activeTechFilters.length + (yearFilter ? 1 : 0)}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Filters Panel */}
            {showFilters && (
              <div className="bg-white z-30 p-4 rounded-md shadow-md mb-6 animate-slideDown">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-lg">Filter Projects</h3>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-[#3498DB] hover:text-[#2980b9] transition-colors duration-300"
                  >
                    Clear all filters
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Tech Stack Filters */}
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Code size={16} className="text-[#3498DB]" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {allTechStacks.map((tech) => (
                        <button
                          key={tech}
                          onClick={() => toggleTechFilter(tech)}
                          className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
                            activeTechFilters.includes(tech)
                              ? "bg-[#3498DB] text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {tech}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Year Filters */}
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Calendar size={16} className="text-[#3498DB]" />
                      Time Period
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {allYears.map((year) => (
                        <button
                          key={year}
                          onClick={() => toggleYearFilter(year)}
                          className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
                            yearFilter === year
                              ? "bg-[#3498DB] text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Active Filters Display */}
            {(activeTechFilters.length > 0 || yearFilter) && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm text-gray-500">Active filters:</span>
                {activeTechFilters.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#3498DB] text-white text-sm px-3 py-1 rounded-full flex items-center gap-1"
                  >
                    {tech}
                    <button onClick={() => toggleTechFilter(tech)}>
                      <X size={14} />
                    </button>
                  </span>
                ))}
                {yearFilter && (
                  <span className="bg-[#3498DB] text-white text-sm px-3 py-1 rounded-full flex items-center gap-1">
                    {yearFilter}
                    <button onClick={() => setYearFilter(null)}>
                      <X size={14} />
                    </button>
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#3498DB] hover:underline"
                >
                  Clear all
                </button>
              </div>
            )}
          </header>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - Project Cards */}
            <main className="lg:w-3/4 z-30">
              {filteredProjects.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <div className="text-gray-400 mb-4">
                    <Search size={48} className="mx-auto" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">
                    No projects found
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Try adjusting your search or filters to find what you are
                    looking for.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 bg-[#3498DB] text-white rounded-md hover:bg-[#2980b9] transition-colors duration-300"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6 font-poppins">
                    {filteredProjects.length}{" "}
                    {filteredProjects.length === 1 ? "Project" : "Projects"}{" "}
                    {activeFilter !== "All Projects"
                      ? `in ${activeFilter}`
                      : ""}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-30">
                    {filteredProjects.map((project) => (
                      <div
                        key={project.id}
                        className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md group"
                      >
                        {/* Project Image */}
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            width={500}
                            height={500}
                          />
                          <div className="absolute top-0 right-0 m-3">
                            <span
                              className={`text-xs font-medium px-3 py-1 rounded-full ${
                                project.status === "Active"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {project.status}
                            </span>
                          </div>

                          {/* Quick Actions Overlay */}
                          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 ">
                            <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300">
                              <Edit size={18} className="text-gray-700" />
                            </button>
                            <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300">
                              <Share2 size={18} className="text-gray-700" />
                            </button>
                            <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300">
                              <Archive size={18} className="text-gray-700" />
                            </button>
                            {project.pinned ? (
                              <button className="p-2 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors duration-300">
                                <Pin size={18} className="text-white" />
                              </button>
                            ) : (
                              <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300">
                                <Star size={18} className="text-gray-700" />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Project Content */}
                        <div className="p-5">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-bold text-[#2C3E50] leading-tight">
                              {project.title}
                            </h3>
                          </div>

                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Clock size={14} className="mr-1" />
                            <span>{project.duration}</span>
                          </div>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap z-30 gap-2 mb-4">
                            {project.techStack.map((tech, index) => (
                              <span
                                key={index}
                                className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Description */}
                          <div className="mb-4 z-30">
                            <p
                              className={`text-gray-600 text-sm ${
                                !expandedDescriptions[project.id]
                                  ? "line-clamp-3"
                                  : ""
                              }`}
                            >
                              {project.description}
                            </p>
                            {project.description.length > 150 && (
                              <button
                                onClick={() => toggleDescription(project.id)}
                                className="text-[#3498DB] text-sm mt-1 hover:underline focus:outline-none"
                              >
                                {expandedDescriptions[project.id]
                                  ? "Show less"
                                  : "Read more"}
                              </button>
                            )}
                          </div>

                          {/* Links */}
                          {(project.links.github || project.links.demo) && (
                            <div className="flex gap-3 mt-4">
                              {project.links.github && (
                                <a
                                  href={project.links.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 text-sm text-gray-700 hover:text-[#3498DB] transition-colors duration-300"
                                >
                                  <Github size={16} />
                                  <span>GitHub</span>
                                </a>
                              )}
                              {project.links.demo && (
                                <a
                                  href={project.links.demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 text-sm text-gray-700 hover:text-[#3498DB] transition-colors duration-300"
                                >
                                  <ExternalLink size={16} />
                                  <span>Live Demo</span>
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </main>

            {/* Sidebar */}
            <aside className="lg:w-1/4 z-30 space-y-6">
              {/* Pinned Projects */}
              {pinnedProjects.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-5">
                  <h3 className="text-lg font-semibold text-[#2C3E50] mb-4 flex items-center gap-2">
                    <Pin size={18} className="text-yellow-500" />
                    Pinned Projects
                  </h3>
                  <div className="space-y-3">
                    {pinnedProjects.map((project) => (
                      <div
                        key={project.id}
                        className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md transition-colors duration-300"
                      >
                        <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="flex-grow min-w-0 ">
                          <h4 className="font-medium text-gray-800 truncate">
                            {project.title}
                          </h4>
                          <div className="flex items-center text-xs text-gray-500">
                            <span className="truncate">
                              {project.techStack.slice(0, 2).join(", ")}
                            </span>
                            {project.techStack.length > 2 && (
                              <span> +{project.techStack.length - 2}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recent Activity */}
              <div className="bg-white z-30 rounded-lg shadow-sm p-5">
                <h3 className="text-lg font-semibold text-[#2C3E50] mb-4 flex items-center gap-2">
                  <Clock size={18} className="text-[#3498DB]" />
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  {recentProjects.map((project) => (
                    <div
                      key={project.id}
                      className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md transition-colors duration-300"
                    >
                      <div className="w-10 h-10 z-30 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="flex-grow min-w-0 z-30">
                        <h4 className="font-medium text-gray-800 truncate">
                          {project.title}
                        </h4>
                        <div className="text-xs text-gray-500 ">
                          Updated{" "}
                          {format(
                            new Date(project.lastModified),
                            "MMM d, yyyy"
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Archive */}
              <div className="bg-white rounded-lg shadow-sm p-5">
                <h3 className="text-lg font-semibold text-[#2C3E50] mb-4 flex items-center gap-2">
                  <Archive size={18} className="text-[#3498DB]" />
                  Archive
                </h3>
                <div className="space-y-2">
                  {projectCountsByYear.map(({ year, count }) => (
                    <button
                      key={year}
                      onClick={() => toggleYearFilter(year)}
                      className={`flex justify-between items-center w-full p-2 rounded-md transition-colors duration-300 ${
                        yearFilter === year
                          ? "bg-[#3498DB] text-white"
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <span>{year}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          yearFilter === year
                            ? "bg-white text-[#3498DB]"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notes;
