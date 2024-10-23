import  { FC } from 'react'
import CompanyList from '../../constants/Companylist'

const Companylist: FC = () => {
  return (
    <div className="flex justify-between ">
      {CompanyList.map((item) => (
        <div data-aos="fade-right" data-aos-duration={item.duration}>
          <figure>
            <img src={item.img} alt="" />
          </figure>
        </div>
      ))}
    </div>
  );
}

export default Companylist