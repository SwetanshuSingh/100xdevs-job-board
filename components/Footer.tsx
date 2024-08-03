import { Copyright } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full h-20 flex justify-between items-center bg-white/10 p-4 lg:px-14 border border-t-gray-200/90">
      <div className="flex justify-center items-center gap-4 font-normal text-slate-600">
        <Link href='https://100xdevs.com'>
        <p>LinkedIn</p>
        </Link>
        
        <Link href='https://x.com/swetanshu789'><p>Twitter</p>
        </Link>
        <Link href='https://github.com/swetanshusingh'><p>Github</p>
        </Link>
        <Link href='https://100xdevs.com'>
        <p>Website</p>
        </Link>
      </div>
      <span className="flex text-xs font-normal text-slate-600 items-center gap-1">
        <Copyright size={14} />
        <p>2024</p>
        <p>100xdevs</p>
      </span>
    </footer>
  );
};

export default Footer;
