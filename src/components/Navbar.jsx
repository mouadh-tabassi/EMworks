import React from 'react'

const Navbar = () => {
  return (
  <div className="navbar bg-gray-200" >
  <div className="flex-1">
    <a href='/' className="btn btn-ghost text-xl">EMworks Modules  Info Explorer</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a className='text-black font-bold' href='/Login'>Login</a></li>
      <li><a className='text-black font-bold' href="/Registration">Registration</a></li>
    </ul>
  </div>
</div>
  )
}

export default Navbar;
