import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Hoc/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import Landingpage from "./Pages/Landingpage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import SignIn from "./Pages/signIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/detailpage/:id" element={<DetailPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
