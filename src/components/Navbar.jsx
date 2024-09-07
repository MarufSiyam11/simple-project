import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full top-0 z-[1000] ">
      <div className="bg-rose-100 p-5 ">
        <ul className="flex justify-between  maxwidth gap-5">
          <div>
            <h3 className="font-bold text-3xl">
              Si<span className="text-amber-500">y</span>am
            </h3>
          </div>
          <div className="flex gap-5 text-xl font-medium">
            <Link to={"/"}>
              {" "}
              <li>Home</li>
            </Link>
            <Link to={"/about"}>
              {" "}
              <li>About</li>
            </Link>

            <Link to={"/blog"}>
              <li>Blog</li>
            </Link>
          </div>
          <div className="bg-amber-500 rounded-md p-2 font-medium">
            <a href="">Hire Me</a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
