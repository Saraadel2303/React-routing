import React from 'react'
import "./Home.css"
import photo1 from "../../assets/home.svg"

export default function Home() {
  return (
   <>
   <header>
    <div className="container d-flex align-items-center flex-column">
    <img className="" src={photo1} width="250px"   alt="" />
    </div>
   </header>
   </>
  )
}
