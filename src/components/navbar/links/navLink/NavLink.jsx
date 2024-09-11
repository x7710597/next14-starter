"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


const NavLink = ({item, menuOpen, onClick}) => {
  const pathName = usePathname()

  return (
    <>
      <Link
      href={item.path}
      className={`font-roboto font-normal border-b-2
        ${
          menuOpen && 'w-full text-center py-1.5 hover:bg-secondary hover:text-white'
        }
        ${pathName === item.path && !menuOpen
          ? 'border-secondary'
          : 'border-transparent hover:border-secondary'
        }
        transition-colors duration-300 cursor-pointer block`
      }
      onClick={onClick}
      >
      {item.title}
      </Link>
    </>
  )
}

export default NavLink
