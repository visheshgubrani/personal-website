'use client'

import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'

function PortfolioSectionComponent() {
  const works = [
    {
      title: 'URL Shortener',
      description:
        'A robust URL shortener service deployed on Kubernetes (GKE). Features include custom short URLs, analytics, and high scalability.',
      image: '/images/test.png',
      github: 'https://github.com/visheshgubrani/url-shortner',
      live: 'https://shrtnn.xyz/',
    },
    {
      title: 'Movies API',
      description:
        'An AI-powered Movies API built on AWS Serverless architecture. Generates movie summaries and recommendations using natural language processing.',
      image: '/images/movies-api.png',
      github: 'https://github.com/visheshgubrani/serverless-movies-api',
      live: 'https://themoviesapi.xyz/',
    },
    {
      title: 'AWS Cost Optimization',
      description:
        'A fully serverless resume website deployed on AWS, showcasing cloud architecture skills and CI/CD practices.',
      image: '/images/cloud-resume.jpg',
      github: 'https://github.com/visheshgubrani/cloud-resume-challenge',
      live: 'https://github.com/visheshgubrani/cloud-resume-challenge',
    },
    {
      title: 'Three tier Deployment',
      description:
        'A comprehensive three-tier application deployed on Amazon EKS. Demonstrates containerization, orchestration, and CI/CD pipeline integration.',
      image: '/images/todo-app.jpg',
      github: 'https://github.com/visheshgubrani/3-tier-deployment',
      live: 'https://github.com/visheshgubrani/3-tier-deployment',
    },
  ]

  return (
    <section className='bg-gray-900 text-white py-16 min-h-screen flex items-center justify-center w-full mx-auto max-w-4xl'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-12 text-center tracking-wide'>
          My Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {works.map((work, index) => (
            <div
              key={index}
              className='group bg-gray-800 p-6 rounded-xl shadow-lg transform transition duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-700'
            >
              <div className='relative w-full w-50 h-48 mb-6 overflow-hidden rounded-lg'>
                <Image
                  src={work.image}
                  alt={work.title}
                  layout='fill'
                  objectFit='cover'
                  className='transition-transform duration-300 group-hover:scale-110'
                />
              </div>
              <h3 className='text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors duration-300'>
                {work.title}
              </h3>
              <p className='text-gray-300 text-sm mb-4'>{work.description}</p>
              <div className='flex justify-between items-center'>
                <a
                  href={work.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300 text-sm'
                >
                  <Github className='w-5 h-5 mr-2' />
                  View on GitHub
                </a>
                <a
                  href={work.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300 text-sm'
                >
                  <ExternalLink className='w-5 h-5 mr-2' />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSectionComponent
