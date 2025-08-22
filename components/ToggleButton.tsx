'use client'
import { useState } from "react";

type ToggleButtonProps = {
  options: string[];
  onChange?: (value: string) => void;
};

export default function ToggleButton ({ options = [], onChange } : ToggleButtonProps) {

  const [active, setActive] = useState(options[0]);

  const handleClick = (option:string) => {
    setActive(option);
    onChange?.(option.toLowerCase()); // send the selected value back
  };

  return (
    <div className="flex border border-black w-fit">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleClick(option)}
          className={`px-4 rounded-none transition-all duration-300 cursor-pointer py-3
            ${active === option ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"}
          `}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
