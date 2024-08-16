import { connectToDb } from "./connectToDb";
import { Post, User } from "./models";
import {unstable_noStore as noStore} from "next/cache"

export const getPosts = async () => {
  try {
    connectToDb()
    const posts = await Post.find() // returns all the posts we have in our db
    return posts

  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch posts");


  }
}


export const getPost = async (slug) => {
  try {
    connectToDb()
    const post = await Post.findOne({slug}) // returns a post we have in our db
    return post

  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch post");


  }
}

export const getUser = async (id) => {
  noStore()
  try {
    connectToDb()
    const user = await User.findById(id) // returns a user we have in our db
    return user

  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch user");


  }
}

export const getUsers = async () => {
  try {
    connectToDb()
    const users = await User.find() // returns all the users we have in our db
    return users

  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch users");


  }
}
