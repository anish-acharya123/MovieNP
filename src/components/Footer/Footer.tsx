import { FC } from "react";
import IconComponent from "../Small/Icon/IconComponent";

const Footer: FC = () => {
  return (
    <footer className="px-6 py-10 border-t-2 flex  gap-4 relative bottom-0">
      <section className="flex-1">
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
        <p className="text-justify text-sm text-gray-300 mt-4">
          MovieNP is an online movie streaming platform that offers pirated
          content that is not released. It has a huge collection of latest
          movies and films that still not available on the market and YouTube.
          You can watch and download all contents free of costs, but they are
          illegal, so you have to take some precautions. It is not available in
          all countries so you can use VPN and choose a location with access to
          Filmagnet. Here, we will discuss the MovieNP.
        </p>
      </section>
      <section className="flex-1">anish</section>
      <section className="flex-1"></section>
    </footer>
  );
};

export default Footer;
