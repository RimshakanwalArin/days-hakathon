import Image from 'next/image'
import React from 'react'

const CartCard = (
    {
        src,
        title,
        size,
        price,
        
    }:{
        src:string,
        title:string,
        size:string,
        price:number
    }
) => {
  return (
    <div>
        <Image src={src} alt={title} width={80}
        height={80}
          />
          {size}
          {price}
          <div>           
            {/* <h2>{title}</h2> */}
          </div>
    </div>
  )
}

export default CartCard