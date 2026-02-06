import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const authHandler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // TODO: Replace with MongoDB User check
        if (
          credentials?.email === "test@gmail.com" &&
          credentials?.password === "123456"
        ) {
          return { id: "1", name: "Test User", email: "test@gmail.com" };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { authHandler as GET, authHandler as POST };
