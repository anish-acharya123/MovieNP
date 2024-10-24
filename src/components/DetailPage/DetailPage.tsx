import ButtonComponent from "../Small/Button/ButtonComponent";
import img from "../../assets/detail.png";
import Heading from "../Small/Heading";
import PTag from "../Small/PTag";

const DetailPage = () => {
  return (
    <div className="relative py-32 flex flex-col gap-10">
      <div>
        <ButtonComponent label="← Back" className="font-medium text-xl" />
      </div>
      <div className="flex flex-row bg-gray- gap-28 py-10">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="flex flex-col gap-4">
          <p className="tracking-wide">NEW EPISODES</p>
          <Heading textfirst="Unlimited" highlightText="Entertainment," />
          <div className="flex gap-4">
            <PTag
              label="Movies"
              className="bg-white text-black px-2 text-center"
            />
            <PTag label="HD" className="border-2 px-2" />
            <PTag label="Action, Drama" />
          </div>
          <div className="h-32 bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
