"use client"

import Link from "next/link"
import { Github, ExternalLink, Menu } from "lucide-react"
import { useState } from "react"

export function PortfolioComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const projects = [
    {
      title: "Project 1",
      description:
        "A brief description of Project 1. This could be a web app, mobile app, or any other type of project.",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1.com",
    },
    {
      title: "Project 2",
      description:
        "Description of Project 2. Highlight the key features and your role in the project.",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2.com",
    },
    {
      title: "Project 3",
      description:
        "Project 3 details. Explain what problem this project solves and how it's unique.",
      technologies: ["React Native", "Firebase"],
      github: "https://github.com/yourusername/project3",
      live: "https://project3.com",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex flex-col">
      {/* Navigation */}
      <nav className="bg-gray-800 p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-teal-400 transition duration-300"
          >
            Your Name
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              href="/portfolio"
              className="hover:text-teal-400 transition duration-300"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="hover:text-teal-400 transition duration-300"
            >
              Blog
            </Link>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition duration-300 flex items-center"
            >
              <Github className="w-5 h-5 mr-1" /> GitHub
            </a>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Link
              href="/portfolio"
              className="block py-2 hover:text-teal-400 transition"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="block py-2 hover:text-teal-400 transition"
            >
              Blog
            </Link>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 hover:text-teal-400 transition"
            >
              <Github className="inline-block w-5 h-5 mr-1" /> GitHub
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="flex-grow max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-extrabold text-white mb-10">
          My Portfolio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-teal-400 mb-2">
                  Technologies:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-teal-600 text-white px-2 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-teal-400 hover:text-teal-300 transition duration-300"
                >
                  <Github className="w-5 h-5 mr-1" /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-teal-400 hover:text-teal-300 transition duration-300"
                >
                  <ExternalLink className="w-5 h-5 mr-1" /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 mt-10">
        <div className="max-w-6xl mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
