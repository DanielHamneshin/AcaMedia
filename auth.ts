import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import prisma from "./lib/prisma"
import Google from "next-auth/providers/google"

// ! Dangerous email account linking is enabled
// TODO: add manual email account linking

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [GitHub({
        allowDangerousEmailAccountLinking: true
    }), Google({
        allowDangerousEmailAccountLinking: true
    })],
})