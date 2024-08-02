"use server";
import { signIn } from "@/auth";

type LoginActionProps = {
  email: string;
};

export const loginUser = async ({ email }: LoginActionProps) => {
  try {
    await signIn("resend", { email });
  } catch (error) {
    console.log(error);
  }
};
