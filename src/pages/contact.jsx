import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Contact from "../components/Contact/Contact";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`Contact | ${config.siteTitle}`} />
          <Contact />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
