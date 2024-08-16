"use server"

import { revalidatePath } from "next/cache"
import { connectToDb } from "./connectToDb"
import { Post, User } from "./models"
import { signIn, signOut } from '@/lib/auth'
import bcrypt from "bcryptjs"


export const addPost = async (prevState, formData) => {

  //getting each input one by one with get()
  // const title = formData.get("title")
  // const desc = formData.get("desc")
  // const slug = formData.get("slug")
  // const userId = formData.get("userId")

  //destructuring:
  const {title, desc, slug, userId} = Object.fromEntries(formData) //why Object.values doesn't work?
  // console.log(title, desc, slug, userId)

  try {
    connectToDb()
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    })
    await newPost.save()
    console.log("saved to db!")
    revalidatePath("/blog")

  } catch (error) {
    console.log(error)
    return {error: "something went wrong"}

  }


}
export const deletePost = async (formData) => {

  const {id} = Object.fromEntries(formData) //why Object.values doesn't work?
  // console.log(title, desc, slug, userId)

  try {
    connectToDb()
    await Post.findByIdAndDelete(id)
    console.log("deleted from db!")
    revalidatePath("/blog")

  } catch (error) {
    console.log(error)
    return {error: "something went wrong"}

  }

}


export const handleGithubLogin = async () => {
  "use server"
  await signIn("github")
}

export const handleLogout = async () => {
  "use server"
  await signOut()
}

export const handleRegister = async (previousState, formData) => {
  const {username, email, password, passwordRepeat, img} = Object.fromEntries(formData)
  if(password !== passwordRepeat) {
    return {error: "passwords don't match"}


  }
  try {
    connectToDb()
    const user = await User.findOne({ username })
    if(user) {
      return {error: "user already exists"}
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    })

    await newUser.save()
    console.log("user registered")

    return {success: true}

  } catch (error) {
    console.log(error)
    return {error: "Registration failed"}

  }

}
export const handleLogin = async (prevState, formData) => {
  const {username, password} = Object.fromEntries(formData)

  try {
    await signIn("credentials", {username, password})

  } catch (error) {
    console.log(error)
    return {error: "Registration failed"}

  }

}
