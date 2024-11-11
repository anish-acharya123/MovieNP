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

// <div className="grid grid-cols-4 gap-4 bg-green-300 justify-between">
//   <SkeletonCompany count={4} />
// </div>;
