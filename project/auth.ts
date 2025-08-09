import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { AUTHOR_BY_GOOGLE_ID_QUERY } from "@/sanity/lib/queries"; // You’ll need to create this query
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [ Google ],

   callbacks: {
    async signIn({
      user: { name, email, image },
      profile,
    }) {
      const id = profile?.sub // Google unique ID
      const username = profile?.name || ""
      const bio = "" // Google doesn't provide bio

      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_GOOGLE_ID_QUERY, { id })

      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id,
          name,
          username,
          email,
          image,
          bio,
        })
      }

      return true
    },

    async jwt({ token, account, profile }) {
      if (account && profile) {
        const id = profile?.sub
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GOOGLE_ID_QUERY, { id })

        token.id = user?._id
      }

      return token
    },

    async session({ session, token }) {
      Object.assign(session, { id: token.id })
      return session
    },
  },
})
