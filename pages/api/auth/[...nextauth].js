import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"


export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            jwt: {
                encryption: true
            },
            secret: "secret token",
            callbacks: {
                async jwt(token, account) {
                    if (account?.accessToken) {
                        token.accessToken = account.accessToken
                    }
                    return token;
                },
                redirect: async (url, _baseUrl) => {
                    if (url === '/user') {
                        return Promise.resolve('/')
                    }
                    return Promise.resolve('/')
                }
            }
        }),
        // ...add more providers here
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        })
    ],
    secret: process.env.JWT_SECRET,
}

export default NextAuth(authOptions)