import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import SingleProduct from './components/SingleProduct'
import CartPage from './components/CartPage'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/products',
    element:<Products/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/singleProduct',
    element:<SingleProduct/>
  },
  {
    path:'/cart',
    element:<CartPage/>
  },
])
const App = () => {
  return (
    <>
<RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App