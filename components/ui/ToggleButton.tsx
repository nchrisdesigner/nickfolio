import { cn } from "@/lib/utils";

export default function ToggleButton({ open }: { open: boolean }) {
  return (
    <button className="fixed right-4 top-12 m-5 z-50 w-10 h-10 rounded-full ☐  cursor-pointer ">

        <div className="relative flex items-center justify-center">
          <div className="flex flex-col gap-y-2 w-[30vw] transform transition-all duration-300 origin-center overflow-hidden">
            <div
            className={cn("bg-white h-[2px] w-7 transform transition-all duration-300 origin-left",
              {
                "translate-x-10": open,
              }
            )} 
            />
            <div
            className={cn("bg-white h-[2px] w-7 transform transition-all duration-300 origin-left delay-75",
              {
                "translate-x-10": open,
              }
            )} 
            />
            <div
            className={cn("bg-white h-[2px] w-3 transform transition-all duration-300 origin-left delay-75",
              {
                "translate-x-10": open,
              }
            )} 
            />

          </div>
        </div>

    </button>
  )
}