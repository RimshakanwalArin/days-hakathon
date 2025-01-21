'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const SlugCompnent = () => {
    const [path, setpath] = useState("")
  return (
    <div>
        <Image src={path ? path :'/p2.png'} alt='atter' width={400} height={400 }/>
        <div className='flex items-center justify-evenly mx-auto mt-2'>
            <Image src={'/p6.png'} alt='perfume' width={300} height={300}
            onClick={() => setpath('/p6.png')}/>

        </div>
        <div>
            <Image src={'/p8.png'} alt='ecommerce' width={400} height={300}
            onClick={() => setpath('/p9.png')}/>
        </div>
    </div>
  )
}

export default SlugCompnent