import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<User>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account/Profile");
  };
  
  return (
    <div>
      <h1>Sign in</h1>
      <input value={credentials.username} onChange={(e) =>
        setCredentials({ ...credentials, username: e.target.value })}/>
      <input value={credentials.password} onChange={(e) =>
        setCredentials({ ...credentials, password: e.target.value })}/>
      <button onClick={signin}> Signin </button>
      <h1>Sign up</h1>
      <button onClick={() => navigate("/Kanbas/Account/Signup")}>Sign Up</button>
    </div>
  );
}
