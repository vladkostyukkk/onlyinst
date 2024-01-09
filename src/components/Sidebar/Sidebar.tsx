import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex justify-evenly sm:flex-col fixed bottom-0 w-full sm:relative sm:w-auto sm:h-full sm:justify-start'>
      <a href="#" className="p-4 flex items center active:font-semibold sm:p-3 sm:my-0.5 sm:rounded-md sm:hover:bg-h-link-gray">
        <Image
          src="/icons/icon-home.svg"
          alt="Home"
          width={24}
          height={24}
          priority
        />
        <span className='hidden md:inline-flex md:pl-4'>Home</span>
      </a>
      <a href="#" className="p-4 flex items center active:font-semibold sm:p-3 sm:my-0.5 sm:rounded-md sm:hover:bg-h-link-gray">
      <Image
          src="/icons/icon-search.svg"
          alt="Search"
          width={24}
          height={24}
          priority
        />
        <span className='hidden md:inline-flex md:pl-4'>Search</span>
      </a>
      <a href="#" className="p-4 flex items center active:font-semibold sm:p-3 sm:my-0.5 sm:rounded-md sm:hover:bg-h-link-gray">
      <Image
          src="/icons/icon-plus.svg"
          alt="Create"
          width={24}
          height={24}
          priority
        />
        <span className='hidden md:inline-flex md:pl-4'>Create</span>
      </a>
      <a href="#" className="p-4 flex items center active:font-semibold sm:p-3 sm:my-0.5 sm:rounded-md sm:hover:bg-h-link-gray">
      <Image
          src="/icons/icon-reels.svg"
          alt="Reels"
          width={24}
          height={24}
          priority
        />
        <span className='hidden md:inline-flex md:pl-4'>Reels</span>
      </a>
      <a href="#" className="p-4 flex items center active:font-semibold sm:p-3 sm:my-0.5 sm:rounded-md sm:hover:bg-h-link-gray">
      <Image
          src="/icons/woman.jpg"
          alt="Profile"
          className="rounded-full"
          width={24}
          height={24}
          priority
        />
        <span className='hidden md:inline-flex md:pl-4'>Profile</span>
      </a>
    </div>
  )
}

export default Sidebar
