"use client"
import { handleRegister } from "@/lib/action"
import styles from "./registerForm.module.css"
import { useFormState } from 'react-dom'

import { useRouter } from "next/navigation"
import Link from "next/link"
import { useEffect } from "react"

const RegisterForm = () => {
  const [state, formAction] = useFormState(handleRegister, undefined)
  const router = useRouter()

  useEffect(() => {
    state?.success && router.push("/login")
  }, [state?.success, router]) //why router?


  return (
      <form className={styles.form} action={formAction}>
          <input type="text" placeholder='username' name='username'/>
          <input type="email" name="email" id="email" placeholder='email' />
          <input type="password" name='password' placeholder='password'/>
          <input type="password" name='passwordRepeat' placeholder='confirm password '/>
          <button>Register</button>
          {state?.error}
          <Link href={"/login"}>Have an account? <b>Login</b></Link>
        </form>
  )
}

export default RegisterForm
