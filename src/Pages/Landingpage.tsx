import { FC } from "react";
import Home from "../components/Home/Homepage";
import Upcoming from "../components/upcoming/Upcoming";

const Landingpage: FC = () => {
  return (
    <div>
      <Home />
      <Upcoming />
    </div>
  );
};

export default Landingpage;
