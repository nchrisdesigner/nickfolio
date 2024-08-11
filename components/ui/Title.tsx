import { FC } from "react";
import { HeadingAnimatedSvg } from "./heading-animated-svg";
import SvgCurve from "./svg-curve";

interface TitleProps{
  titleOne: string;
  titleTwo: string;
}

const Title:FC<TitleProps> = ({titleOne, titleTwo}) => {
  return (
    <div className="relative my-10 px-2 ">
      <h2 className="font-oswald lg:text-[12vw] text-[17vw]  font-bold flex items-center md:gap-6 gap-0">
        <span className="font-bold">{titleOne}</span>
        <span className="ml-4  scale-[0.7] md:scale-[1]"><HeadingAnimatedSvg text='Creative React Developer and UI Designer'/></span>
        <span className="italic">{titleTwo}</span>
      </h2>
      <SvgCurve />
    </div>
  )
}

export default Title