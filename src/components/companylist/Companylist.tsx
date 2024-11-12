import { FC } from "react";
import CompanyList from "../../constants/Companylist";
import { SkeletonCompany } from "../skeleton";

const Companylist: FC = () => {

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {CompanyList ? (
        <>
          {CompanyList.map((item) => (
            <div
              key={item.id}
              data-aos="fade-right"
              data-aos-duration={item.duration}
            >
              <figure>
                <img
                  src={item.img}
                  alt="company"
                  className="md:h-[15rem] md:w-full h-[10rem] "
                />
              </figure>
            </div>
          ))}
        </>
      ) : (
        <SkeletonCompany count={4} />
      )}
    </div>
  );
};

export default Companylist;
