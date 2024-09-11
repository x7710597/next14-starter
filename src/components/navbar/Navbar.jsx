import Links from "@/components/navbar/links/Links"
import Link from "next/link"
import { auth } from '@/lib/auth'


const Navbar =  async () => {
  const session = await auth()
  // console.log(session)

  return (
    <header>
      <nav className="flex items-center py-8">
        <Link href="/" className="font-roboto text-2xl text-secondary cursor-pointer"> Logo</Link>
        <Links session={session}/>
            {/* Links component is a CSC hence can't handle async wait fnc, that's why we're passing auth() as props */}
      </nav>
    </header>
  )
}

export default Navbar

// console.log(session) returns:
// {
//   user: {
//     name: 'Mia L',
//     email: 'miapeisunagmail.com',
//     image: 'https://avatars.githubusercontent.com/u/108651937?v=4'
//   },
// }
