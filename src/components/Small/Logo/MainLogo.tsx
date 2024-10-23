import { Icon } from "@iconify/react";
import { FC } from "react";

const MainLogo:FC = () => {
  return (
    <figure className="flex items-end text-3xl justify- gap-2">
      <Icon
        icon="cbi:movies-anywhere"
        className="inline text-yellow-400 text-4xl "
      />

      <p className="font-medium">
        Movie<span className="text-yellow-400">NP</span>
      </p>
    </figure>
  );
};

export default MainLogo;
