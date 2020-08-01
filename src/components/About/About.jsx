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
