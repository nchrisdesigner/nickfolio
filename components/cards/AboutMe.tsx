import Card from "../ui/Card"
import { TfiBolt } from "react-icons/tfi"

const AboutMe = () => {
  return (
    <Card className="overflow-hidden relative" title="About me">
      <TfiBolt className="absolute text-[18.8rem] text-purple-500 right-[-8%] top-[-5%] opacity-25" />
      <div className="w-full py-4 relative">
        <p className='py-2 text-[14px] sm:text-[16px]'>My journey in the digital world began as an E-commerce Manager, where I mastered tools like Photoshop, Illustrator, Google Ads, and Analytics. This role laid the foundation for my expertise in both creative design and data-driven strategies. I then transitioned into teaching Web and Graphic Design, sharing my knowledge of tools like Figma, InDesign, and essential coding languages such as HTML and CSS with aspiring designers.
        </p>
        <p className='py-2 text-[14px] sm:text-[16px]'>
        With a strong foundation in design, I evolved into a Front-End Developer and Software Engineer, specializing in technologies like React, Next.js, TypeScript, and C#. My work now focuses on creating dynamic, user-centric web applications that seamlessly blend aesthetics and functionality.
        </p>
      </div>
    </Card>
  )
}

export default AboutMe