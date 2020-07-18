import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-scroll";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Drawer from "../components/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../components/SiteWrapper/SiteWrapper";
import Footer from "../components/Footer/Footer";
import MainHeader from "../components/MainHeader/MainHeader";
import MainNav from "../components/MainNav/MainNav";
import PaginatedContent from "../components/PaginatedContent/PaginatedContent";
import Layout from "../components/layout";



export default function BlogTemplate(props) {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleOnClose = () => {}

    const {
        location,
        pageContext: { nodes, page, pages, total, limit, prev, next },
        // data: { authors }
    } = props;
    // const { menuOpen } = this.state;

    return (
        <Layout location={location}>
            <Drawer isOpen={menuOpen}>
                <Helmet title={config.siteTitle} />
                <SEO postEdges={nodes} />

                {/* The blog navigation links */}
                <Navigation config={config} onClose={handleOnClose} />

                <SiteWrapper>
                    {/* All the main content gets inserted here */}
                    <div>
                        {/* The big featured header */}
                        <MainHeader>
                            <MainNav></MainNav>

                            <div className="blog-header">
                                <h1>Blog</h1>
                                <h4>Thoughts, stories and ideas.</h4>
                            </div>
                            <Link
                                className="scroll-down icon-arrow-left"
                                to="content"
                                data-offset="-45"
                                spy
                                smooth
                                duration={500}
                            >
                                <span className="hidden">Scroll Down</span>
                            </Link>
                        </MainHeader>

                        <PaginatedContent
                            page={page}
                            pages={pages}
                            total={total}
                            limit={limit}
                            prev={prev}
                            next={next}
                        >
                            {/* PostListing component renders all the posts */}
                            <PostListing postEdges={nodes} />
                        </PaginatedContent>
                    </div>

                    {/* The tiny footer at the very bottom */}
                    <Footer
                        copyright={config.copyright}
                        promoteGatsby={config.promoteGatsby}
                    />
                </SiteWrapper>
            </Drawer>
        </Layout>
    );
}


/* eslint no-undef: "off" */
// export const pageQuery = graphql`
//   query BlogIndexQuery {
//     # posts data comes from the context
//     # authors
//     authors: allAuthorsJson {
//       edges {
//         node {
//           uid
//           name
//           image
//           url
//           bio
//         }
//       }
//     }
//   }
// `;

// export default BlogTemplate;
