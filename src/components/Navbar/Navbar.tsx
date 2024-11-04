import { useState } from "react";
import NavItem from "../../ui/NavList/NavItem";
import List from "../../ui/List";
import NavList from "../../constants/NavConstant";
import ButtonComponent from "../../ui/Button/ButtonComponent";
import IconComponent from "../../ui/Icon/IconComponent";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="px-6  md:py-6 py-4 border-b- z-50  h-fit fixed top-0 w-full   max-w-[1740px]  bg-[rgba(255,255,255,0.2)] backdrop-blur-sm">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/">
            <IconComponent
              parentClass="flex items-end md:text-3xl text-2xl justify- gap-2"
              icon="cbi:movies-anywhere"
              iconClass="inline text-yellow-400 md:text-4xl text-3xl"
              labelfirst="Movie"
              textClass="font-medium"
              labelSecond="NP"
              labelSecondClass="text-yellow-400"
            />
          </Link>
        </div>

        <div
          className={`fixed top-20 right-0 flex justify-center md:py-0 py-20 gap-10 md:min-h-full min-h-screen sm:w-80 w-52 bg-[#2A2A2A] transform transition-transform duration-300 md:transform-none md:static md:flex md:space-x-8 md:bg-transparent md:w-auto md:h-auto ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <List
            items={NavList}
            className="flex md:flex-row  text-right   flex-col gap-10 cursor-pointer md:items-end items-start "
            renderItem={(item) => (
              <li
                key={item.id}
                className="text-xl "
                onClick={() => setOpen(!open)}
              >
                <NavItem label={item.label} className=" " link={item.link} />
              </li>
            )}
          />
        </div>

        <div className="md:flex items-center justify-center gap-4 flex ">
          <ButtonComponent
            icon="iconamoon:search-duotone"
            onClick={() => navigate("/search")}
            className="text-white  md:text-3xl text-2xl"
          />
          <ButtonComponent
            onClick={() => navigate("/signin")}
            label="SIGN IN"
            className="border-2 border-yellow-400 md:px-3 md:py-2 p-1 text-[0.7rem] sm:text-sm md:text-xl  rounded-md "
          />

          <div
            onClick={() => setOpen(!open)}
            className="md:hidden block h-fit  pt-2"
          >
            {open ? (
              <ButtonComponent
                icon="bitcoin-icons:cross-filled"
                className=" text-yellow-400 text-4xl "
              />
            ) : (
              <ButtonComponent
                icon="quill:hamburger-sidebar"
                className=" text-yellow-400   text-4xl "
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
