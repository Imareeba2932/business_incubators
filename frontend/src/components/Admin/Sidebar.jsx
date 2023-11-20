import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { Link } from 'react-router-dom'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <h6 className='icon_header'/> Buiseness Incubator
            </div>
            <span className='icon1 close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/">
                    <BsFillArchiveFill className='icon'/> Home
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/services">
                    <BsFillGrid3X3GapFill className='icon'/> Services
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/Contact2">
                    <BsPeopleFill className='icon'/> Contact Us
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/UserProfile">
                    <BsPeopleFill className='icon'/> User Profile
                </Link>
            </li>
            
        </ul>
    </aside>
  )
}

export default Sidebar