import React from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'



const Banner = () => {
  return (
    <div className="flex sticky z-50 items-center gap-x-6 bg-ban px-6 py-2.5 sm:px-3.5 sm:before:flex-1 ">
      <p className="text-lg leading-6 text-white">
       
          <strong className="font-semibold">Support Palestine </strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          <a href="#" className="text-pal hover:underline" >
          Help Provide Humanitarian Aid to Palestine.&nbsp;<span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      <div className="flex flex-1 justify-end">
      </div>
    </div>
  )
}

export default Banner