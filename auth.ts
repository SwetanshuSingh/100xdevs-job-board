import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account }) {
      const exisitngUser = await prisma.user.findUnique({
        where: {
          id: user.id,
        },
      });

      if (!exisitngUser) return false;

      return true;
    },
  },

  ...authConfig,
});
