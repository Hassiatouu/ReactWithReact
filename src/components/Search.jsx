import React from 'react'
import { useState } from 'react'
import { MagnifyingGlassIcon} from '@heroicons/react/24/outline'



const Search = () => {

    const [searchQuery, setSearchQuery] = useState('')
    
  return (
    <div className='flex bg-search w-full mx-4 border border-search rounded-full space-x-2 p-3'>
        
        
        <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </div>
        

        <input 
                type="search"

                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-search rounded-lg  focus:outline-none focus:shadow-outline-blue
                 focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 grow
                 text-xl
                "
              />
    </div>
  )
}

export default Search