"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { logOutUser } from "@/actions/user";

const Navbar = () => {
  const pathName = usePathname();

  const handleSignOut = async () => {
    await logOutUser();
  };

  return (
    <nav className="w-3/6 flex items-center justify-between h-14 border-t shadow border-gray-150 rounded-lg px-3 transition-all backdrop-blur-lg bg-background/50">
      <div className="flex justify-center items-center gap-10">
        <h3 className="text-xl bg-gradient-to-r from-indigo-600 via-violet-500 to-blue-700 bg-clip-text text-transparent font-black">
          100xJobs
        </h3>

        <div className="flex justify-center items-center gap-5 text-gray-500 font-semibold tracking-tighter">
          <Link href="/">
            <p className="cursor-pointer hover:text-gray-900">Home</p>
          </Link>

          <Link href="/jobs">
            <p className="cursor-pointer hover:text-gray-900">Explore</p>
          </Link>
        </div>
      </div>

      {pathName !== "/login" && pathName !== "/jobs" ? (
        <Link href="/login">
          <Button className="font-medium">Join Now</Button>
        </Link>
      ) : null}

      {pathName === "/jobs" ? (
        <Button
          onClick={handleSignOut}
          variant="outline"
          className="font-medium rounded-md"
        >
          Sign Out
        </Button>
      ) : null}
    </nav>
  );
};

export default Navbar;
