import React, { Component } from 'react'
import '../css/Contactus.css'

import { Button } from 'reactstrap'

export default class Contactus extends Component {
    render() {
        return (
            <div>
                <div className="contact-us">
                    <div className="cricle-contact"></div>
                    <div className="container">
                    <div className="how-it-title">
                      <h2>Contacts us</h2>  
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br /> 
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br />
                      nisi ut aliquip ex ea commodo consequat.</p> 
                         </div> 

<div className="row">
    <div className="col-md-4">
        <div className="contact-box">
            <div className="contact-icon">
                <img src={require('../assets/contact-phone.png')} alt=""/>
                
            </div>
            <div className="contact-text">
                <h5>Call</h5>
                <p> <a href="tel:+1 445 554 445">+1 445 554 445</a> 
                    <a href="+1 835 538 945">+1 835 538 945</a> </p>
            </div>
        </div>
    </div>

    <div className="col-md-4">
        <div className="contact-box">
            <div className="contact-icon">
                <img src={require('../assets/contact-email.png')} alt=""/>
                
            </div>
            <div className="contact-text">
                <h5>Email</h5>
                <p> <a href="mailto:dashify@gmail.com">dashify@gmail.com</a> 
                    <a href="mailto:info-dashify@gmail.com">info-dashify@gmail.com</a> </p>
            </div>
        </div>
    </div>

    <div className="col-md-4">
        <div className="contact-box">
            <div className="contact-icon">
                <img src={require('../assets/map-pin.png')} alt=""/>
                
            </div>
            <div className="contact-text">
                <h5>Adress</h5>
                <p> 455 Larkspur Dr. California Springs, CA 92926 USA</p>
            </div>
        </div>
    </div>

</div>



                    </div>
                </div>

                <div className="contact-map">
                    <div className="contact-cricle"></div>
                    <div className="container">
                        <h2>Reach out to us for any inquiry </h2>
                        <div className="row">
                            <div className="col-md-4">
<div className="form-group">
    <label>Full Name</label>
    <input type="text" className="form-control"/>
</div>
<div className="form-group">
    <label>Your email</label>
    <input type="email" className="form-control"/>
</div>
<div className="form-group">
    <label>Message</label>
    <textarea className="form-control"></textarea>
</div>
<div className="form-group">
    <button className="btn-sub">Sumbit</button>
</div>

                            </div>

<div className="col-md-8">
    <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3166.9059533057653!2d-122.1299754846913!3d37.46294237981748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s455%20Larkspur%20Dr.%20California%20Springs%2C%20CA%2092926%20USA!5e0!3m2!1sen!2sin!4v1599600315314!5m2!1sen!2sin" width="100%" height="380" frameBorder="0" style={{border:'0'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
    </div>
</div>


                        </div>
                    </div>
                </div>
                <div className="contact-cover"></div>
                <div className="socail-media">
                    <div className="container">
                        <h2>Social network</h2>
                        <ul>
                            <li><a href="#"><img src={require('../assets/socail-1.png')} alt=""/></a></li>
                            <li><a href="#"><img src={require('../assets/socail-2.png')} alt=""/></a></li>
                            <li><a href="#"><img src={require('../assets/socail-3.png')} alt=""/></a></li>
                            <li><a href="#"><img src={require('../assets/socail-4.png')} alt=""/></a></li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}
