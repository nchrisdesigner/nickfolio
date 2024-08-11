import { FC, ReactNode } from "react"

interface InputProps {
  icon?: ReactNode;
  placeholder: string;
  type: 'email' | 'text' | 'password';
  name: string;
}

const Input: FC<InputProps> = ({ icon, placeholder, type, name }) => {
  return (
    <div className="relative w-full my-4">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none ">
        {icon}
      </div>
      <input name={name} type={type} placeholder={placeholder} className="bg-[#131313] border-purple-900 border-[.5px] text-primary-foreground text-sm ps-10 px-2.5 py-4 focus:outline-none w-full" />
    </div>
  )
}

export default Input