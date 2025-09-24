import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button type="submit">Log Out</Button>
      </form>
    </>
  );
};

export default Home;
