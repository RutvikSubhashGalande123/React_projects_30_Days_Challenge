import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/Home";
import YourTasks from "./components/YourTasks";
import Navbar from "./components/Navbar";

// Create your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/your-tasks", element: <YourTasks /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
