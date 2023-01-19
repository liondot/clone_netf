import React, { useState } from 'react'
import './navbar.scss'
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    console.log(window.pageXOffset)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    };
    console.log(isScrolled)
  
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <span>Hompage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
        </div>
        <div className="right">
        <ZoomInOutlinedIcon className='icon'/>
        <span>KID</span>
        <SearchIcon className='icon'/>
        <img src="https://www.hobartcity.com.au/files/content/public/council/strategies-and-plans/dog-management-policy/18_so-what-park-shall-we-go-to.jpg?dimension=pageimage&w=480" alt="" />
       <div className='profile'>
            <ArrowDropDownIcon className='icon'/>
            <div className="options">
                <span>Settings</span>
                <span>Logout</span>
            </div>
       </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
