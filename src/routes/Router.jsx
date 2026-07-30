import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Levels from "../pages/Levels";
import Game from "../pages/Game";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "levels",
        element: <Levels />,
      },
      {
        path: "game/:level",
        element: <Game />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;