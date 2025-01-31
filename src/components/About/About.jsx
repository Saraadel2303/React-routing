import React from 'react'
import Style from "./About.module.css"

export default function About() {
  return (
    <>
    <section className={Style.about}>
      <div className="container">
         <h2 className={Style.headAbout}>About</h2>
             <div className={Style.Abouticon}>
             <i className="fa-solid fa-star"></i>
             </div>
             <div className="row g-4 justify-content-center " >
              <div className="col-md-6 w-25 p-4 text-white fs-5">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className="col-md-6 w-25 p-4 text-white fs-5">
                <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
              </div>
             </div>
      </div>
    </section>
    </>
  )
}
