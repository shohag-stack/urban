import React from 'react'

type SelectFilterOption = {
  value: string;
  label: string;
} | string;


type SelectFilterProps = {
  options: SelectFilterOption[];
  onChange?: (value: string) => void;
  value: string
};


export default function SelectFilter({ options, onChange, value }: SelectFilterProps) {
  return (
          <form className='focus:border-none active:border-none h-fit' id='form' name='price_filter '>
              <select 
                name="slectedPrice" 
                className=' px-4 py-3 border focus:ring focus:outline-none appearance-none h-full'
                onChange={(e) => onChange?.(e.target.value)}
                value={value}
              >
              {
                options.map((option,index)=>{
                  if (typeof option == "string") {
                    return ( <option key={index} value={option}>{option}</option> )
                  }
                  else {
                    return ( <option key={index} value={option.value}>{option.label}</option>  )
                  }
                })
              }
            </select>
          </form>
  )
}
