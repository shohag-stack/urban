"use client";
import { useState } from "react";
import { CircleChevronUp} from "lucide-react"; // Install: npm i lucide-react
import faq from "../public/Data/faq";


export default function Accordion({ items } : { items: typeof faq }) {
  const [openIndex, setOpenIndex] = useState<number | null >(null);

  const toggle = (index : number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto divide-y divide-gray-200">
      {items.map((item, index) => (
        <div key={index} className="py-5">
          <button
            onClick={() => toggle(index)}
            className="flex justify-between items-center w-full py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-expanded={openIndex === index}
          >
            <span className="text-2xl font-medium text-gray-900">{item.title}</span>
            <CircleChevronUp
              className={`h-7 w-7 text-gray-500 transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="py-4 text-gray-600 text-md">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}