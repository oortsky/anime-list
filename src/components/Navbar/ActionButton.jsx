import Link from "next/link";
import { authUserSession } from "@/services/auth-services";

const ActionButton = async () => {
  const user = await authUserSession();

  // This must be use MiddleWare
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  // This UI must be using button and avatar dropdown menu
  return (
    <div className="flex justify-between gap-2">
      {user ? (
        <Link href="/user/dashboard" className="link-primary">
          Dashboard
        </Link>
      ) : null}
      <Link href={actionURL} className="btn-primary">
        {actionLabel}
      </Link>
    </div>
  );
};

export default ActionButton;
