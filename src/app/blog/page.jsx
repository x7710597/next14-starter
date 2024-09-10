import styles from "./blog.module.css"
import PostCard from "@/components/postCard/PostCard"
// import { getPosts } from "@/lib/data"

// FETCHING DATA WITH API:

const getData = async () => {
  // "http://localhost:3000/api/blog"
  const resp = await fetch("https://blogsite-next.netlify.app/api/blog", {next:{revalidate: 3600}})

  if(!resp.ok) {
    throw new Error("something went wrong");
  }

  return resp.json()
}

const BlogPage =  async () => {

  // FETCHING DATA WITH API:
  const posts = await getData()

  // FETCHING DATA WITHOUT API:

  // const posts = await getPosts()


  return (
    <div className={styles.container}>
      {posts.map(post => (
        <div className={styles.post} key={post.userId}>
          <PostCard title={post.title} desc={post.body} slug={post.slug} img={post.img} date={post.createdAt}/>
        </div>
      ))}

    </div>
  )
}

export default BlogPage
