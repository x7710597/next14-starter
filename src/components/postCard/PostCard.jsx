import styles from "./postCard.module.css"
import Image from "next/image"
import Link from "next/link"



const PostCard = ({title, desc, slug, img, date}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
      { img && <div className={styles.imgContainer}>
          <Image src={img} alt="" fill  className={styles.img}/>
        </div>}
      <span className={styles.date}>{date.toString().slice(0, 10)}</span>
    </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{desc}</p>
        <Link href={`/blog/${slug}`} className={styles.link} >Read more</Link>
      </div>
    </div>
  )
}

export default PostCard
