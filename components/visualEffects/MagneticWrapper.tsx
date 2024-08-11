'use client'
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FC, ReactNode, useRef, useState } from "react"

interface MagneticWrapperProps {
  className?: string;
  children: ReactNode;
}

const MagneticWrapper: FC<MagneticWrapperProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })


  const handleMouse = (e: MouseEvent) => {
    const { clientX, clientY } = e
    console.log(clientX, clientY)
    const boundingRect = ref.current?.getBoundingClientRect()
    if (boundingRect) {
      const { width, height, top, left } = boundingRect
      const middleX = clientX - (left + width / 2)
      const middleY = clientY - (top + height / 2)
      setPosition({ x: middleX, y: middleY })
    }
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      className={cn("relative", className)}
      animate={{
        x:position.x, y:position.y
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  )
}

export default MagneticWrapper