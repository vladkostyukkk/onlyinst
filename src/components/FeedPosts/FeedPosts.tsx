import React from 'react'
import Image from 'next/image'

const FeedPosts = () => {
  return (
    <div>
      <Image
        src="/test-img.jpg"
        alt="Placeholder"
        width={340}
        height={700}
        priority
      />
    </div>
  )
}

export default FeedPosts