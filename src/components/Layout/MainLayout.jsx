import Footer from "../Footer";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="pt-[60px] maxwidth mx-auto overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
