import styles from "./blog.module.css"
import PostCard from "@/components/postCard/PostCard"
import { getPosts } from "@/lib/data"

// FETCHING DATA WITH API:

// const getData = async () => {
//   const resp = await fetch("https://jsonplaceholder.typicode.com/posts")
//   if(!resp.ok) {
//     throw new Error("something went wrong");
//   }

//   return resp.json()
// }

const BlogPage =  async () => {

  // FETCHING DATA WITH API:
  // const posts = await getData()

  // FETCHING DATA WITHOUT API:

  const posts = await getPosts()


  return (
    <div className={styles.container}>
      {posts.map(post => (
        <div className={styles.post} key={post.userId}>
          <PostCard title={post.title} desc={post.body} slug={post.slug} img={post.img}/>
        </div>
      ))}

    </div>
  )
}

export default BlogPage
