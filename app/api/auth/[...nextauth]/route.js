import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
const handler = NextAuth({
    providers : [
        GoogleProvider({
            clientId : "416001092697-s1b4nj4gmauob3p5dbfnp5q84ned1ith.apps.googleusercontent.com",
            clientSecret : "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"
        })
    ]
})

export {handler as GET, handler as POST};