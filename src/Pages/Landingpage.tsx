import { FC } from "react";
import Home from "../components/Home/Homepage";
import Upcoming from "../components/upcoming/Upcoming";
import Companylist from "../components/companylist/Companylist";
import LatestMovie from "../components/latest/LatestMovie";

const Landingpage: FC = () => {
  return (
    <div>
      <Home />
      <Upcoming />
      <Companylist />
      <LatestMovie />
    </div>
  );
};

export default Landingpage;


