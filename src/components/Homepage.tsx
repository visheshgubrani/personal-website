"use client"

import Link from "next/link"
import { Github, Menu } from "lucide-react"

export function Homepage() {
  return (
    <div className="">
      <div className="flex-grow max-w-4xl mx-auto p-8">
        <header className="mb-12">
          <div className="bg-gray-800 p-6 rounded-lg mb-6 shadow-lg">
            <p className="text-lg">
              Hello, I'm an indie app developer based in{" "}
              <span className="text-teal-400">[India]</span>!
            </p>
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-3">
            Vishesh Gubrani
          </h1>
          <p className="text-2xl text-teal-400">
            Digital Craftsman ( Developer / Cloud Engineer )
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Work</h2>
          <p className="mb-6 text-lg leading-relaxed">
            [Your Name] is a freelance full-stack developer based in{" "}
            <span className="text-teal-400">[Your Location]</span>
            with a passion for building digital solutions. They have expertise
            in launching products, from design and planning to solving real-life
            challenges with code. When offline, they enjoy photography.
            Currently, they are living off of their own product called{" "}
            <span className="text-teal-400">[Product Name]</span>.
          </p>
          <Link
            href="/portfolio"
            className="bg-teal-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-teal-600 transition-all transform hover:scale-105"
          >
            My Portfolio
          </Link>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Bio</h2>
          <div className="space-y-4">
            <div className="flex space-x-4">
              <span className="text-teal-400 font-semibold">1984</span>
              <span>
                Born in{" "}
                <span className="text-teal-400">
                  [Your Birthplace], [Country]
                </span>
              </span>
            </div>
            <div className="flex space-x-4">
              <span className="text-teal-400 font-semibold">2010</span>
              <span>
                Completed the Master's Program in the Graduate School of
                Information Science at{" "}
                <span className="text-teal-400">[Your University]</span>
              </span>
            </div>
            <div className="flex space-x-4">
              <span className="text-teal-400 font-semibold">2010</span>
              <span>
                Worked at <span className="text-teal-400">[Company Name]</span>
              </span>
            </div>
            <div className="flex space-x-4">
              <span className="text-teal-400 font-semibold">2012</span>
              <span>Began working as a freelancer</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">I ♥</h2>
          <p className="text-lg">
            Art, Music, Drawing, Drums, Photography, Leica, Machine Learning
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-4">On the Web</h2>
          <div className="space-y-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-teal-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              @visheshgubrani
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
