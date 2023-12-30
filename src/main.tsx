import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './error-page';
import PrimaryLayout from './layouts/PrimaryLayout';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import DashboardIndex from './pages/Dashboard/Index';
import PrivateRoute from './components/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardIndex />,
          },
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
