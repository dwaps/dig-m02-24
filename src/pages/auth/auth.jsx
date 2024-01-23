import { useState } from "react";
import SigninPage from "./signin";
import SignupPage from "./signup";

const AuthPage = () => {
  const [type, setType] = useState("signin");

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center flex-column vh-100 ">
      {type === "signin" ? (
        <SigninPage setType={setType} type={type} />
      ) : (
        <SignupPage setType={setType} type={type} />
      )}
    </div>
  );
};

export default AuthPage;
