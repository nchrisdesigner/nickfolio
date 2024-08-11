'use client'
import { motion } from "framer-motion";
import { FC } from "react";
import { scale } from "./animation";
import Link from "next/link";

interface NavLinkProps{
  data: {
    title: string;
    href: string;
    index: number;
  }
}
const slide = {
  initial: { x: 80 },
  enter: (i:number) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i:number) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
}

const NavLink:FC<NavLinkProps> = ({data}) => {
  const {title, href, index} = data
  
  return (
    <motion.div 
    variants={slide}
    custom={index}
    initial='initial'
    animate='enter'
    exit='exit'
    className="relative flex items-center"
    >
    <motion.div variants={scale} className="hover:text-purple-700 transition-all duration-300">
      <Link href={href} className="sm:text-[8vw] text-[18vw] uppercase leading-[96%] font-bold" >{title}</Link>

    </motion.div>  
    </motion.div>
  )
}

export default NavLink