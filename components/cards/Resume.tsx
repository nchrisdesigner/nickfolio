'use client'
import Card from '../ui/Card'
import { FaGithub, FaDribbble, FaLinkedin } from "react-icons/fa"
import { MdOutlineFileDownload } from "react-icons/md"
import { GrFormCheckmark } from "react-icons/gr"
import { useState } from 'react'

const linksArray = [
  {
    id: 1,
    icon: <FaGithub />,
    link: 'https://github.com/nchrisdesigner/'
  },
  {
    id: 2,
    icon: <FaDribbble />,
    link: 'https://dribbble.com/nchrisdesigner'
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/nchrisdesigner/'
  },

]

const Resume = () => {
  const [isDownloaded, setIsDownloaded] = useState(false)

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/my-resume.pdf'; 
    link.download = 'my-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsDownloaded(true)
  }

  return (
    <Card title="Resume">
      <div className="w-full py-4 relative flex flex-col justify-center h-full gap-4">
        <h3 className='text-xl font-bold text-green-300'>Computer Science Graduate</h3>
        
        <p className='text-[14px] sm:text-[16px]'>I'm a Computer Science graduate with expertise in graphic design and front-end development. Skilled in tools like Photoshop, Illustrator, and Figma, I create web mockups, logos, and 3D web designs using Three.js. With a strong foundation in JavaScript, React, and CSS animations, I blend creativity and technology to deliver engaging digital experiences.
        </p>
        <div className='flex sm:flex-row flex-col gap-4 sm:items-center items-start justify-between mt-4'>
          <div className='flex gap-3 '>
            {linksArray.map((link, index) => {
              return (
                <a key={link.id} href={link.link} target='_blank' className='text-3xl'>{link.icon}</a>
              )
            })}
          </div>

          <button onClick={handleDownload} className='flex items-center gap-2 text-md border-purple-600 border-[1px] py-2 px-4 rounded-sm hover:bg-purple-900 transition-all duration-300 hover:border-white'>
            {
              isDownloaded ? <GrFormCheckmark className='text-2xl text-green-400' /> : <MdOutlineFileDownload className='text-2xl' />
            }
             {
              isDownloaded ? 'Downloaded' : 'My Resume'
            }
            
          </button>

        </div>




      </div>
    </Card>
  )
}

export default Resume