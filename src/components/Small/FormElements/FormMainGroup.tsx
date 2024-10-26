const FormMainGroup = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative  py-52 flex justify-center items-center ">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className=" bg-[rgba(0,0,0,0.2)] backdrop-blur-xl space-y-4 min-w-[30rem] max-w-[30rem]  py-8 px-16 shadow-md rounded-md  "
      >
        {children}
      </div>
    </div>
  );
};

export default FormMainGroup;
