"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./page.module.scss"
import Image from "next/image"
import Lenis from "@studio-freight/lenis"
import { useTransform, useScroll, motion, MotionValue } from "framer-motion"
import Header from "@/components/header"
import ConvertCard from "@/components/convert"

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
        <div className="p-5">
      <Header />
        </div>
      <div className={styles.spacer}>
  <motion.div 
    className="absolute inset-0 bg-gradient-to-br from-green-400/12 via-purple-500/12 to-white/12 blur-2xl z-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  />

  <div className="relative z-10 max-w-5xl mx-auto text-center pt-15 pb-20 px-4">
    <h1
  className="
    text-5xl 
    font-light 
    text-white
    mb-12
    tracking-tight
    leading-tight
    select-none
  "
>
  Check Time Need to Compute your Code
</h1>
    <ConvertCard />
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
