import React from 'react'
import "./about.css";
import Girl from "../../img/About.jpg";

export default function About() {
  return (
    <>
     <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Girl}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am undergraduate Student pursuing my Bachelors of Technology in Computer Science & Engineering, with experience in Web Development.
        </p>
        <p className="a-desc">
          My aim is to be a full stack developer, for which I have constantly working very hard in my field. I have worked on many projects as frontend developer. <br /><br />
          I am looking for an opportunities to work as Software Engineer/Web Developer through which I'll explore more things.  
        </p>
        
      </div>
    </div> 
    </>
  )
}
