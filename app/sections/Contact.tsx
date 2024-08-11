'use client'
import ContactCard from '@/components/cards/ContactCard'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import TextArea from '@/components/ui/TextArea'
import Title from '@/components/ui/Title'
import { RiMailSendLine } from "react-icons/ri"
import { RiSendPlaneLine } from "react-icons/ri"
import { IoMdCheckmark } from "react-icons/io"
import { PiCopySimple } from "react-icons/pi"
import ServiceOption from '@/components/ui/ServiceOption'
import { FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const servicesOptions = [
  {
    id: 'Web Design',
    title: 'Web Design'
  },
  {
    id: 'Full Website',
    title: 'Full Website'
  },
  {
    id: 'Logo Design',
    title: 'Logo Design'
  },
  {
    id: '1 on 1 Teaching',
    title: '1 on 1 Teaching'
  },
  {
    id: 'General Collaboration',
    title: 'General Collaboration'
  },
]

const budgetOptions = [
  {
    id: '< 500€',
    title: '< 500€'
  },
  {
    id: '500€ - 1000€',
    title: '500€ - 1000€'
  },
  {
    id: '1000€ - 2000€',
    title: '1000€ - 2000€'
  },
  {
    id: '> 2000€',
    title: '> 2000€'
  },
]

const Contact = () => {
  const [isSent, setIsSent] = useState('idle')
  const [services, setServices] = useState<string[]>([])
  const [budgets, setBudgets] = useState<string[]>([])

  const formRef = useRef<HTMLFormElement>(null)

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (formRef.current) {
      emailjs.sendForm(
        "service_dii7nik",
        "template_dt9rfbl",
        formRef.current,
        "7EuFAWr-lPLoE1hqk"
      )
        .then((res) => {
          console.log(res.text)
          console.log('Email sent successfully');
        },
          (error) => {
            console.log(error.text);
          })
    }

  }

  const handleSubmit = () => {
    if (isSent === 'idle') {
      setIsSent('loading')
      setTimeout(() => setIsSent('sent'), 2000)
    }
  }

  return (
    <section id="contact" className='pt-24 px-3 lg:px-8 mt-8 mb-16 relative overflow-hidden'>
      <Title titleOne='Contact' titleTwo='Me' />

      <Card className='overflow-hidden relative'>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[linear-gradient(90deg,_#382a59,#2a1d48)] blur-[200px] right-0"></div>

        <div className='grid md:gap-x-4 gap-x-0 grid-cols-1 lg:grid-cols-3 '>
          <Card>
            <div className='flex flex-col gap-8 py-4'>
              <ContactCard title="Let's talk about business" icon={<PiCopySimple />} text="nchrisdesigner@gmail.com" btnText="Copy Email" />
            </div>
          </Card>

          <form ref={formRef} onSubmit={sendEmail} className='col-span-2 md:mt-0 mt-6 overflow-hidden'>
            <div className='absolute'></div>

            <div className="flex flex-col gap-2 lg:flex-row items-center justify-between ">
              <Input name='name' type="text" placeholder='Full Name' />
              <Input name='email' type="email" placeholder='Email Addresss' />
            </div>

            <div className="flex items-center justify-between ">
              <Input name='subject' type="text" placeholder='Subject' />
            </div>

            {/* Services selection */}
            <div className="flex flex-col my-6">
              <h2 className="font-bold text-lg">What services are you in need for?</h2>
              <div className="flex flex-wrap items-center justify-start my-4 gap-8">
                {servicesOptions.map((service, index) => {
                  return (
                    <div key={index}>
                      <ServiceOption
                        type="checkbox"
                        id={service.id}
                        title={service.title}
                        selectedOptions={services}
                        setSelectedOptions={setServices}
                        allowMultiple
                        name='service'
                      />
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Budget Selection */}
            <div className="flex flex-col my-6">
              <h2 className="font-bold text-lg">What is your budget?</h2>
              <div className="flex flex-wrap items-center justify-start my-4 gap-8">
                {budgetOptions.map((budget, index) => {
                  return (
                    <div key={index}>
                      <ServiceOption
                        type="radio"
                        id={budget.id}
                        title={budget.title}
                        selectedOptions={budgets}
                        setSelectedOptions={setBudgets}
                        allowMultiple={false}
                        name='budget'
                      />
                    </div>
                  )
                })}
              </div>
            </div>

            <TextArea name='message' placeholder="Tell us about your ideas" />

            <div className='hidden'>
              <input type="text" defaultValue={services.join(', ')} hidden name='services' />
              <input type="text" defaultValue={budgets.join(', ')} hidden name='budget' />
            </div>

            <div className=''>
              <button className=' flex justify-start items-center py-3 px-8 gap-4 bg-black border-[1px] border-purple-800' type='submit' onClick={handleSubmit}>
                {isSent === 'idle' && (<span className='flex gap-2 items-center'>Send <RiSendPlaneLine /></span>)}
                {isSent === 'loading' && (<span className='flex gap-2 items-center'>Sending... <RiMailSendLine /></span>)}
                {isSent === 'sent' && (<span className='flex gap-2 items-center'>Successfully sent <IoMdCheckmark className='text-green-400' /></span>)}
              </button>
            </div>
          </form>
        </div>
      </Card>
    </section >
  )
}

export default Contact