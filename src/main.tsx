import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from 'pages/Home.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from 'pages/About.tsx'
import Article from 'pages/Article.tsx'
import Pricing from 'pages/Pricing.tsx'
import ErrorPage from 'pages/ErrorPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/article',
    element: <Article />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
