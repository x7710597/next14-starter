import PostUser from "@/components/postUser/PostUser";
import styles from "./singlePost.module.css"
import Image from "next/image"
import {Suspense} from "react"
// import { getPost } from "@/lib/data";

const getData = async (slug) => {
  const resp = await fetch(`https://blog-site-three-sandy.vercel.app/api/blog/${slug}`)
  if(!resp.ok) {
    throw new Error("something went wrong");
  }

  return resp.json()
}

//same route but different fetching method
// const getData = async (slug) => {
//   const resp = await fetch(`http://localhost:3000/api/blog/${slug}`,{method: DELETE})
//   if(!resp.ok) {
//     throw new Error("something went wrong");
//   }

//   return resp.json()
// }



export const generateMetadata = async ({params}) => {
  const {slug} = params
  // const post = await getPost(slug)
  const post = await getData(slug)

  return {
    title: post.title,
    description: post.desc,
  }

}

const SinglePostPage = async ({params}) => {

  const {slug} = params
  // FETCH DATA WITH AN API
  const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  // const post = await getPost(slug);
  return (
    <div className={styles.container}>
    {post?.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          { post && <Suspense fallback={<div>loading...</div>} >
            <PostUser userId={post.userId} />
          </Suspense>}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 16)}</span>
          </div>

        </div>

        <div className={styles.content}>{post.desc}</div>

      </div>

    </div>
  )
}

export default SinglePostPage
