import { FC, ReactNode } from "react"

interface TextAreaProps {
  icon?: ReactNode;
  placeholder: string;
  name: string;
}
const TextArea: FC<TextAreaProps> = ({ icon, placeholder, name }) => {
  return (
    <div className="relative w-full my-4">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none ">
        {icon}
      </div>
      <textarea
      name={name}
      placeholder={placeholder} 
      className="bg-[#131313] border-purple-900 border-[.5px] text-primary-foreground text-sm ps-10 px-2.5 pt-4 focus:outline-none w-full" />
    </div>
  )
}

export default TextArea