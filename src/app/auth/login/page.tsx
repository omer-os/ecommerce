import React from "react";
import LoginButton from "~/components/custom/buttons/login-button";
import { Button } from "~/components/ui/button";

export default function Page() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <LoginButton>
          <Button>Login With Discord</Button>
        </LoginButton>
      </div>
    </div>
  );
}
