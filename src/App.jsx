// eslint-disable-next-line no-unused-vars
import React from "react";
import { Student } from "./Components/Student";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/student",
    element: <Student />
  }
])

function App (){
  return(
    <div className="flex h-full">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;