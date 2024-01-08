import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex justify-evenly md:flex-col fixed bottom-0 w-full'>
      <a href="#" className="p-6">
        <Image
          src="/icons/icon-home.svg"
          alt="Home"
          width={24}
          height={24}
          priority
        />
      </a>
      <a href="#" className="p-6">
      <Image
          src="/icons/icon-search.svg"
          alt="Home"
          width={24}
          height={24}
          priority
        />
      </a>
      <a href="#" className='p-6'>
      <Image
          src="/icons/icon-plus.svg"
          alt="Home"
          width={24}
          height={24}
          priority
        />
      </a>
      <a href="#" className='p-6'>
      <Image
          src="/icons/icon-reels.svg"
          alt="Home"
          width={24}
          height={24}
          priority
        />
      </a>
      <a href="#" className='p-6'>
      <Image
          src="/icons/woman.jpg"
          alt="Home"
          className="rounded-full"
          width={24}
          height={24}
          priority
        />
      </a>
    </div>
  )
}

export default Sidebar