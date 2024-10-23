import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Hoc/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import Landingpage from "./Pages/Landingpage";

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
