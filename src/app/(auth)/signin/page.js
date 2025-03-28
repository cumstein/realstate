import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import SigninPage from "@/template/SigninPage";

async function Signin() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (session) redirect("/");

  return <SigninPage />;
}

export default Signin;
