import AboutMe from "@/components/cards/AboutMe"
import Experience from "@/components/cards/Experience"
import Resume from "@/components/cards/Resume"
import Stack from "@/components/cards/Stack"
import Title from "@/components/ui/Title"

import { SiThreedotjs } from "react-icons/si"
import { SiTailwindcss } from "react-icons/si"
import { SiCssmodules } from "react-icons/si"
import { IoLogoSass } from "react-icons/io5"
import { BiLogoJavascript } from "react-icons/bi"
import { BiLogoTypescript } from "react-icons/bi"
import { SiHtmx } from "react-icons/si"
import { SiAstro } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { SiNextdotjs } from "react-icons/si"
import { TbBrandFramerMotion } from "react-icons/tb"

import { FaFigma } from "react-icons/fa"
import { SiAdobephotoshop } from "react-icons/si"
import { SiAdobeillustrator } from "react-icons/si"
import { SiAdobeindesign } from "react-icons/si"
import { SiAdobeaftereffects } from "react-icons/si"
import { SiAffinitydesigner } from "react-icons/si"
import { SiAffinityphoto } from "react-icons/si"
import { SiAffinitypublisher } from "react-icons/si"


const developmentStackData = [
  {
    id: 1,
    icon: <FaReact />,
    title: 'React'
  },
  {
    id: 2,
    icon: <SiNextdotjs />,
    title: 'Next'
  },
  {
    id: 3,
    icon: <BiLogoJavascript />,
    title: 'Javascript'
  },
  {
    id: 4,
    icon: <BiLogoTypescript />,
    title: 'Typescript'
  },
  {
    id: 5,
    icon: <SiAstro />,
    title: 'Astro'
  },
  {
    id: 6,
    icon: <SiHtmx />,
    title: 'HTMX'
  },
  {
    id: 7,
    icon: <SiCssmodules />,
    title: 'CSS Modules'
  },
  {
    id: 8,
    icon: <IoLogoSass />,
    title: 'Sass'
  },
  {
    id: 9,
    icon: <SiTailwindcss />,
    title: 'Tailwind'
  },
  {
    id: 10,
    icon: <TbBrandFramerMotion />,
    title: 'Framer Motion'
  },
  {
    id: 11,
    icon: <SiThreedotjs />,
    title: 'Three.js'
  },
]

const designStackData = [
  {
    id: 1,
    icon: <FaFigma />,
    title: 'Figma'
  },
  {
    id: 2,
    icon: <SiAdobephotoshop />,
    title: 'Photoshop'
  },
  {
    id: 3,
    icon: <SiAdobeillustrator />,
    title: 'Illustrator'
  },
  {
    id: 4,
    icon: <SiAdobeindesign />,
    title: 'In Design'
  },
  {
    id: 5,
    icon: <SiAdobeaftereffects />,
    title: 'In Design'
  },
  {
    id: 6,
    icon: <SiAffinitydesigner />,
    title: 'Affinity designer'
  },
  {
    id: 7,
    icon: <SiAffinityphoto />,
    title: 'Affinity photo'
  },
  {
    id: 8,
    icon: <SiAffinitypublisher />,
    title: 'Affinity publishe'
  },
]

const About = () => {
  return (
    <section id='experience' className="pt-24 px-3 lg:px-8  max-w-[1460px] mx-auto">
      <Title titleOne="About" titleTwo="Me" />

      <div className="space-y-4 py-8 relative">
        <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-purple-500 to-purple-900 blur-[100px] opacity-55 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>

        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 xl:grid-cols-3">
          <div>
            <h3 className="text-[4rem] leading-[1] font-bold font-oswald uppercase py-8">Blending Art and Technology for Impactful design</h3>
          </div>
          <Resume />
          <AboutMe />
        </div>

        <div className="space-y-4 grid sm:grid-cols-1 sm:grid md:grid-cols-2 md:gap-4 md:space-y-0">
          <Experience />
          <div className="grid gap-4">
            <Stack title="Development Stack" data={developmentStackData} />
            <Stack title="Design Stack" data={designStackData}/>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About