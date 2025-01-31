import React from 'react'
import style from "./Contact.module.css"

export default function Contact() {
  return (
    <>
    <section className={style.contact}>
      <div className="container">
         <h2 className={style.headcontact}>CONTACT ME</h2>
             <div className={style.contacticon}>
             <i className="fa-solid fa-star"></i>
             </div>
             <div className="row">
              <div className="col-md-8 mx-auto mt-5">
                 <form action="">
                 <input type="text" className="form-control p-3 mb-3 border-0 fw-bold" id="exampleFormControlInput1" placeholder="Name"/>
                 <input type="Email" className="form-control p-3 mb-3 border-0 fw-bold" id="exampleFormControlInput1" placeholder="Email Address"/>
                 <input type="tel" className="form-control p-3 mb-3 border-0 fw-bold" id="exampleFormControlInput1" placeholder="Phone Number"/>
                 <textarea className="form-control p-3 mb-3 border-0 fw-bold" id="exampleFormControlTextarea1" placeholder="Message"></textarea>
                 <input type="submit"  value="send" />
                 </form>
              </div>
             </div>
      </div>
    </section>

    </>
  )
}
