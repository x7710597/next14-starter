
"use client"
import styles from './loginForm.module.css'
import { handleLogin } from "@/lib/action"
import { useFormState } from 'react-dom'

import { useRouter } from "next/navigation"
import Link from "next/link"
import { useEffect } from "react"

const LoginForm = () => {
  const [state, formAction] = useFormState(handleLogin, undefined)
  const router = useRouter()

  // useEffect(() => {
  //   state?.success && router.push("/login")
  // }, [state?.success, router]) //why router?


  return (
      <form className={styles.form} action={formAction}>
          <input type="text" placeholder='username' name='username'/>
          <input type="password" name='password' placeholder='password'/>
          <button>Login</button>
          {state?.error}
          <Link href={"/register"}> { "Don't have an account?" } <b>Register</b></Link>
        </form>
  )
}

export default LoginForm
