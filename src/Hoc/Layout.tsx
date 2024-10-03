import Navbar from "../Components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-[1740px]  bg-black mx-auto text-white">
      <Navbar />
      <section className="px-6">{children}</section>
    </main>
  );
};

export default Layout;
