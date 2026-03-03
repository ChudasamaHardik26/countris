import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home"
import App from "./App";
import Contact from "./components/Contact";
import Error from "./components/Error"
import CountryDetail from "./components/CountryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/country",
        element: <CountryDetail />,
      }
    ],
  },
]);
createRoot(document.querySelector("#root")).render(
  <RouterProvider router={router} />,
);
