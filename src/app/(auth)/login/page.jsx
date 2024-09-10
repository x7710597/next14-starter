import LoginForm from "../../../components/loginForm/LoginForm"
import { handleGithubLogin } from '@/lib/action'
import styles from "./login.module.css"

const LoginPage = () => {
  // auth?.user && router.push("/") we could do this after a user logins in, also if it's admin or not
  //auth?.user?.isAdmin
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
