import { useState } from "react";
import NavItem from "../Small/NavList/NavItem";
import List from "../Small/List";
import NavList from "../../constants/NavConstant";
import ButtonComponent from "../Small/Button/ButtonComponent";
import IconComponent from "../Small/Icon/IconComponent";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="px-6  md:py-6 py-4 border-b- z-50  h-fit fixed top-0 w-full   max-w-[1740px]  bg-[rgba(255,255,255,0.2)] backdrop-blur-sm">
      <div className="flex justify-between items-center">
        <div>
          <IconComponent
            parentClass="flex items-end md:text-3xl text-2xl justify- gap-2"
            icon="cbi:movies-anywhere"
            iconClass="inline text-yellow-400 md:text-4xl text-3xl"
            labelfirst="Movie"
            textClass="font-medium"
            labelSecond="NP"
            labelSecondClass="text-yellow-400"
          />
        </div>

        <div onClick={() => setOpen(!open)}>
          {open ? (
            <ButtonComponent
              icon="bitcoin-icons:cross-filled"
              className=" text-yellow-400 md:hidden block text-4xl "
            />
          ) : (
            <ButtonComponent
              icon="quill:hamburger-sidebar"
              className=" text-yellow-400 md:hidden block text-4xl "
            />
          )}
        </div>

        <div className="md:block hidden">
          <List
            items={NavList}
            className="flex gap-10 cursor-pointer items-end "
            renderItem={(item) => (
              <li key={item.id} className="text-xl ">
                <NavItem label={item.label} className=" " link={item.link} />
              </li>
            )}
          />
        </div>

        <div className="md:flex items-center gap-4 hidden ">
          <ButtonComponent
            icon="iconamoon:search-duotone"
            onClick={() => console.log("/search")}
            className="text-white  md:text-3xl hidden md:block"
          />
          <ButtonComponent
            onClick={() => navigate("/signin")}
            label="SIGN IN"
            className="border-2 border-yellow-400 md:px-3 md:py-2 p-2 text-sm md:text-xl  rounded-md hidden md:block"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
