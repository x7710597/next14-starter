import Image from "next/image"
import styles from "./contact.module.css"

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="about page picture"  fill className={styles.img}/>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text"  placeholder="Name & Surname"/>
          <input type="email"  placeholder="Email address"/>
          <input type="number"  placeholder="Phone number (optional)"/>
          <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>

      </div>

    </div>
  )
}

export default ContactPage
