import NavItem from "../Small/NavList/NavItem";
import List from "../Small/List";
import NavList from "../../constants/NavConstant";
import ButtonComponent from "../Small/Button/ButtonComponent";
import IconComponent from "../Small/Icon/IconComponent";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="px-6  py-6 border-b- z-50  h-fit fixed top-0 w-full   max-w-[1740px]  bg-[rgba(255,255,255,0.2)] backdrop-blur-sm">
      <div className="flex justify-between items-center">
        <div>
          <IconComponent
            parentClass="flex items-end text-3xl justify- gap-2"
            icon="cbi:movies-anywhere"
            iconClass="inline text-yellow-400 text-4xl"
            labelfirst="Movie"
            textClass="font-medium"
            labelSecond="NP"
            labelSecondClass="text-yellow-400"
          />
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

        <div className="flex items-center gap-4">
          <ButtonComponent
            icon="iconamoon:search-duotone"
            onClick={() => console.log("/search")}
            className="text-white  text-3xl"
          />
          <ButtonComponent
            onClick={() => navigate("/signin")}
            label="SIGN IN"
            className="border-2 border-yellow-400 px-3 py-2 rounded-md"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
