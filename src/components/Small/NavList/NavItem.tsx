import { NavLink } from "react-router-dom";

type NavItemProps = {
  label: string;
  className: string;
  link: string;
};

const NavItem = ({ label, className, link }: NavItemProps) => {
  return (
    <>
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? `text-yellow-400 ${className}` : `text-white ${className}`
        }
      >
        <p>{label}</p>
      </NavLink>
    </>
  );
};

export default NavItem;
