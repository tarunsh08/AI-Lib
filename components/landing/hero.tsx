import React from 'react'
import { motion } from "motion/react"
import { Sparkles } from 'lucide-react'
import TailwindCSS from '../icons/tailwind-css'
import { BrowseComponentsButton } from '../ui/browse-button'
import { BrowseBlocksButton } from '../ui/browse-blocks'
import Features from './features'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className='mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 md:py-16 lg:py-20'>
      <div className='w-full lg:w-[45%] flex-col items-start text-left space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-light leading-[1.1] text-zinc-900 dark:text-zinc-100'>
            Welcome To
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400'>
              World
              <br />
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400'>
                Of components
              </span>
            </span>
          </h1>
          <p className='mt-6 text-base md:text-xl text-zinc-700 dark:text-zinc-300 max-w-lg'>
            A curated collection of{" "}
            <span className='font-semibold '>
              100+ premium UI components built with
            </span>{" "}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400'>
              Tailwind CSS
            </span>{" "}
            and{" "}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400'>
              Shadcn
            </span>{" "}
            for modern React and Next.js applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex flex-col justify-start w-full'
        >
          <span className='text-sm text-zinc-500 dark:text-zinc-300 pb-3 text-start flex items-center gap-2'>
            <TailwindCSS className="w-4 h-4" />
            <span className='gap-1.5'>
              Now Updated for Tailwind CSS 4.0!{" "}
              <span className='inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300'>
                <Sparkles className='h-3 w-3 mr-1' />
                New
              </span>
            </span>
          </span>

          <div className='flex  flex-col sm:flex-row items-start sm:items-center justify-start gap-3'>
            <BrowseComponentsButton />
            <BrowseBlocksButton />
          </div>
        </motion.div>

        <Features />
      </div>

      <div className='w-full lg:w-[55%] flex flex-col  justify-between gap-6 lg:pl-8'>
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center'
        >
          <div className='w-full flex flex-col items-center justify-center'>
            <span className='text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2'>
              Card
            </span>
            {/* <Card /> */}
          </div>
          <div className='w-full max-w-[600px] bg-transparent'>
            <span className='text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2'>
              Components
            </span>

            {/* <ActionSearchBar /> */}

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
            AI Chat
          </span>
          <div className="w-full h-48 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
            {/* <AIInput_04 /> */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'
        >

          <div className='w-full'>
            <span className='text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2'>
              Buttons
            </span>
          </div>

          <div className='w-full h-48 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col gap-3 items-center justify-center'>
          <Link href={"/docs/components/button"}>
          
          </Link>
          <Link href={"/docs/components/button"}>
          
          </Link>
          </div>

          <div className='w-full'>
            <span className='text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2'>
              Input
            </span>

            <Link href={"/docs/components/input"}>
          
          </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
