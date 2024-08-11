import Header from "@/components/navigation/Header"
import { FiArrowUpRight } from "react-icons/fi"


const Landing = () => {
  return (
    <header id='home' className="relative h-screen overflow-x-hidden p-8 flex flex-col gap-16 max-w-[1360px] mx-auto">
      
      <Header />

      <div className="flex flex-col gap-4 mt-6">
        <h1 className="flex flex-col text-5xl md:text-8xl sm:text-6xl font-oswald font-bold">
          <span>I SOLVE PROBLEMS</span>
          <span>THROUGH REMARKABLE</span>
          <span>DESIGN</span>
        </h1>
        <p className="max-w-[60ch] text-slate-100 leading-5 sm:leading-6">I am a professional Creative Front End Developer as well as a UI Designer. I specialize in creating high-quality, pixel perfect and responsive websites, as well as exceptional graphics that enable a strong online presence for businesses and individuals.</p>
      </div>

      <div>
        <button className="flex items-center gap-2">
          <a className="text-xl transition-all duration-300 hover:text-teal-100" href="#experience">My Experience</a>
          <FiArrowUpRight className="text-3xl p-1 bg-teal-500 rounded-full" />
        </button>
      </div>

    </header>
  )
}

export default Landing