'use client'
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GrMultiple } from "react-icons/gr"

const timelineData = [
  {
    id: 1,
    title: 'Digital Designer',
    subtitle: 'ariane.gr',
    date: '2019-2022',
    tag: ' E-commerce Manager'
  },
  {
    id: 2,
    title: 'Web Designer',
    subtitle: 'One Dealer',
    date: '2022-2023'
  },
  {
    id: 3,
    title: 'React Developer',
    subtitle: 'Dotsoft',
    date: '2023-2024'
  },
  {
    id: 4,
    title: 'UI Designer',
    subtitle: 'Epsilonnet',
    date: '2024-Pres.'
  },
  {
    id: 5,
    title: 'Front End Developer',
    subtitle: 'NCSR Demokritos',
    date: '2022-Pres.'
  },
  {
    id: 6,
    title: 'Instructor',
    subtitle: 'IEK Alfa Thessaloniki',
    date: '2020-2023'
  },

]

const TimeLine = () => {
  const ref = useRef(null)
  const isInView = useInView(
    ref,
    {
      margin: "0px 0px -200px 0px",
    once:true
  })
  return (
    <div ref={ref} className="flex flex-col gap-6 my-4 relative">
      <GrMultiple className="absolute text-[15.6rem] top-[-15%] right-0 text-purple-400 opacity-[.10]" />

      {timelineData.map(({ id, title, date, subtitle, tag }, index) => {
        return (
          // <TimelineItem {...item} i={index} />
          <motion.div
            key={id}
            className="flex flex-wrap justify-start relative items-center md:gap-8 gap-6"
            animate={{
              x: isInView ? 0 : -20,
              opacity: isInView ? 1 : 0
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.2
            }}
          >
            <p className="text-[12px] border-[.5px] border-green-300 text-green-300 py-1 px-2 rounded-md">{date}</p>
            <div>
              {/* <span className="tag">{tag}</span> */}
              <h3 className="font-bold text-sm">{title}</h3>
              <h4 className="text-xs font-light text-slate-100">{subtitle}</h4>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default TimeLine
