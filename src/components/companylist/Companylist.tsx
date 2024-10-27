import  { FC } from 'react'
import CompanyList from '../../constants/Companylist'

const Companylist: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {CompanyList.map((item) => (
        <div data-aos="fade-right" data-aos-duration={item.duration}>
          <figure>
            <img src={item.img} alt="" className='md:h-[15rem] md:w-full h-[10rem]' />
          </figure>
        </div>
      ))}
    </div>
  );
}

export default Companylist