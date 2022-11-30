import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import PreLoader from "./components/PreLoader/PreLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
  },
]);

function App() {
  return (
    <>
      <PreLoader />
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
