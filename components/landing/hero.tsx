import React from 'react'
import { motion } from "motion/react"
import { Sparkles, ArrowRight, Zap, Code2, Palette } from 'lucide-react'

const TailwindCSS = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C14.337,13.382,12.976,12,6.001,12z"/>
  </svg>
)

const BrowseComponentsButton = () => (
  <motion.button
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <span className="relative flex items-center gap-2">
      Browse Components
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </span>
  </motion.button>
)

const BrowseBlocksButton = () => (
  <motion.button
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    className="group px-8 py-4 bg-transparent border-2 border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-300 font-semibold rounded-2xl hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300"
  >
    <span className="flex items-center gap-2">
      Browse Blocks
      <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
    </span>
  </motion.button>
)

const Features = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="flex flex-wrap gap-6"
  >
    {[
      { icon: Zap, text: "Lightning Fast", color: "from-yellow-400 to-orange-500" },
      { icon: Code2, text: "Clean Code", color: "from-blue-400 to-cyan-500" },
      { icon: Palette, text: "Beautiful Design", color: "from-pink-400 to-purple-500" }
    ].map((feature, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05, y: -2 }}
        className="flex items-center gap-3 px-4 py-2 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/20 dark:border-white/10"
      >
        <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color} text-white`}>
          <feature.icon className="w-4 h-4" />
        </div>
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {feature.text}
        </span>
      </motion.div>
    ))}
  </motion.div>
)

const Card_05 = () => (
  <motion.div
    whileHover={{ scale: 1.05, rotateY: 5 }}
    className="w-full max-w-xs bg-gradient-to-br from-white/10 to-white/5 dark:from-black/20 dark:to-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-2xl"
  >
    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4" />
    <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">Premium Card</h3>
    <p className="text-sm text-zinc-600 dark:text-zinc-400">Beautiful glassmorphism design with hover effects</p>
  </motion.div>
)

const AICardGeneration = () => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="w-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 backdrop-blur-sm border border-indigo-300/30 dark:border-indigo-500/30 rounded-2xl p-6"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
        <Sparkles className="w-4 h-4 text-white" />
      </div>
      <span className="font-semibold text-zinc-800 dark:text-zinc-100">AI Generation</span>
    </div>
    <div className="space-y-2">
      <div className="h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full w-3/4" />
      <div className="h-2 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full w-1/2" />
    </div>
  </motion.div>
)

const AIInputAdvanced = () => (
  <div className="w-full max-w-md">
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative"
    >
      <input
        type="text"
        placeholder="Ask AI anything..."
        className="w-full px-6 py-4 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-white/20 rounded-2xl text-zinc-800 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white hover:shadow-lg transition-all"
      >
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  </div>
)

const GradientShineButton = () => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl overflow-hidden group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    <span className="relative">Shine Effect</span>
  </motion.button>
)

const CyberpunkButton = () => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="relative px-8 py-3 bg-black text-cyan-400 font-mono font-bold rounded-lg border-2 border-cyan-400 overflow-hidden group hover:text-black transition-colors duration-300"
  >
    <div className="absolute inset-0 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    <span className="relative flex items-center gap-2">
      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
      CYBERPUNK
    </span>
  </motion.button>
)

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/50 dark:from-black dark:via-zinc-900 dark:to-gray-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200/60 dark:bg-grid-slate-800/60 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 dark:from-purple-500/10 dark:to-cyan-500/10"
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full opacity-20"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(139, 92, 246, 0.3)' : 'rgba(236, 72, 153, 0.3)'}, transparent 70%)`,
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i * 10)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + i,
              ease: "easeInOut",
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className='relative mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 md:py-16 lg:py-20'>
        <div className='w-full lg:w-[45%] flex-col items-start text-left space-y-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-600 dark:text-purple-400 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Next-Gen UI Components</span>
            </motion.div>

            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] text-zinc-900 dark:text-zinc-100'>
              Welcome To
              <br />
              <span className='relative inline-block'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400'>
                  Future
                </span>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 blur-xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>
              <br />
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400'>
                Of Components
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='mt-8 text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-lg leading-relaxed'
            >
              Experience the next evolution of web design with our{" "}
              <span className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400'>
                100+ premium UI components
              </span>{" "}
              built with cutting-edge{" "}
              <span className='font-semibold text-cyan-600 dark:text-cyan-400'>
                Tailwind CSS
              </span>{" "}
              and{" "}
              <span className='font-semibold text-indigo-600 dark:text-indigo-400'>
                Shadcn
              </span>
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='flex flex-col justify-start w-full space-y-6'
          >
            <motion.div
              whileHover={{ x: 5 }}
              className='flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400'
            >
              <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <TailwindCSS className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className='font-medium text-emerald-700 dark:text-emerald-300'>
                  Tailwind CSS 4.0 Ready
                </span>
                <span className='inline-flex items-center px-2 py-1 text-xs font-bold text-emerald-800 dark:text-emerald-200 bg-emerald-200 dark:bg-emerald-800 rounded-full'>
                  <Sparkles className='h-3 w-3 mr-1' />
                  NEW
                </span>
              </div>
            </motion.div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4'>
              <BrowseComponentsButton />
              <BrowseBlocksButton />
            </div>
          </motion.div>

          <Features />
        </div>

        <div className='w-full lg:w-[55%] flex flex-col justify-between gap-8 lg:pl-8'>
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center'
          >
            <div className='w-full flex flex-col items-center justify-center space-y-4'>
              <div className="flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span className='text-sm font-medium text-purple-600 dark:text-purple-400'>
                  Premium Cards
                </span>
              </div>
              <Card_05/>
            </div>
            
            <div className='w-full max-w-[600px] bg-transparent'>
              <div className="flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4 w-fit mx-auto">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                <span className='text-sm font-medium text-indigo-600 dark:text-indigo-400'>
                  AI Components
                </span>
              </div>
              <AICardGeneration/>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full"
          >
            <div className="flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4 w-fit mx-auto">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                AI Chat Interface
              </span>
            </div>
            <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 dark:from-black/20 dark:to-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 flex items-center justify-center shadow-2xl">
              <AIInputAdvanced/>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className='w-full grid grid-cols-1 md:grid-cols-2 gap-8'
          >
            <div className='w-full'>
              <div className="flex items-center gap-2 px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full mb-4 w-fit mx-auto">
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                <span className='text-sm font-medium text-pink-600 dark:text-pink-400'>
                  Interactive Buttons
                </span>
              </div>
            </div>

            <div className='w-full h-48 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 dark:from-black/20 dark:to-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 flex flex-col gap-4 items-center justify-center shadow-2xl'>
              <GradientShineButton/>
              <CyberpunkButton/>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection