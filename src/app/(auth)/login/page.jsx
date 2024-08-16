import { handleGithubLogin, handleLogin } from '@/lib/action'
// import { auth } from '@/lib/auth'

const LoginPage = async () => {

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
      <form action={handleLogin}>
        <input type="text" name="username" id="username" placeholder='username' />
        <input type="password" name='password' placeholder='password'/>
        <button>Login with credentials</button>
      </form>
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
