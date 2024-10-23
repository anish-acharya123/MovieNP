import Navbar from "../components/Navbar/Navbar";
import image from "../assets/homeimg.png";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <div
        className="absolute inset-0 bg-cover bg-center  bg-scroll opacity-30 w-full h-full"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="max-w-[1770px]   mx-auto text-white">
        <Navbar />
        <section className=" px-6">{children}</section>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
