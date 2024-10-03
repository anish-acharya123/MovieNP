import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Hoc/Layout";
import Landingpage from "./Pages/Landingpage";
import Searchpage from "./Pages/Searchpage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/search" element={<Searchpage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
