import React from 'react'
import statistics from '../public/Data/statistics'
import ImageLeftToRightSlide from './animation/ImageLeftToRightSlide'

export default function Statistics() {
  return (
    <div>
        <div className='section'>

            { statistics.map((row, rowIndex)=>(
                
                <div key={rowIndex} className={`grid grid-cols-2 md:grid-cols-4 gap-10 items-center pt-10 border-b ${rowIndex === 0 ? "border-t" : "" }`}>
                
                {
                    row.map((item, idx)=>(
                        <div key={idx} className='relative overflow-hidden'>
                            <h1>{item.value}</h1>
                            <p className='py-4 text-1xl'>{item.label}</p>
                        </div>
                    ))
                }
                
            </div> 
            ))
            
       }
        </div>
    </div>
  )
}
