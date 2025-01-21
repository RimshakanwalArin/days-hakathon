import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link href={'/'}>Home</Link></li>
        <li>
          <Link href={'#'}>Catagores</Link>
          <ul className="p-2">
            <li><Link href={'/product'}>product</Link></li>
            <li><Link href={'/category'}>category</Link></li>
          </ul>
        </li>
        <li><Link href={'/about'}>About</Link></li>
        <li><Link href={'/contact'}>Contact</Link></li>
      </ul>
       <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><Link href={'/signup'}>Sign up</Link></li>
        <li><Link href={'/'}>Home</Link></li>
        <li>
          <Link href={'/sanitydetels'}>Catagores</Link>
          <ul className="p-2">
            <li><Link href={'/'}>product</Link></li>
            <li><Link href={'/sanitydetels'}>Catagores</Link></li>
          </ul>
        </li>
        <Link href={'/contact'}>contact</Link>
        <li><Link href={'/about'}>About</Link></li>
      </ul>
    </div>
    {/* big divize */}
    <Link href={'/'} className="btn btn-ghost text-xl">RH</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      <li><Link href={'/'}>Home</Link></li>
      <li><Link href={'/about'}>About</Link></li>
      <li>
        
        <details>
          <summary>Product</summary>
          <ul className="p-2">
            <li><Link href={'/sanitydetels'}>Product</Link> </li>
            <li><Link href={'/sanitydetels'}>Catagores</Link></li>
          </ul>
         
        </details>
      </li>
      <li><Link href={'/contact'}>contact</Link></li>
    
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <Link href={'/cart'}>
          8 Items
          
          </Link>
          
        </div>
      </div>
    </div>
      </div>
  </div>
</div>
    
  )
}

export default Navbar