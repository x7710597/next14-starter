import { connectToDb } from "@/lib/connectToDb";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";


//slug params is grabbed when on the page /blog/hello-word and then find post and render
export const GET =  async (request, {params}) => {
  const {slug} = params
  try {
    connectToDb()
    const post = await Post.findOne({slug})
    return NextResponse.json(post)

  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch post");


  }
}

//delete api route, same route
export const DELETE =  async (request, {params}) => {
  const {slug} = params
  try {
    connectToDb()
    await Post.deleteOne({slug})
    return NextResponse.json("post deleted")

  } catch (error) {
    console.log(error)
    throw new Error("Failed to delete post");


  }
}
