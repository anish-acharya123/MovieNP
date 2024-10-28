const FormMainGroup = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative  py-32 flex justify-center items-center ">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="bg-[rgba(0,0,0,0.2)] backdrop-blur-xl space-y-4 py-8 px-8 sm:px-12 md:px-16 shadow-md rounded-md 
                   w-full max-w-md sm:max-w-lg md:max-w-xl "
      >
        {children}
      </div>
    </div>
  );
};

export default FormMainGroup;
