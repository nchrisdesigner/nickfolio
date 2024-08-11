import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react"

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}


const Card: FC<CardProps> = ({ children, title, className }) => {
  return (
    <div className={cn('relative bg-[#131313] w-full border-purple-900 border-[.5px] p-6 text-primary-foreground', className)}>
      <div className="flex flex-col gap-y-6 ">
        {
        title
          ?
          <div className="font-oswald">
            <p className="uppercase text-[1.8rem]">{title}</p>
          </div>
          :
          null
        }
      </div>
        {children}
    </div>
  )
}

export default Card