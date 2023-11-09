import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
// import {BsFillHouseFill} from 'react-icons/bs'
import {Link} from "react-router-dom"

import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span>Real</span>Estate</h1>
                <button className='btn'>Sign In</button>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                 <li><Link to="/">Home</Link></li>
                   <li><Link to="/search">Search</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                    
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
                </div>
            </div>
        </div>
    )
}

export default Navbar
