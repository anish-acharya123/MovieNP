import LatestMovie from "../../components/latest/LatestMovie";
import ButtonComponent from "../../components/Small/Button/ButtonComponent";
import EachDetail from "./EachDetail";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative pt-32 flex flex-col gap-10">
      <div>
        <ButtonComponent
          onClick={() => navigate("/")}
          label="← Back"
          className="font-medium text-xl"
        />
      </div>
      <EachDetail />
      <LatestMovie />
    </div>
  );
};

export default DetailPage;
