type SAPayload = {
    status: "success" | "error";
    message?: string; 
}

type LoginAction = {
    email: string;
    password: string;
  };