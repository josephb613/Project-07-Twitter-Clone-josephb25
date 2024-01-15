import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from "./pages/home";
import ErrorPage from "./components/error-page"
import Layout from "./components/layout";

import HomediRection from "../src/pages/page-redirection/home"
import Explorer from "../src/pages/page-redirection/explorer"
import Bookmarks from "../src/pages/page-redirection/Bookmarks"
import More from "./pages/page-redirection/More";
import Profile from "./pages/page-redirection/Profile";
import Notifications from "./pages/page-redirection/Notifications";
import Messages from "./pages/page-redirection/Messages";


const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "Explorer ",
        element: <Explorer />,
      
      },
      {
        path: "HomediRection",
        element: <HomediRection />,

      },
      {
        path: "Bookmarks",
        element: <Bookmarks/>,

      },

      {
        path: "More",
        element: <More />,

      },

      {
        path: "Profile",
        element: <Profile/>,

      },

      {
        path: "Notifications",
        element: <Notifications />,

      },

      {
        path: "Messages",
        element: <Messages/>,

      },
 

   

    ],
  },

]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
