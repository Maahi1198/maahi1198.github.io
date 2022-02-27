import React from 'react'
//import { Link } from 'react-router-dom'
import * as BsIcons from 'react-icons/bs'
import * as GiIcons from 'react-icons/gi' 
export const SidebarData = [
    {
        title: 'Home',
        path: '/Home',
        icon: <BsIcons.BsFillHouseFill/>,
        navname: 'nav-data'
    },
    {
        title: 'Gossip',
        path: '/Gossip',
        icon: <GiIcons.GiCoffeeCup/>,
        navname: 'nav-data'
    },
    {
        title: 'Contact',
        path: '/Contact',
        icon: <BsIcons.BsChatQuoteFill/>,
        navname: 'nav-data'
    },
    {
        title: 'Logout',
        path: '/',
        icon: <BsIcons.BsFillPersonXFill/>,
        navname: 'nav-data'
    }
]