
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider, } from "react-router-dom";
// ** import styles
import "./style/app.css";
import "./style/reset.css";
import "./style/tweeteditor.css";
// ** import components
import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Explorer from "./pages/navigation/explorer.jsx";
import Bookmarks from "./pages/navigation/Bookmarks.jsx";
import Lists from "./pages/navigation/Lists.jsx";
import Messages from "./pages/navigation/Messages.jsx";
import More from "./pages/navigation/More.jsx";
import Notifications from "./pages/navigation/Notifications.jsx";
import Profile from "./pages/navigation/Profile.jsx";




const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element:<Home/>

  // },
  {
    path: '/',
    element: <Layout />,

    children: [

      {
        path: "home",
        element:  <Home/>
      },

      {
        path: 'Bookmarks',
        element: <Bookmarks />
      },

      {
        path: 'Explorer',
        element: <Explorer />
      },


      {
        path: 'Lists',
        element: <Lists />
      },

      {
        path: 'Messages',
        element: <Messages />
      },

      {
        path: 'More',
        element: <More />
      },
      {
        path: 'Notifications',
        element: <Notifications />
      },

      {
        path: 'Profile',
        element: <Profile />,

        children: [
          // {
          //   path: 'Post',
          //   element: <Posts/>

          // }

        ]
      },
    ]

  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);