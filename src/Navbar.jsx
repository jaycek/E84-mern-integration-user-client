import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const linkStyle = ({isActive})=>{
        isActive? "text-teal-400 font-bold" : "text-gray-300"
    }

  return (
    <nav className="bg-black border-b border-teal-500/40 px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-wider text-teal-400">
            METAL<span className="text-gray-300">CORE</span>
            </h1>
            <div className='flex gap-3'>
                <NavLink to="/" className={linkStyle}>
                    Home
                </NavLink>
                 <NavLink to="/about" className={linkStyle}>
                    About
                </NavLink>
                 <NavLink to="/contact" className={linkStyle}>
                    Contact
                </NavLink>
                 <NavLink to="/students" className={linkStyle}>
                    Students
                </NavLink>
                <NavLink to="/addstudent" className={linkStyle}>
                   Add Student
                </NavLink>
            </div>

        </div>
    </nav>
  )
}

export default Navbar