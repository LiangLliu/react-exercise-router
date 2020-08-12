import React, { Component } from 'react';

class AboutUs extends Component{
  render() {
    return (
      <div className="about">
        <p>Company: ThoughtWorks Local</p>
        <p>Location: Xi'an</p>
        <p></p>
        <p>For more information, please view our <Link to='/'>website</Link>.</p>
      </div>
    )
  }
}

export default AboutUs;
