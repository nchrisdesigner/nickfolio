import { FC, ReactNode } from "react";

interface ContactProps {
  title: string;
  icon: ReactNode;
  text: string;
  btnText: string;
}

const ContactCard: FC<ContactProps> = ({ title, icon, text, btnText }) => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="md:text-[5vw] font-oswald text-[10vw] leading-[.9] font-bold text-purple-500 uppercase">{title}</h3>
      <div className="flex flex-col gap-3 items-start">
        {/* <p className="text-[1.2rem]">{text}</p> */}
        <p>You are one step away from being average</p>
        {/* <button className="flex items-center gap-2 border-[.5px] border-white py-2 px-6">{btnText} {icon}</button> */}
      </div>
    </div>
  )
}

export default ContactCard

//service_dii7nik