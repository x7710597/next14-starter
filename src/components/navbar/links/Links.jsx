"use client"

import React, { useState } from 'react'
import NavLink from './navLink/NavLink'
import { handleLogout } from '@/lib/action'
import { RiMenuFill } from "react-icons/ri"

const links = [

  {title: "Home",
    path: "/",
  },
  {title: "About",
    path: "/about"
  },
  {title: "Contact",
    path: "/contact"
  },
  {title: "Blog",
    path: "/blog"
  },
]
const Links = ({session}) => {
  const [menuOpen, setMenuOpen] = useState(false)


  return (

    <div className="ml-auto">
      <div className="flex gap-6 items-center justify-center">
        <div className="flex gap-6 items-center justify-center max-md:hidden">
          {links.map((link, index) => (
            <NavLink item={link} key={index} />
          ))}

          {session?.user ? (
              <>
              { session.user?.isAdmin && ( <NavLink item={{title: "Admin", path:"/admin"}} /> )}
              <form action={handleLogout} className=''>
                <button className='p-0 m-0 font-roboto font-normal'>Logout</button>
              </form>
              </>
            ) : ( <NavLink item={{title: "Login", path:"/login"} }/> )
          }
        </div>

        <RiMenuFill
          onClick={() => setMenuOpen(prev => !prev)}
          className="hidden max-md:block text-primary text-3xl cursor-pointer"
        />

        </div>
        {/* responsive hamburguer menu */}
        { menuOpen &&
        <div className="fixed top-20 inset-x-0 shadow-md">
          <div  className="flex flex-col items-center justify-center  h-full">
          {links.map((link, index) => (
              <NavLink item={link} menuOpen={menuOpen}  key={index} onClick={() => setMenuOpen(false)}/>
            )) }
            </div>
        </div>
      }
    </div>
  )
}

export default Links
