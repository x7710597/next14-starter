import { connectToDb } from "@/lib/connectToDb";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET =  async () => {
  try {
    connectToDb()
    const posts = await Post.find()
    return NextResponse.json(posts)

  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch posts");


  }
}

//http://localhost:3000/api/blog shows all blog posts in an arr of objs:

// [
//   {
//   "_id": "66b9c46e5984adf4ffb1c19a",
//   "userId": "66b9c2f55984adf4ffb1c196",
//   "title": "Hello Word",
//   "desc": "test desc",
//   "slug": "hello-world",
//   "img": "https://images.unsplash.com/photo-1723199688073-0c18e53c321b?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "createdAt": "2024-08-28T00:00:00.000Z"
//   },
//   {
//   "_id": "66bb172550201157083d1398",
//   "title": "panzhale",
//   "desc": "panzhale",
//   "userId": "31",
//   "slug": "panzhale",
//   "createdAt": "2024-08-13T08:19:49.127Z",
//   "updatedAt": "2024-08-13T08:19:49.127Z",
//   "__v": 0
//   },
//   ...
//]
