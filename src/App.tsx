import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Hoc/Layout";
import Landingpage from "./pages/Landingpage";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landingpage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
