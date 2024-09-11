"use client"

import React, { useState } from 'react'
import styles from "./links.module.css"
import NavLink from './navLink/NavLink'
import Image from "next/image"
import { handleLogout } from '@/lib/action'


const links = [

  {title: "Home Page",
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
  const [open, setOpen] = useState(false)


  return (

    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, index) => (
          <NavLink item={link} key={index} />
        ))}

        {session?.user ? (
            <>
            { session.user?.isAdmin && ( <NavLink item={{title: "Admin", path:"/admin"}} /> )}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
            </>
          ) : ( <NavLink item={{title: "Login", path:"/login"} }/> )
        }
      </div>
      { open &&
      <>
        <Image
          src="/menu.png"
          alt=""
          width={30} height={30}
          onClick={() => setOpen(prev => !prev)}
          className={styles.menu}
          />
        <div className={styles.mobileLinks}>
          {links.map((link, index) => (
              <NavLink item={link} key={index} />
          )) }
        </div>
      </>
      }
    </div>
  )
}

export default Links
