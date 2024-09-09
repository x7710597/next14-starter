import LoginForm from "../../../components/loginForm/LoginForm"
// '@/components/loginForm/loginForm'
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

// session returns:
// {
//   user: {
//     name: 'Mia L',
//     username: 'miapeisun@gmail.com',
//     image: 'https://avatars.githubusercontent.com/u/108651937?v=4'
//   },
//   expires: '2024-09-12T13:53:09.071Z'
// }
//with auth.js we don't need to worry about tokens, cookies, auth.js does everything for us, but if we use a custom authentication
//we don't need to create the api auth route, but for all other providers we need to use a auth route
