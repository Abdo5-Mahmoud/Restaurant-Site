import { lazy } from "react";

const Button = lazy(() => import("./Button"));

export const SendMessage = () => {
  return (
    <div className="container">
      <h2>Signup for our newsletters</h2>
      <form action="post">
        <input type="email" placeholder="Enter Your email here.." />
        <Button text="Send message" />
      </form>
    </div>
  );
};
