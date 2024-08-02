"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "../ui/use-toast";
import { useState } from "react";
import { loginUser } from "@/actions/user";

const LoginForm = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoding, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (!email || email === "") {
      toast({
        title: "Email cannot be empty!",
        variant: "destructive",
      });
      return;
    }

    const res = await loginUser({ email, password });
  };

  return (
    <div>
      <form
        className="h-8 flex flex-col items-center gap-2"
        action={handleClick}
      >
        <Input
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          placeholder="Email"
          className="w-64 border-gray-400 outline-none text-gray-800"
        />

        <Input
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
          placeholder="Password"
          className="w-64 border-gray-400 outline-none text-gray-800"
        />

        <Button type="submit" className="w-full rounded-lg">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
