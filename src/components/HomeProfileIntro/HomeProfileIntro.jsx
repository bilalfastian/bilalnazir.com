import React from "react";
import classNames from "classnames";
import "./HomeProfileHeader.css";
import PageTitle from "../PageTitle/PageTitle";
import config from "../../../data/SiteConfig";
import PageDescription from "../PageDescription/PageDescription";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";

class HomeProfileIntro extends React.Component {
    render() {
        const { children, className } = this.props;
        const classes = classNames("home-intro", className);

        return (
            <div className="home main-header-content inner">
                <PageTitle text={config.siteTitle} />
                <PageDescription text={config.siteDescription} />
                <SocialMediaIcons
                    urls={config.siteSocialUrls}
                    color="currentColor"
                />
            </div>
        );
    }
}

export default HomeProfileIntro;