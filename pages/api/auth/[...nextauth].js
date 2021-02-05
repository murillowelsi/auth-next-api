// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    site: process.env.NEXTAUTH_URL,
    session: {
      jwt: true,
      maxAge: 30 * 24 * 60 * 60 // 30 days
    },
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
    ],
    database: process.env.DATABASE_URL
    
  }

export default (req, res) => NextAuth(req, res, options)

