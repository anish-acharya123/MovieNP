import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="px-6 py-4 fixed top-0 w-full max-w-[1740px]">
      <div className="flex justify-between  items-center">
        <figure className="">
          <Link
            to="/"
            aria-label="MovieNP Home"
            className="flex gap-2 justify-center items-end"
          >
            <Icon
              icon="mdi:movie-open-outline"
              className="h-10 w-10 text-yellow-400"
            />
            <span className="font-medium text-2xl sm:block hidden">
              MovieNP
            </span>
          </Link>
        </figure>
        <ul className="md:flex gap-10   justify-center items-end font-medium  hidden">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/">MOVIE</Link>
          </li>
          <li>
            <Link to="/">TV SHOWS</Link>
          </li>
          <li>
            <Link to="/">WEB SERIES</Link>
          </li>
        </ul>

        <div className="flex  justify-center items-center gap-4">
          <div className="flex justify-center items-end gap-4">
            <figure>
              <button aria-label="search" onClick={() => navigate("/search")}>
                <Icon icon="ion:search" className="h-8 w-8" />
              </button>
            </figure>
            <button className="py-2 md:px-4 px-2 border-2 border-yellow-300 rounded-md sm:text-lg text-md">
              SIGN IN
            </button>
          </div>

          <div className="md:hidden block">
            <button>
              <Icon icon="mdi:hamburger-open" className="h-12 w-12" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
