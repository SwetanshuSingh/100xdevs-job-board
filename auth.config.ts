import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/db"

export default {
  providers: [
    Credentials({
        authorize: async(credentials, req) => {
            const { email, password } = credentials;

            const user = await prisma.user.findUnique({
                where: {
                    email: email;
                }
            });
        }
    })
  ],
} satisfies NextAuthConfig;
