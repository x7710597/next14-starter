import Links from "@/components/navbar/links/Links"
import styles  from "@/components/navbar/navbar.module.css"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}> Logo</Link>
        <div>
          <Links />
        </div>
    </div>
  )
}

export default Navbar
