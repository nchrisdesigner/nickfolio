import { FC, ReactNode } from "react";

interface ButtonProps{
  text: string;
  icon: ReactNode;
}

const FancyButton:FC<ButtonProps> = ({text,  icon}) => {
  return (
    <a href="#" className="fancy-btn">
      <div className="group bg-black hover:bg-transparent text-primary-foreground hover:text-black rounded-[100em] py-[16px] px-[32px] flex items-center gap-2 font-bold text-lg cursor-pointer transition-75 transition-all">
        <span className="font-light">{text}</span>
        <span className="group-hover:translate-x-[.75vw] text-2xl transition-transform duration-100">{icon}</span>
      </div>
    </a>
  )
}

export default FancyButton