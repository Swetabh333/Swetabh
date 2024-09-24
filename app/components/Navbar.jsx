"use client";
import NavLink from './NavLink'
import Link from 'next/link'
import { useState } from 'react';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title:"About",
        href:"#about",
    },
    {
        title:"Projects",
        href:"#projects",
    },
    {
        title:"Contact",
        href:"#contact",
    },

]

const Navbar = () => {
    const [navbarOpen,setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="text-2xl md:text-5xl y=text-white font-semibold">LOGO</Link>
        <div className="block md:hidden">
            {
            !navbarOpen? (
                <button  onClick={()=>{setNavbarOpen(true)}} className="text-slate-200 flex items-center px-3 py-2 border rounded text-slate-200 hover:text-white hover:border-white">
                    <Bars3Icon className="h-5 w-5"></Bars3Icon>
                </button>
            ) : (
                <button onClick={()=>{setNavbarOpen(false)}} className="text-slate-200 flex items-center px-3 py-2 border rounded text-slate-200 hover:text-white hover:border-white">
                    <XMarkIcon className="h-5 w-5" />
                </button>
            )
        }</div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
                {
                    navLinks.map((link,index)=>{
                        return(
                            <li key={index}>
                                <NavLink href={link.href} title={link.title} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
      </div>
      {
        navbarOpen ? <MenuOverlay links={navLinks} /> : null
      }
    </nav>
  )
}

export default Navbar