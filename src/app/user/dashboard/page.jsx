// ADD MIDDLEWARE

import { authUserSession } from "@/services/auth-services";
import Image from "next/image";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {user.name}!</h2>
      <Image src={user.image} alt="..." width={250} height={250} />
    </div>
  );
};

export default Page;
