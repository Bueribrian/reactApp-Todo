import React, { Component } from "react";
import { MDBNavbar, MDBBadge } from "mdbreact";

class NavbarPage extends Component {
render() {
  return (
      <MDBNavbar color="unique-color-dark py-3"  dark>
        <h2 className='text-white h5 p-0 m-0'>
        Notas  <MDBBadge>{this.props.notes.length} </MDBBadge>
        <span className='ml-5 text-gray h5'> Notas completadas <MDBBadge>{this.props.noteFinished.length}</MDBBadge></span>
        </h2>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;