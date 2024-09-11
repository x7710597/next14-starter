import Links from "@/components/navbar/links/Links"
import styles  from "@/components/navbar/navbar.module.css"
import Link from "next/link"
import { auth } from '@/lib/auth'


const Navbar =  async () => {
  const session = await auth()
  // console.log(session)



  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}> Logo</Link>
        <div>
          <Links session={session}/>
          {/* Links component is a CSC hence can't handle async wait fnc, that's why we're passing auth() as props */}
        </div>
    </div>
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
