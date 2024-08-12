import { getUser } from "@/lib/data"
import styles from "./postUser.module.css"
import Image from "next/image"



// const getData = async (userdId) => {
//   const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userdId}`, {cache: "no-store"})
//     if(!resp.ok) {
//     throw new Error("something went wrong")
//   }

//   return resp.json()
// }

const PostUser = async ({userId}) => {

  const user = await getUser(userId)
  console.log(user)

  return (
    <div className={styles.container}>
    < Image
        className={styles.avatar}
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>

  </div>
  )
}

export default PostUser
