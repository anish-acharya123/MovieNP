import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Hoc/Layout";
import Landingpage from "./pages/LandingPage";

function App() {
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
