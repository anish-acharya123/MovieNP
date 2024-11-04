import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Hoc/Layout";
import Landingpage from "./Pages/Landingpage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import SignIn from "./Pages/signIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Movies from "./Pages/Movies/Movies";
import SearchPage from "./Pages/Search/Index";
import NotFound from "./Pages/NotFound";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

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
          <Route path="/movies" element={<Movies />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
