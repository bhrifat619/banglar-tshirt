import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  json,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Mainlayout from './components/Layout/Mainlayout';
import OrderReview from './components/OrderReview/OrderReview';
import Grandpa from './components/GrandpaPropsDrill/Grandpa';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('tshirt.json')
      },
      {
        path:"review",
        element:<OrderReview></OrderReview>
      },
      {
        path:"grandpa",
        element:<Grandpa></Grandpa>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)