
export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt ({token, user }){
      if(user){
        token.id = user.id
        token.isAdmin = user.isAdmin
      }
      return token
    },
    async session ({session, token}) {
      if(token) {
      session.user.id = token.id
      session.user.isAdmin = token.isAdmin
      }
      return session
    },
    authorized({auth, request}) {
      const user = auth?.user
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin")
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog")
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login")
      // console.log(auth)
      // return true

      //ONLY ADMIN CAN REACH ADMIN DASHBOARD
      if(isOnAdminPanel && !user?.isAdmin) {
        return false
      }


      //ONLY LOGGEDIN USER CAN REACH BLOG PAGE
      if(isOnBlogPage && !user) {
        return false
      }

      //ONLY UNAUTHENTICATED USERS CAN REACH LOGIN PAGE

      if(isOnLoginPage && user) {
        return Response.redirect(new URL ("/", request.nextUrl))
      }

      return true
    }
  }
}


// console.log(auth)
// with github login returns:
// {
//   user: {
//   name: 'Mia L',
//   email: 'miapsunagmail.com',
//   image: 'https://avatars.githubusercontent.com/u/108651937?v=4'
// },

// with email login:
// {
//   user: { email: 'hassedpotato@gmail.com' },
//   expires: '2024-09-15T09:10:11.218Z'
//}

//  with jwt and session email login returns:
//  {
//   user: {
//   email: 'hassedpotato@gmail.com',
//   id: '66bc822a22bb389f21eab5e1',
//   isAdmin: false
// },
//   expires: '2024-09-15T09:18:28.800Z'
// }
