import React from 'react'
import style from "./Footer.module.css"
export default function Footer() {
  return (
  <>
  <footer className={style.footer}>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 text-center">
           <h4 className='fw-bolder h2 mb-4'>Location</h4>
           <p className='fw-bold'>2215 John Daniel Drive
            <br />
           Clark, MO 65243</p>
        </div>
        <div className="col-lg-4 text-center">
           <h4 className='fw-bolder h2 mb-4'>Around the web</h4>
           <ul className='list-unstyled d-flex justify-content-center '>
            <li className='d-flex align-items-center justify-content-center mx-2'><i className="fa-brands fa-facebook"></i></li>
            <li className='d-flex align-items-center justify-content-center mx-2' ><i className="fa-brands fa-twitter"></i></li>
            <li className='d-flex align-items-center justify-content-center mx-2' ><i className="fa-brands fa-linkedin"></i></li>
            <li className='d-flex align-items-center justify-content-center mx-2'><i className="fa-brands fa-youtube"></i></li>
           </ul>
        </div>
        <div className="col-lg-4 text-center">
           <h4 className='fw-bolder h2 mb-4'>About freelancer</h4>
           <p className='fw-bold'>Freelance is a free to use, MIT licensed Bootstrap theme created by Hamza Nouh</p>
        </div>
      </div>
    </div>
  </footer>
  </>
  )
}
