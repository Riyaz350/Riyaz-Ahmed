import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Projects from './Projects/Projects';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path:"/projects",
    element:<Projects></Projects>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
