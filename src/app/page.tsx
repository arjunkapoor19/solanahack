"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./page.module.scss"
import Image from "next/image"
import Lenis from "@studio-freight/lenis"
import { useTransform, useScroll, motion, MotionValue } from "framer-motion"
import Header from "@/components/header"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const images = [
  "1.jpg", "2.jpg", "3.jpg",
  "4.jpg", "5.jpg", "6.jpg",
  "7.jpg", "8.jpg", "9.jpg",
  "10.jpg", "11.jpg", "12.jpg"
]

export default function Home() {
  const gallery = useRef(null)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"]
  })
  

  const { height } = dimension
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect(() => {
    const lenis = new Lenis()

    const raf = (time: number): void => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf)
    resize()

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.spacer}>
  <motion.div 
    className="absolute inset-0 bg-gradient-to-br from-green-400/12 via-purple-500/12 to-white/12 blur-2xl z-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  />

  <div className="relative z-10 max-w-5xl mx-auto text-center pt-28 pb-20 px-4">
    <motion.h1 
      className="text-4xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      Powerful for developers.
    </motion.h1>

    <motion.h1 
      className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-100 to-white"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      Fast for everyone.
    </motion.h1>

    <motion.p 
      className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      Run scripts, code, and compute tasks on a censorship-resistant, low-cost distributed network powered by Solana.
    </motion.p>

    <motion.div 
      className="flex justify-center gap-4 flex-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <Link href="/dashboard">
        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/20">
          Launch App
        </Button>
      </Link>
      <Link href="#features">
        <Button variant="outline" size="lg" className="border-gray-500 text-black hover:border-white">
          Learn More
        </Button>
      </Link>
    </motion.div>
  </div>
</div>


      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      <div className={styles.spacer}>
      <section id="features" className="mt-20 max-w-4xl mx-auto text-center pt-10">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div>
            <h3 className="text-xl font-bold mb-2">Low-Cost Compute</h3>
            <p className="text-gray-100">Pay only for the compute resources you use. Microtransactions powered by Solana keep costs low.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Censorship Resistance</h3>
            <p className="text-gray-100">No centralized control. Jobs are run and verified across distributed compute nodes.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Privacy & Transparency</h3>
            <p className="text-gray-100">Jobs can be encrypted and verified using Zero-Knowledge Proofs without revealing code.</p>
          </div>
        </div>
      </section>
      </div>
    </main>
  )
}

interface ColumnProps {
  images: string[]
  y: MotionValue<number>
}

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => (
        <div key={i} className={styles.imageContainer}>
          <Image
            src={`/images/${src}`}
            alt={`image-${i}`}
            fill
          />
        </div>
      ))}
    </motion.div>
  )
}
