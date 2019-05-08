import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import ResumePage from "../components/Resume";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Resume extends React.Component {
  render() {      
    
    console.log('Resume Data', this.props);
    
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          
          <ResumePage data={this.props.data} />
        </div>
      </Layout>
    );
  }
}

export default Resume;

export const query = graphql`
  query {
    markdownRemark(frontmatter: {
      slug: {
        eq: "resume"
      }
    }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }    
  }
`