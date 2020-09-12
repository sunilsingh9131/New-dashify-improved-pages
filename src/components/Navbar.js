import React, { Component } from 'react'
import { NavLink, withRouter} from "react-router-dom";
import logo from '../assets/Logo.png'
import '../css/Navbar.css'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter ,MDBCol,MDBRow} from 'mdbreact';
import { Checkbox } from '@material-ui/core';

 class Navbar extends Component {
  state = {
    isOpen: false ,
    modal: false
    
  }
  toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });     
  }
 
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
    render() {
        return (
  
      <MDBNavbar  className="navbar navbar-expand-lg navbar-light "  id='navbar' >
<MDBContainer>
<MDBNavbarBrand>
<img src={logo} alt='logo' className='logo'/>
        </MDBNavbarBrand>
     
        <MDBNavbarToggler  onClick={this.toggleCollapse} />
        <MDBCollapse  isOpen={this.state.isOpen} navbar>
        
           <MDBNavbarNav right className="menudiv">
             <MDBNavItem>
              <MDBNavLink to="/" id="home">Home</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="/aboutus" id='aboutus'>About Us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/features" id='features'>Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Pricing"  id='pricing'>Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/support"  id='support'>Support</MDBNavLink>
            </MDBNavItem>
            
         
            <MDBNavItem>
              <MDBNavLink to="/signin"  id='signin' onClick={this.toggle}>Sign in</MDBNavLink>
            </MDBNavItem>
             
              
                
                       
                           
                        <MDBModal isOpen={this.state.modal} toggle={this.toggle} id='signin_container' >
                            <MDBModalHeader toggle={this.toggle} id='signin_header'>
                                <span></span>
                                <span id='signin_header_heading'>Log In</span>
                            </MDBModalHeader>
                            <MDBModalBody style={{borderRadius: '10px'}} >
                            <div className='signin_body_heading' >
                            Email
                            </div>
                            <div><input className='signin_inputbox' /></div>
                            <div className='signin_body_heading' >
                            Password 
                            </div>
                            <div><input className='signin_inputbox' /></div>
                            <div>
                              <span><Checkbox/></span>
                              <span className='signin_body_heading'>Remember me</span>
                            </div>
                            <div>
                            <MDBBtn id='signin_button'>Send</MDBBtn>
                            </div>

                            </MDBModalBody>
                        </MDBModal>
                      
              
                          <button id='demo_box' className='demo'>
                          Book A Demo
                          </button>
              
             
          </MDBNavbarNav>
        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
           
        )
    }
}
export default withRouter(Navbar)