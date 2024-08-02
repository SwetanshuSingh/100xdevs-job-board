import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="w-3/6 flex items-center justify-between h-14 border-t shadow border-gray-150 rounded-lg px-3 transition-all backdrop-blur-lg bg-background/50">
      <h3 className="text-xl bg-gradient-to-r from-indigo-600 via-violet-500 to-blue-700 bg-clip-text text-transparent font-black">
        100xJobs
      </h3>
      <Link href="/login">
        <Button className="font-medium">Join Now</Button>
      </Link>
    </nav>
  );
};

export default Navbar;
