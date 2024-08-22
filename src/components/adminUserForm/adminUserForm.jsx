"use client"
import styles from './adminPosts.module.css'
import { addUser } from '@/lib/action'
import {useFormState} from "react-dom"

const AdminUserForm = () => {

  const [state, formAction] = useFormState(addUser, undefined)
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add new user</h1>
      <input type="hidden" name="userId" />
      <input type="text" name="username" placeholder='username'/>
      <input type="email" name="email" placeholder='email'/>
      <input type="password" name="password" placeholder='password'/>
      <input type="text" name="img" placeholder='img'/>
      <button>Add user</button>
      <select name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      {state && state.error}
      {/* from addPost action */}


    </form>
  )
}



export default AdminUserForm
