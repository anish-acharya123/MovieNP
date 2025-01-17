import LatestMovie from "../../components/latest/LatestMovie";
import ButtonComponent from "../../ui/Button/ButtonComponent";
import EachDetail from "./EachDetail";
import { useNavigate } from "react-router-dom";

import { ScrollToTop } from "../../utils/scrollUtils";
// import { useEffect } from "react";

const DetailPage = () => {
  const navigate = useNavigate();
  ScrollToTop();

  return (
    <div className="relative md:pt-32 pt-28 flex flex-col md:gap-10">
      <div>
        <ButtonComponent
          onClick={() => navigate(-1)}
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
