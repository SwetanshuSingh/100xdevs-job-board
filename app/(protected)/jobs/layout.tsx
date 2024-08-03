import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-4 items-center pt-4 pb-20">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
