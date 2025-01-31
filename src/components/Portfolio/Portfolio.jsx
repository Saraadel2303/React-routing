import React from "react";
import style from "./Portfolio.module.css";
import cake from "../../assets/cake.png";
import cabin from "../../assets/cabin.png";
import circus from "../../assets/circus.png";
import game from "../../assets/game.png";
import safe from "../../assets/safe.png";
import submarine from "../../assets/submarine.png";

export default function Portfolio() {

  
  return (
    <>
      <section className={style.portfolio}>
        <div className="container ">
          <h2 className={style.headportfolio}>PORTFOLIO</h2>
          <div className={style.portfolioicon}>
            <i className="fa-solid fa-star"></i>
          </div>
       
            <div className="row g-4 mt-5">
              <div className="col-lg-4">
                <div className={style.imgcontainer}>
                  <img src={cake} width="100%" alt="" />
                  <div className={style.overlay}><i className="fa-solid fa-plus"></i></div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={style.imgcontainer}>
                  <img src={cabin} width="100%" alt="" />
                  <div className={style.overlay}><i className="fa-solid fa-plus"></i></div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={style.imgcontainer}>
                  <img src={circus} width="100%" alt="" />
                  <div className={style.overlay}><i className="fa-solid fa-plus"></i></div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={style.imgcontainer}>
                  <img src={game} width="100%" alt="" />
                  <div className={style.overlay}><i className="fa-solid fa-plus"></i></div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={style.imgcontainer}>
                  <img src={safe} width="100%" alt="" />
                  <div className={style.overlay}><i className="fa-solid fa-plus"></i></div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={style.imgcontainer}>
                  <img src={submarine} width="100%" alt="" />
                  <div className={style.overlay}><i className="fa-solid fa-plus"></i></div>
                </div>
              </div>




            </div>
        </div>
      </section>
    </>
  );
}
