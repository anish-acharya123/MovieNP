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

  const routes = [
    { path: "/", element: <Landingpage /> },
    { path: "/detailpage/:id", element: <DetailPage /> },
    { path: "/movies", element: <Movies /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/signin", element: <SignIn /> },
    { path: "/search", element: <SearchPage /> },
    { path: "*", element: <NotFound /> },
  ];

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
