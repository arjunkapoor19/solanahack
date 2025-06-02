'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='w-full bg-gradient-to-r from-green-400/12 via-purple-500/12 to-white/12 shadow-sm rounded-xl py-4 px-6 flex items-center justify-between z-50 relative'
        >
            {/* Left: Logo */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className='font-bold text-lg text-white tracking-tight'
            >
                <Link href='/'>
                    De<span className='font-normal'>Compute</span>
                </Link>
            </motion.div>

            {/* Center: Navigation Links */}
            <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className='hidden md:flex space-x-8 font-medium text-white z-50'
            >
                <li>
                    <Link href='/features' className='hover:text-orange-600 transition'>
                        Features
                    </Link>
                </li>
                <li>
                    <Link href='/developer' className='hover:text-orange-600 transition'>
                        Developer
                    </Link>
                </li>
                <li>
                    <Link href='/cryptocurrencies' className='hover:text-orange-600 transition'>
                        Cryptocurrencies
                    </Link>
                </li>
            </motion.ul>

            {/* Right: Button */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className='z-50'
            >
                <Link href='https://www.google.com'>
                    <button className='bg-black text-white text-sm px-5 py-2 rounded-full hover:bg-gray-800 transition  hover:cursor-pointer'>
                        COMPUTE NOW
                    </button>
                </Link>
            </motion.div>
        </motion.nav>
    )
}

export default Header
