'use client'

import { ArrowUpRight, Bot, PartyPopper, Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { Link as ViewTransitionsLink } from 'next-view-transitions'
import { Badge } from '../ui/badge'
import { ThemeToggle } from '../ui/theme-toggle'
import { cn } from '@/lib/utils'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/docs/components/avatar-picker", label: "Components" },
    { href: "/pricing", label: "Pricing" },
    { 
      href: "#", 
      label: "Templates",
      badge: <Badge variant="brand">new</Badge>
    }
  ]

  return (
    <>
      {/* Top Announcement Bar */}
      <div className='w-full p-2.5 bg-white dark:bg-black/5 border-b border-zinc-200 dark:border-zinc-800'>
        <Link 
          href="#" 
          target='_blank' 
          className='flex items-center justify-center gap-2 hover:opacity-90 transition-opacity'
        >
          <span className='flex items-center gap-2'>
            <PartyPopper className='w-3.5 h-3.5' />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-sm'>
              Explore New Components
            </span>
          </span>
          <div className='group relative inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-zinc-900 dark:bg-zinc-100 transition-colors'>
            <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 group-hover:opacity-80 blur-sm transition-opacity duration-500' />
            <div className='relative z-10 flex items-center gap-2'>
              <span className='text-white dark:text-zinc-900 text-sm'>
                Eatech Pro
              </span>
              <ArrowUpRight className='w-3.5 h-3.5 text-white/90 dark:text-zinc-900/90' />
            </div>
          </div>
        </Link>
      </div>

      {/* Main Header */}
      <header className='sticky top-0 left-0 right-0 z-50'>
        <div className='bg-white/90 dark:bg-black/5 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800'>
          <div className='container mx-auto px-4 sm:px-6'>
            <div className='flex items-center justify-between h-16'>
              {/* Logo */}
              <div className='flex items-center'>
                <Link href="/" className='flex items-center gap-2'>
                  <Bot className='w-6 h-6 text-green-500 dark:text-green-400' />
                  <span className='hidden sm:block font-semibold text-lg'>
                    Eatech.here
                  </span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className='hidden md:flex items-center space-x-8'>
                {navLinks.map((link) => (
                  <ViewTransitionsLink
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-sm font-medium transition-colors',
                      'text-zinc-600 hover:text-zinc-900',
                      'dark:text-zinc-400 dark:hover:text-zinc-100',
                      'flex items-center gap-1'
                    )}
                  >
                    {link.label}
                    {link.badge}
                  </ViewTransitionsLink>
                ))}
              </nav>

              {/* Right Side Controls */}
              <div className='flex items-center gap-4'>
                <ThemeToggle />
                
                {/* Mobile Menu Button */}
                <button
                  type="button"
                  className='md:hidden p-2 rounded-md text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X className='h-5 w-5' />
                  ) : (
                    <Menu className='h-5 w-5' />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={cn(
            'md:hidden transition-all duration-300 ease-in-out overflow-hidden',
            mobileMenuOpen ? 'max-h-96' : 'max-h-0'
          )}>
            <div className='px-4 pb-4 space-y-4'>
              {navLinks.map((link) => (
                <ViewTransitionsLink
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium',
                    'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100',
                    'dark:text-zinc-300 dark:hover:text-zinc-100 dark:hover:bg-zinc-800',
                    'flex items-center gap-2'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                  {link.badge}
                </ViewTransitionsLink>
              ))}
              <div className='px-3 py-2'>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header