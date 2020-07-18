import React from "react";
import classNames from "classnames";
import "./HomeProfileHeader.css";

class HomeProfileHeader extends React.Component {
    render() {
        const { children, cover, className } = this.props;
        const classes = classNames("main-header", className, {
            "no-cover": !cover
        });
        const getStyle = () => {
            if (cover) {
                return { backgroundImage: `url("${cover}")` };
            }
            return null;
        };

        return (
            <header className={classes} style={getStyle()}>
                <section className="home nav-bar">
                    <div className="nav-item">
                        <a className="nav-link" title="Navigate back to the homepage"
                           aria-label="Navigate back to the homepage" back="false" href="/">
                            <h1 color="#000">BN</h1>
                            {/*<span className="css-10l5b14 e1q3p6rm8">Navigate back to the homepage</span>*/}
                        </a>
                    </div>

                    <div className="nav-item">
                        <a href="/blog">Blog</a>
                    </div>
                    <div className="nav-item">
                        <a href="/blog">Projects</a>
                    </div>
                    <div className="nav-item">
                        <a href="/blog">Contact</a>
                    </div>

                </section>

                {children}
            </header>
        );
    }
}

export default HomeProfileHeader;
