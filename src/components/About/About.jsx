import React, { Component } from "react";
// import { useQuery, gql } from '@apollo/client';
import PageDescription from "../PageDescription/PageDescription";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "./About.css";

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
    renderMark: {
        [MARKS.BOLD]: text => <PageDescription text={text}></PageDescription>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
}



class About extends Component {
  render() {
      const {config, pageContext} = this.props;
      const aboutBio = pageContext.aboutBio;

      let socialLinks = (pageContext.socialLinks2 && pageContext.socialLinks2.map(link => link.content));
      if(!socialLinks || socialLinks.length === 0)
          socialLinks = config.siteSocialUrls;

    return (
      <div className="about">

          {/*<h3>Hi,</h3>*/}
          {/*<PageDescription text="My name is Bilal Nazir. I am a full stack developer, having experience both on front-end and backend technologies. I have over 7 years of technical experience. I have done Bachelor in Computer Science as my field of interest."/>*/}
          {/*<br/>*/}
          {/*<PageDescription text="I love solving technical challenges, data structure and algorithms.*/}
          {/*                          In addition to this, I also enjoy developing Minimum Viable Products(MVPs) for self-learning, and to improve my full stack skills." />*/}
          {/*<br/>*/}
          {/*<PageDescription text="Apart of having online presence with my own website,*/}
          {/*I believe in sharing the knowledge for which I will be posting blog notes.  " />*/}
          {/*<br/>*/}

          <div className={"page-description"}>
              <div className="page-description">{documentToReactComponents(aboutBio.json, options)}</div>
          </div>

          <SocialMediaIcons
              urls={socialLinks}
              color="currentColor"
          />
      </div>
    );
  }
}

export default About;
