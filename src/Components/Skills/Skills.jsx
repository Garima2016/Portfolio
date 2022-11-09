import React from 'react'
import './skills.css'
import javalogo from "../../img/javalogo.png";
import reactlogo from "../../img/reactlogo.png"
import htmllogo from "../../img/htmllogo.png"
//import csslogo from "../../img/csslogo.png";
import jslogo from "../../img/jslogo.png"
import sqllogo from "../../img/sqllogo.png"
export default function Skills() {
    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide " data-bs-ride="carousel">
                <h1 className='text-center'>SKILLS</h1>
                <ol className="carousel-indicators">
                    <li type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></li>
                    <li type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></li>
                    <li type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></li>
                    <li type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></li>
                    <li type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></li>
                    <li type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></li>
                </ol>
                <div className="carousel-inner p-20 m-50 mw-80">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={htmllogo} className="d-block " alt="..." />
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h5>Html</h5>
                        </div> */}
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png" className="d-block " alt="..." />
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h5>Css</h5>
                        </div> */}
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={jslogo} className="d-block" alt="..." />
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h5>Javascript</h5>
                        </div> */}
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={reactlogo} className="d-block " alt="..." />
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h5>Reactjs</h5>
                        </div> */}
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={javalogo} className="d-block " alt="..." />
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h5>Java</h5>
                        </div> */}
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={sqllogo} className="d-block" alt="..." />
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h5>mySQL Database</h5>
                        </div> */}
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
