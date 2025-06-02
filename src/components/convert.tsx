'use client'
import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const ConvertCard = () => {
  return (
    <motion.div
      className='max-w-sm mx-auto p-4 rounded-3xl bg-black/90 text-white space-y-4'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      {/* Sell Section */}
      <motion.div
        className='rounded-2xl border border-white/10 p-4'
        variants={fadeInUp}
      >
        <div className='flex justify-between items-center text-sm text-gray-300 mb-1'>
          <span>Convert</span>
          <span className='text-xs'>.py</span>
        </div>
        <div className='flex justify-between items-center'>
          <input
            type='text'
            placeholder='Add Code'
            className='bg-transparent text-3xl font-light outline-none w-full'
          />
          <button className='flex items-center gap-2 bg-black border border-white/20 px-3 py-1 rounded-full text-sm'>
            Solana
            <ChevronDownIcon className='w-4 h-4' />
          </button>
        </div>
      </motion.div>

      {/* Arrow Divider */}
      <motion.div
        className='flex justify-center -my-2 z-10 relative'
        variants={fadeInUp}
      >
        <div className='bg-black border border-white/10 rounded-full p-1'>
          <ChevronDownIcon className='w-5 h-5 text-white' />
        </div>
      </motion.div>

      {/* Buy Section */}
      <motion.div
        className='rounded-2xl bg-neutral-900 p-4'
        variants={fadeInUp}
      >
        <div className='text-sm text-gray-300 mb-4'>Check Time</div>
        <button className=' bg-blue-500 hover:bg-blue-600 px-4 py-1.5 rounded-full text-sm font-medium text-black'>
          Click Me
        </button>
      </motion.div>

      {/* Submit Button */}
      <motion.button
        className='w-full bg-blue-900 hover:bg-blue-800 hover:text-blue-200 transition text-blue-400 font-semibold py-3 rounded-2xl'
        variants={fadeInUp}
      >
        Get started
      </motion.button>
    </motion.div>
  )
}

export default ConvertCard
