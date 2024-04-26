import Link from "next/link";
import LoginButton from "~/components/custom/buttons/login-button";
import LogoutButton from "~/components/custom/buttons/logout-button";
import FormArea from "~/components/custom/forms/formArea";
import { Button } from "~/components/ui/button";
import { getServerAuthSession } from "~/server/auth";

export default async function HomePage() {
  const session = await getServerAuthSession();

  return (
    <main className="p-5">
      <div className="text-3xl font-bold">Building the backend</div>

      {session ? (
        <div className="rounded-lg border p-4">
          name: {session?.user?.name}
          <br />
          email: {session?.user?.email}
          <br />
          role: {session?.user?.role}
          <br />
          <br />
          <LogoutButton>
            <Button>Logout</Button>
          </LogoutButton>
        </div>
      ) : (
        <div>
          <LoginButton>
            <Button>Login with Discord</Button>
          </LoginButton>
        </div>
      )}

      <FormArea />
    </main>
  );
}
