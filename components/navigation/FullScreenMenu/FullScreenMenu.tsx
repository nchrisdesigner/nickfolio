'use client'
import { motion } from "framer-motion"
import { menuSlide } from "./animation"
import Curve from "./Curve"
import Profile from "@/components/ui/Profile"
import NavLink from "./NavLink"
import { FC } from "react"
import Card from "@/components/ui/Card"
import ContactCard from "@/components/cards/ContactCard"
import { PiCopySimple } from "react-icons/pi"


const navItems = [
  {
    title: 'Home',
    href: '/#'
  },
  {
    title: 'About',
    href: '/#experience'
  },
  {
    title: 'Contact',
    href: '/#contact'
  },
]

interface FullScreenMenuProps{
  openMenu: boolean;
  setOpenMenu: (openMenu:boolean) => void
}

const FullScreenMenu:FC<FullScreenMenuProps> = ({openMenu, setOpenMenu}) => {
  return (
    <motion.div
      variants={menuSlide}
      initial='initial'
      animate='enter'
      exit='exit'
      className="h-screen w-full bg-black fixed top-0 right-0 z-40 ">
      <div className="relative w-full max-w-[95%] mx-auto">
        <div className="absolute top-12 left-12">
          <Profile />
        </div>
      </div>

      <div className="absolute bottom-32 w-full lg:pl-[5%] font-oswald">
        <div
          className="grid relative"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          <div className="pl-4 flex flex-col justify-end">
            {
              navItems.map((item, index) => {
                return (
                  <div key={index} onClick={() => setOpenMenu(false)}>

                    <NavLink
                      data={{ ...item, index }}
                    />
                  </div>
                )
              })
            }
          </div>
        <Card className="bg-transparent border-none hidden md:block">
            <div className='flex flex-col gap-8 py-4'>
              <ContactCard title="Let's talk about business" icon={<PiCopySimple />} text="nchrisdesigner@gmail.com" btnText="Copy Email" />
            </div>
          </Card>
        </div>
      </div>
      <Curve />
    </motion.div>
  )
}

export default FullScreenMenu