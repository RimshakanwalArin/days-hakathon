import Image from 'next/image'

import React from 'react'

const Hero = () => {
  return (
    <div>
        <div
  className="hero min-h-screen "
  >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
       <Image src={'/p10.png'} alt='perfume' width={300}
       height={300}
       className='w-[500] h-[500]'/>
      <h1 className="mb-5 text-5xl font-bold">Perfume Collection</h1>
      <p className="mb-5">
       Best quility perfume collection in the hear and bast pricing and fasality available testing 
      </p>
      
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero