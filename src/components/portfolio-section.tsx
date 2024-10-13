"use client"

import Image from "next/image"
import { Github } from "lucide-react"

export function PortfolioSectionComponent() {
  const works = [
    {
      title: "Inkdrop",
      description:
        "A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support",
      image: "/placeholder.svg?height=300&width=300",
      github: "https://github.com/yourusername/inkdrop",
    },
    {
      title: "walknote",
      description: "Music recommendation app for iOS",
      image: "/placeholder.svg?height=300&width=300",
      github: "https://github.com/yourusername/walknote",
    },
    {
      title: "The four painters",
      description:
        "A video work generated with deep learning, imitating famous four painters like Van Gogh",
      image: "/placeholder.svg?height=300&width=300",
      github: "https://github.com/yourusername/four-painters",
    },
    {
      title: "Menkiki",
      description:
        "An app that suggests ramen(noodle) shops based on a given photo of the ramen you want to eat",
      image: "/placeholder.svg?height=300&width=300",
      github: "https://github.com/yourusername/menkiki",
    },
  ]

  return (
    <section className="bg-gray-900 text-white py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center tracking-wide">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="group bg-gray-800 p-4 rounded-xl shadow-lg transform transition duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-700"
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={work.image}
                  alt={work.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-teal-400 transition-colors duration-300">
                {work.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{work.description}</p>
              <a
                href={work.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300 text-sm"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
