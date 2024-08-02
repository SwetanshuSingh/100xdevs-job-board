"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "../ui/use-toast";
import { useState } from "react";

const LoginForm = () => {
  const { toast } = useToast();
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (!inputValue || inputValue === "") {
      toast({
        title: "Email cannot be empty!",
        variant: "destructive",
      });
      return;
    }
  };

  return (
    <div>
      <form className="h-8 flex items-center gap-2" action={handleClick}>
        <Input
          value={inputValue}
          onChange={(evt) => setInputValue(evt.target.value)}
          placeholder="Email"
          className="w-64 border-gray-400 outline-none text-gray-800"
        />
        <Button type="submit" className="rounded-lg">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
