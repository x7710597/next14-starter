import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials" // to let auth.js know how we're encrypting passwords
import { connectToDb } from "./connectToDb"
import { User } from "./models"
import bcrypt from "bcryptjs"


const login = async (credentials) => {
  try {
    connectToDb()
    const user = await User.findOne({username: credentials.username})
    if(!user) {
      throw new Error("Wrong credentials");
    }

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

    if(!isPasswordCorrect) {
      throw new Error("Wrong password");
    }
    return user

  } catch (error) {
    console.log(error)
    throw new Error("Failed to login");

  }
}

//auth method to get user's session info. signIn, signOut method to login and logout
export const {
  handlers: {GET, POST},
  auth, signIn, signOut } = NextAuth({
  providers:[
  GitHub({
  clientId: process.env.GITHUB_ID,
  clientSecret: process.env.GITHUB_SECRET
  }),
  CredentialsProvider({
    async authorize(credentials)  {
      try {
        const user = await login(credentials)
        return user
      } catch (error) {
        return null
      }
    }
  })
  ],
  callbacks: {
    async signIn({user, account, profile}) {
      // console.log(user, account, profile)

      if(account.provider === "github") {

        connectToDb()
        try {
          const user = await User.findOne({email: profile.email})
          if(!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            })
            await newUser.save()
          }

        } catch (error) {
          console.log(error)
          return false
           //returning false inside the signIn fnc means that even if the user signins with github but user can't be
          // found in the db, user won't be authenticated

        }
      }
      return true
      // if(account.provider === "github") &&  if(!user) return true
    }
  }
})

// console.log(user, account, profile) returns:
// {
//   user: {
//     name: 'Mia L',
//     email: 'miapeisun@gmail.com',
//     image: 'https://avatars.githubusercontent.com/u/108651937?v=4'
//   },
//   expires: '2024-09-12T14:35:22.667Z'
// }
//  GET /login?_rsc=6g24p 200 in 1954ms
// [auth][warn][env-url-basepath-redundant] Read more: https://warnings.authjs.dev#env-url-basepath-redundant
//  POST /login 303 in 72ms
//  ○ Compiling /api/auth/[...nexauth] ...
//  ✓ Compiled /api/auth/[...nexauth] in 754ms (762 modules)
// {
//   user: {
//     id: '60110c07-044a-4ca7-8ed9-a20961ac00f4',
//     name: 'Mia L',
//     email: 'miapeisun@gmail.com',
//     image: 'https://avatars.githubusercontent.com/u/108651937?v=4'
//   },
//   account: {
//     access_token: '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',
//     token_type: 'bearer',
//     scope: 'read:user,user:email',
//     provider: 'github',
//     type: 'oauth',
//     providerAccountId: '108651937'
//   },
//   profile: {
//     login: 'x7710597',
//     id: 108651937,
//     node_id: 'U_kgDOBnnloQ',
//     avatar_url: 'https://avatars.githubusercontent.com/u/108651937?v=4',
//     gravatar_id: '',
//     url: 'https://api.github.com/users/x7710597',
//     html_url: 'https://github.com/x7710597',
//     followers_url: 'https://api.github.com/users/x7710597/followers',
//     following_url: 'https://api.github.com/users/x7710597/following{/other_user}',
//     gists_url: 'https://api.github.com/users/x7710597/gists{/gist_id}',
//     starred_url: 'https://api.github.com/users/x7710597/starred{/owner}{/repo}',
//     subscriptions_url: 'https://api.github.com/users/x7710597/subscriptions',
//     organizations_url: 'https://api.github.com/users/x7710597/orgs',
//     repos_url: 'https://api.github.com/users/x7710597/repos',
//     events_url: 'https://api.github.com/users/x7710597/events{/privacy}',
//     received_events_url: 'https://api.github.com/users/x7710597/received_events',
//     type: 'User',
//     site_admin: false,
//     name: 'Mia L',
//     company: null,
//     blog: '',
//     location: null,
//     email: 'miapeisun@gmail.com',
//     hireable: null,
//     bio: null,
//     twitter_username: null,
//     notification_email: null,
//     public_repos: 12,
//     public_gists: 0,
//     followers: 0,
//     following: 1,
//     created_at: '2022-07-04T06:13:55Z',
//     updated_at: '2024-08-05T12:34:19Z',
//     private_gists: 0,
//     total_private_repos: 39,
//     owned_private_repos: 38,
//     disk_usage: 161804,
//     collaborators: 0,
//     two_factor_authentication: false,
//     plan: {
//       name: 'pro',
//       space: 976562499,
//       collaborators: 0,
//       private_repos: 9999
//     }
//   }
