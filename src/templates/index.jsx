import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-scroll";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Drawer from "../components/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../components/SiteWrapper/SiteWrapper";
import Footer from "../components/Footer/Footer";
import MainHeader from "../components/MainHeader/MainHeader";
import MainNav from "../components/MainNav/MainNav";
import Home from '../components/Home/Home';
// import BlogLogo from "../components/BlogLogo/BlogLogo";
import DarkModeSwitch from "../components/DarkModeSwitch/DarkModeSwitch";
import MenuButton from "../components/MenuButton/MenuButton";
import PageTitle from "../components/PageTitle/PageTitle";
import NameWithDesignation from "../components/NameWithDesignation/NameWithDesignation";
import PageDescription from "../components/PageDescription/PageDescription";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";
import Layout from "../components/layout";
import "../components/index.css";
// import {gql} from "@apollo/client";

export default function IndexTemplate(props){

  console.log('Home Props', props);

  const {
    location,
    pageContext: { nodes, page, pages, total, limit, prev, next },
  } = props;
  // const { menuOpen } = this.state;

  return (
      <Layout location={location}>
        <Drawer className="home-template">
          <Helmet title={config.siteTitle} />
          <SEO postEdges={nodes} />

          {/* The blog navigation links */}
          {/*<Navigation config={config} onClose={this.handleOnClose} />*/}

          <SiteWrapper>
            {/* All the main content gets inserted here */}
            <div className="home-template">
              {/* The big featured header */}

              <MainHeader className="home">
                <MainNav></MainNav>
              </MainHeader>


              <section className="content">
                <div className="page-body">

                  <Home config={config} pageContext={props.pageContext}  />

                </div>

              </section>

              {/* body of the page */}


            </div>

            {/* The tiny footer at the very bottom */}
          </SiteWrapper>
        </Drawer>
      </Layout>
  );

}
// export const query = gql`
//   {
//    blogModelCollection (limit: 1){
//     items {
//       name
//       description
//       roles
//       profile {
//         url
//       }
//       socialLinks2
//       shortBio {
//         json
//         links {
//           entries {
//             inline {
//               sys {
//                 id
//               }
//             }
//           }
//         }
//       }      
//     }
//   }
// }`;
