import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/libs/mongodb"
import bcrypt from "bcryptjs"
import User from "@/models/user"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Correo Electronico" },
                password: { label: "Password", type: "password", placeholder: "Password" },
            },
            async authorize(credentials, req) {
                await connectDB()
                console.log(credentials)

                const userFound = await User.findOne({ email: credentials?.email })
                if (!userFound) throw new Error("No existe un usuario con estas credenciales")
                const passwordMatch = await bcrypt.compare(credentials?.password, userFound.password)
                if (!passwordMatch) throw new Error("Password invalida")
                console.log(userFound)
                return userFound
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            await connectDB();
            if (account.provider === 'google') {
                const userFound = await User.findOne({ email: profile.email });
                if (!userFound) {
                    // Create new user
                    await User.create({
                        name: profile.name,
                        email: profile.email,
                        image: profile.picture,
                        provider: account.provider,
                        providerAccountId: profile.sub,
                    });
                }
            }

            return true;
        },
        jwt({ token, user }) {
            if (user) token.user = user
            return token
        },
        session({ session, token }) {
            session.user = token.user
            return session
        },
    },
    pages: {
        signIn: '/login',
    }
})

export { handler as GET, handler as POST }