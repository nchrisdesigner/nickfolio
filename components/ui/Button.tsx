import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, ReactNode } from "react"

interface ButtonProps{
  children: ReactNode;
  link?: string;
  isIcon?: boolean;
  className?: string;
}

const Button:FC<ButtonProps> = ({children, link, isIcon, className}) => {
  return (
    <button>
      {
        link
        ?
        <Link href="#" target="_blank" className="w-10 h-10 cursor-pointer">
          <ButtonBody className={className} isIcon={isIcon}>
            {children}
          </ButtonBody>
        </Link>
        : (
          <ButtonBody className={className} isIcon={isIcon}>
            {children}
          </ButtonBody>
        )
      }

    </button>
  )
}

interface ButtonBodyProps{
  children: ReactNode;
  isIcon?: boolean;
  className?: string;
}

const ButtonBody:FC<ButtonBodyProps>=({children, className, isIcon})=> {
  return (
    <div className="cursor-pointer w-auto h-full">
      <div className={
        cn('flex items-center justify-center gap-2 bg-black border-[1px] border-purple-800 select-none whitespace-nowrap text-primary-foreground text-sm font-medium hover:bg-white hover:text-purple-900 transition-colors duration-300 py-2 ', 
        className,
        isIcon ? 'h-10 w-10 text-xl px-0' : 'h-full w-max px-8'
        )}>
          {children}
      </div>
      
    </div>
  )
}

export default Button