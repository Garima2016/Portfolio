import React from 'react'
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";

export default function Contact() {
    const formRef = useRef()
   // const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ii3fmqz', 
            'template_3pd94wb', 
            formRef.current, 
            '7XPd-2BUAKK0whQal')

            .then((result) => {
                console.log(result.text);
                // setDone(true)
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
        
    };
    return (
        <>
            <div className="c">
                <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Let's Talk</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={Phone} className="c-icon " />
                                +91 8373927734
                            </div>
                            <div className="c-info-item">
                                <img className="c-icon" src={Email} alt="" />
                                garrygupta2016@gmail.com
                            </div>
                            <div className="c-info-item">
                                <img className="c-icon" src={Address} alt="" />
                                Patel Nagar, Gurgaon Haryana
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                        <p className="c-desc">
                            <h2>Get in touch.</h2>
                            Always available for freelancing if the right project comes along me.
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input style={{ backgroundColor: darkMode && "#333", color:darkMode && "#fff" }} type="text" placeholder="Name" name="user_name" />
                            <input style={{ backgroundColor: darkMode && "#333", color:darkMode && "#fff" }} type="text" placeholder="Subject" name="user_subject" />
                            <input style={{ backgroundColor: darkMode && "#333", color:darkMode && "#fff" }} type="text" placeholder="Email" name="user_email" />
                            <textarea style={{ backgroundColor: darkMode && "#333", color:darkMode && "#fff" }} rows="5" placeholder="Message" name="message" />
                            <br /><button>Submit</button>
                            {/* {done && "Thank you..."} */}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
