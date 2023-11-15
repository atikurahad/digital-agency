import React from 'react';

const NavBar = () => {
    return (
        <div>
        <div className="navbar bg-[#D7F5DC] h-[80px]">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl"> <span className='text-[black] text-4xl font-bold'>Design</span> <span className='text-[#F55F1D] text-4xl'>Agency</span> </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Team</a></li>
            <li><a>Service</a></li>
            <li><a>Projects</a></li>
            <li><a>Testimonials</a></li>
            <li><a><button className="btn menu-horizontal px-1">Login</button></a></li>
            <li><a><button className="btn btn-success menu-horizontal px-1">Register</button></a></li>
            
          </ul>
        </div>
      </div>
        </div>
    );
}

export default NavBar; 
