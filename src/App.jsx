
import Portfolio from "./components/Portfolio/Portfolio"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import NotFound from "./components/NotFound/NotFound"


export default function App(){

  const router= createBrowserRouter([
    {path:"" , element:<Layout/> , children:[
      {path:"", element:<Portfolio/>},
      {path:"Portfolio", element:<Navigate to={"/"}/>},
      {path:"About", element:<About/>},
      {path:"Contact", element:<Contact/>},
      {path:"*", element:<NotFound/>},
    ]}
  ])

  return<>
  <RouterProvider router={router}>
  </RouterProvider>
  </>
}
