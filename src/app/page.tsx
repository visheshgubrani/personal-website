'use client'

import Link from 'next/link'
import { Github, Twitter } from 'lucide-react'

const Homepage = () => {
  return (
    <div className=''>
      <div className='flex-grow max-w-4xl mx-auto p-8'>
        <header className='mb-12'>
          <div className='bg-gray-800 p-6 rounded-lg mb-6 shadow-lg'>
            <p className='text-lg'>
              Hello, I&apos;m an indie app developer based in{' '}
              <span className='text-teal-400'>[India]</span>!
            </p>
          </div>
          <h1 className='text-4xl font-extrabold text-white mb-3'>
            Vishesh Gubrani
          </h1>
          <p className='text-xl text-teal-400'>
            Digital Craftsman ( Developer / Cloud Engineer )
          </p>
        </header>

        <section className='mb-12'>
          <h2 className='text-2xl font-bold text-white mb-4'>Work</h2>
          <p className='mb-6 text-lg leading-relaxed'>
            I&apos;m Vishesh, a DevOps Engineer based in{'  '}
            <span className='text-teal-400'>[India] </span>
            with a passion for building digital solutions. I have expertise in
            launching products, from design and planning to solving real-life
            challenges with code. When offline, I enjoy working out and
            listening to songs. Currently, I&apos;m building my own product
            called <span className='text-teal-400'>[SubManager]</span>.
          </p>
          <Link
            href='/portfolio'
            className='bg-teal-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-teal-600 transition-all transform hover:scale-105'
          >
            My Portfolio
          </Link>
        </section>

        <section className='mb-12'>
          <h2 className='text-2xl font-bold text-white mb-4'>Bio</h2>
          <div className='space-y-4'>
            <div className='flex space-x-4'>
              <span className='text-teal-400 font-semibold'>2000</span>
              <span>
                Born in <span className='text-teal-400'>[Delhi], [India]</span>
              </span>
            </div>
            <div className='flex space-x-4'>
              <span className='text-teal-400 font-semibold'>2019</span>
              <span>Started Trading Stocks for a living</span>
            </div>
            <div className='flex space-x-4'>
              <span className='text-teal-400 font-semibold'>2025</span>
              <span>
                Completed the Master&apos;s Program in the Computer Science
              </span>
            </div>
          </div>
        </section>

        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-white mb-4'>I ♥</h2>
          <p className='text-lg'>
            Art, Music, Cooking, Cloud, Machine Learning
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-white mb-4'>On the Web</h2>
          <div className='space-y-4'>
            <a
              href='https://github.com/visheshgubrani'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center text-teal-400 hover:text-white transition-colors'
            >
              <Github className='w-5 h-5 mr-2' />
              @visheshgubrani
            </a>

            <a
              href='https://twitter.com/visheshgubrani'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center text-teal-400 hover:text-white transition-colors'
            >
              <Twitter className='w-5 h-5 mr-2' />
              @visheshgubrani
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Homepage
