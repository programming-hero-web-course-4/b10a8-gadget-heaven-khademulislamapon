import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Home from './component/Home/Home';
import Dashboard from './component/Dashboard/Dashboard';
import Statistics from './component/Statistics/Statistics';
import ProductDetails from './component/ProductDetails/ProductDetails';
import ErrorPage from './component/ErrorPage/ErrorPage';
import PreOrder from './component/PreOrder/PreOrder';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/Products.json')
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: () => fetch('/Products.json')
      },
      {
        path: "productDetails/:productId",
        element: <ProductDetails />,
        loader: () => fetch('/Products.json'),
      },
      {
        path: "preOrder",
        element: <PreOrder />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
    </StrictMode>
  </HelmetProvider>
)