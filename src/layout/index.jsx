import React from "react";
import Helmet from "react-helmet";
import Masthead from '../components/Masthead';
import Footer from '../components/Footer/Footer';
import config from "../../data/SiteConfig";
import "./index.css";
import "../../static/_sass/minimal-mistakes.scss";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Masthead />
        <div style={{ flex: '1', paddingBottom: '70px'}} id="main" role="main">          
          {children}          
        </div>
        <Footer config={config} />       
      </div>
    );
  }
}
