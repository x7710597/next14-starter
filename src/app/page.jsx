import styles from ".//home.module.css"
import Image from "next/image"

const HomePage = () => {
  return (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thought Agency </h1>
      <p className={styles.description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam qui ipsa voluptatum
        Exercitationem eos et explicabo vitae eligendi voluptatum sunt. Quis natus quod temporibus
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn more</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill style={{objectFit: 'cover'}}  className={styles.brandImg}/>
      </div>
    </div>

    <div className={styles.imgContainer}>
      <Image  src="/hero.gif" alt="" fill className={styles.heroImg}/>
    </div>

  </div>

  )
}

export default HomePage;
