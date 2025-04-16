import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from '../pages/Root/Root';
import Error from '../pages/ErrorPage/Error';
import Home from '../pages/Home/Home';



export const router = createBrowserRouter([
    {
      path: "/",
       Component : Root,
       errorElement: <Error></Error>,
    children: [
        {index: true,
          loader: () => fetch('bookData.json'),
            path : "/",
            Component: Home
        }

    ]
    },
  ]);
  
  