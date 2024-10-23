import Navbar from "../components/Navbar/Navbar";
import image from "../assets/homeimg.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <div
        className="absolute inset-0 bg-cover bg-center  opacity-50 w-full h-full"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="max-w-[1770px]   mx-auto text-white">
        <Navbar />
        <section className=" px-6">{children}</section>
      </div>
    </main>
  );
};

export default Layout;
