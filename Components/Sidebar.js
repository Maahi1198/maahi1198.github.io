import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as BsIcons from 'react-icons/bs'
import {SidebarData} from './SidebarData'
import '../CSS/SidebarCSS.css'
function Sidebar(){
    const {navbar, setNavbar} = useState(false);
    const showMenu = () => setNavbar(!navbar)
    return(
    <>
        <div className='Sidebar'>
            <Link to ='#' className='Menu'>
                <BsIcons.BsJournalAlbum onClick={showMenu} />
            </Link>
        </div>
        <nav className={navbar ? 'nav-menu active': 'nav-menu' }>
            <ul className='nav-menu-list'>
                <li className='sidebar-toggle'>
                    <Link to='#' className='Menu' >
                        <BsIcons.BsJournalX/>
                    </Link>
                </li>
                {SidebarData.map((items, index) => {
                    return(
                        <li key={index} className={items.navName}>
                            <Link to={items.path}>
                                {items.icon}
                                <span>{items.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </>
    )
}
export default Sidebar;