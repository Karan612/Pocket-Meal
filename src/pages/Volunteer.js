import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Volunteer extends Component {
    render() {
        return(
            <div className="Form">

            <p className = "f2 b code navy bb br-pill tc">Personal Information</p>
            
            <form className="pa6 ba navy br4 tj" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="username" className="FormField__Input" placeholder="Enter Your Full Name" name="name" />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">Email Address</label>
              <input type="text" id="email" className="FormField__Input" placeholder="Enter Your Email Address" name="email" />
            </div>

            <div className="FormField tc">
              <NavLink to = "/Questions"><button className="FormField__Button mr-20 grow">Proceed</button></NavLink>
            </div>
          
            </form>
        </div>
        );
    }
}

export default Volunteer;