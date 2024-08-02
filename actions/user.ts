"use server";
import { signIn } from "@/auth";

type LoginActionProps = {
  email: string;
  password: string;
};

export const loginUser = async ({ email, password }: LoginActionProps) => {
  try {
    await signIn("credentials", { email, password, redirect: false });
  } catch (error) {}
};
