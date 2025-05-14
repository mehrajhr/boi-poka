import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            loader: () => fetch('booksData.json'),
            path: "/",
            Component: Home
        },
        {
          path: '/about',
          Component: About
        },
        {
          loader: () => fetch('booksData.json'),
          path: '/readlist',
          Component: ReadList
        },
        {
          path: '/bookDetails/:id',
          Component: BookDetails,
          loader: () => fetch('booksData.json')
        }
    ]
  },
]);