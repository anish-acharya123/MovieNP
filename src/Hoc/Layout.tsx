import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useAppSelector } from "../apps/Store";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const currentImage = useAppSelector(state=>state.image.src)

  return (
    <main className="">
      <div
        className="absolute inset-0 bg-cover bg-center  bg-scroll opacity-30 w-full h-full"
        style={{ backgroundImage: `url(${currentImage})` }}
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
