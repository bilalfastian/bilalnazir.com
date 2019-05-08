import React, { Component } from "react";
import Img from "gatsby-image";
import Sidebar from '../Sidebar';
import "./About.css";

class About extends Component {
  render() {

    const { markdownRemark } = this.props.data;

    return (
      <div className="about">

        <div className="sidebarProfile">
          <Sidebar />
        </div>        
        <div className="aboutMe">
          {/* <h1>About Me</h1>
          <p>
            I am basically a software developer with full stack development expertise of over 5+ years, from developing APIs in NodeJS, or Java or PHP to writing application front-end with ReactJS with integration including with third parties services. I also have experience on cloud services on Salesforce Platform as well.
          </p>
          <p>
            Apart from writing a good software, I enjoy mentoring the juniors to grow and work together more efficiently and effectively.
          </p> */}

          <h1>{markdownRemark.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{__html: markdownRemark.html}} />

          {this.props.data && 
            <Img style={{width: '100%'}} fluid={this.props.data.fileName.childImageSharp.fluid} />
          }          
        </div>
      </div>
    );
  }
}

export default About;