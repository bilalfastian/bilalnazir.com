import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import About from "../components/About/About";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {        
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <About data={this.props.data} />
        </div>
      </Layout>
    );
  }
}

export default Index;

export const query = graphql`
  query {
    markdownRemark(frontmatter: {
      slug: {
        eq: "about"
      }
    }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
    fileName: file(relativePath: { eq: "assets/images/profile_photo2.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 980){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`