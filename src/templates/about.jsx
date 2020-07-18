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
// import DarkModeSwitch from "../components/DarkModeSwitch/DarkModeSwitch";
// import MenuButton from "../components/MenuButton/MenuButton";
// import PageTitle from "../components/PageTitle/PageTitle";
// import NameWithDesignation from "../components/NameWithDesignation/NameWithDesignation";
// import PageDescription from "../components/PageDescription/PageDescription";
// import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";

import Layout from "../components/layout";
import About from "../components/About/About";
import PageTitle from "../components/PageTitle/PageTitle";

export default function AboutPage(props) {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const {
        location,
        pageContext: { nodes }
    } = props;
    // const { menuOpen } = this.state;

    return (
        <Layout location={location}>
            <Drawer className="page-template" isOpen={menuOpen}>
                <Helmet title={config.siteTitle} />
                <SEO postEdges={nodes} />

                {/* The blog navigation links */}
                {/*<Navigation config={config} onClose={this.handleOnClose} />*/}

                <SiteWrapper>
                    {/* All the main content gets inserted here */}
                    <div className="page-template about-page">
                        {/* The big featured header */}

                        <MainHeader className="no-cover main-header">
                            <MainNav/>
                            <PageTitle className="page-title"
                                       text="About Me"></PageTitle>
                        </MainHeader>

                        <section className="content">
                            <div className="page-body">
                                <About config={config} pageContext={props.pageContext} />
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
// class AboutPage extends React.Component {
//     state = {
//         menuOpen: false
//     };
//
//     render() {
//         const {
//             location,
//             pageContext: { nodes }
//         } = this.props;
//         const { menuOpen } = this.state;
//
//         return (
//             <Layout location={location}>
//                 <Drawer className="home-template" isOpen={menuOpen}>
//                     <Helmet title={config.siteTitle} />
//                     <SEO postEdges={nodes} />
//
//                     {/* The blog navigation links */}
//                     {/*<Navigation config={config} onClose={this.handleOnClose} />*/}
//
//                     <SiteWrapper>
//                         {/* All the main content gets inserted here */}
//                         <div className="home-template">
//                             {/* The big featured header */}
//
//                             <MainHeader className="home">
//                                 <MainNav>
//                                     <DarkModeSwitch />
//                                 </MainNav>
//                             </MainHeader>
//
//
//                             <section className="content">
//                                 <div className="page-body">
//
//
//                                     <PageTitle text={"BILAL NAZIR."}></PageTitle>
//                                     <PageDescription text="If you are interested to start a new project or collaborate on a one, please don’t hesitate to e out at usama_geeky@yahoo.com
//                     or send your request through the form below. are interested to start a new project or collaborate on a one."></PageDescription>
//
//                                     <SocialMediaIcons
//                                         urls={config.siteSocialUrls}
//                                         color="currentColor"
//                                     />
//                                 </div>
//
//
//
//                             </section>
//
//                             {/* body of the page */}
//
//
//                         </div>
//
//                         {/* The tiny footer at the very bottom */}
//                     </SiteWrapper>
//                 </Drawer>
//             </Layout>
//         );
//     }
// }
//
//
// export default AboutPage;
