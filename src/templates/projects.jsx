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
// import BlogLogo from "../components/BlogLogo/BlogLogo";
import DarkModeSwitch from "../components/DarkModeSwitch/DarkModeSwitch";
import MenuButton from "../components/MenuButton/MenuButton";
import PageTitle from "../components/PageTitle/PageTitle";
import NameWithDesignation from "../components/NameWithDesignation/NameWithDesignation";
import PageDescription from "../components/PageDescription/PageDescription";
import ProjectListing from "../components/ProjectListing/ProjectListing";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";
import Layout from "../components/layout";

export default function ProjectsPage(props) {

    const {
        location,
        pageContext: { nodes }
    } = props;

    const projects = props.pageContext.items || [];

    return (
        <Layout location={location}>
            <Drawer className="page-template">
                <Helmet title={config.siteTitle} />
                <SEO postEdges={nodes} />

                {/* The blog navigation links */}
                {/*<Navigation config={config} onClose={this.handleOnClose} />*/}

                <SiteWrapper>
                    {/* All the main content gets inserted here */}
                    <div className="page-template">
                        {/* The big featured header */}

                        <MainHeader className="no-cover main-header">
                            <MainNav></MainNav>
                            <PageTitle className="page-title"
                                       text="Projects"></PageTitle>
                        </MainHeader>

                        <section className="content projects">
                            <div className="page-body">

                                <div className="projects-lists">
                                    <ProjectListing projects={projects}  />
                                </div>
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
// class ProjectsPage extends React.Component {
//     state = {
//         menuOpen: false
//     };
//
//     render() {
//
//     }
// }
//
//
// export default ProjectsPage;
