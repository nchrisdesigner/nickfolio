'use client'

import { FC, useState } from "react";



interface ServiceOptionProps {

  type: "checkbox" | "radio";
  id: string;
  title: string;
  selectedOptions: string[];
  setSelectedOptions: (newValue: string[]) => void;
  allowMultiple?: boolean;
  name: string;
}


const ServiceOption: FC<ServiceOptionProps> = ({ type, name, id, title, selectedOptions, setSelectedOptions, allowMultiple }) => {

  const handleOnChange = (option: string) => {
    if (allowMultiple) {
      const currentIndex = selectedOptions.indexOf(option)
      const newSelectedOptions = [...selectedOptions]
      if (currentIndex === -1) {
        newSelectedOptions.push(option)
      }
      else {
        newSelectedOptions.splice(currentIndex, 1)
      }

      setSelectedOptions(newSelectedOptions)
    }
    else {
      const newSelectedOptions = [option]
      setSelectedOptions(newSelectedOptions)
    }
  }

  return (
    <div className="flex f gap-2 items-center">
      <label htmlFor={id}>{title}</label>
      <input
        name={name}
        id={id}
        type={type}
        checked={selectedOptions.includes(id)}
        className="select-box w-[1rem] h-[1rem]"
        onChange={() => handleOnChange(id)} />
    </div>

  )
}

export default ServiceOption