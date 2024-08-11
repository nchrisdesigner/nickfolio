import Landing from "./sections/Landing";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="w-full relative">
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[linear-gradient(90deg,_#382a59,#4c377d)] blur-[200px]"></div>
      <Landing />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
