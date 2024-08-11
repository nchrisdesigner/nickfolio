'use client'
import FancyButton from "../ui/FancyButton"
import Profile from "../ui/Profile"
import FullScreenMenu from "./FullScreenMenu/FullScreenMenu"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoCloseSharp } from "react-icons/io5"
import { AnimatePresence } from "framer-motion"

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="w-full flex items-start justify-between">
      <Profile />
      <div className="fixed top-12 md:right-24 right-12 z-50 text-white" onClick={() => setOpenMenu(prev => !prev)}>
        {!openMenu ? <GiHamburgerMenu className="text-[2rem]" /> : <IoCloseSharp className="text-[2rem]" />}
      </div>

      {/* <div className="hidden md:flex items-center gap-4">
        <FancyButton text="Copy email" icon={<PiCopySimple />} />
      </div> */}
      <AnimatePresence mode="wait">
        {
          openMenu && <FullScreenMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        }
      </AnimatePresence>
    </div>
  )
}

export default Header