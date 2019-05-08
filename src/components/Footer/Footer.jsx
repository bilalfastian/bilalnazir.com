import React, { Component } from "react";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { config } = this.props;    
    const { copyright } = config;    

    if (!copyright) {
      return null;
    }
    return (    
      
      <footer className="footer page__footer">

        <div style={{maxWidth: '800px', margin: '0 auto'}} className="page__footer-follow">
          <ul className="social-icons">
                      
              <li><a href="https://twitter.com/${config.userLinks.username}"><i className="fa fa-fw fa-twitter-square" aria-hidden="true"></i> Twitter</a></li>
              {/* <li><a href="https://www.facebook.com/{{ site.facebook.username }}"><i class="fa fa-fw fa-facebook-square" aria-hidden="true"></i> Facebook</a></li>
              <li><a href="https://github.com/{{ site.author.github }}"><i class="fa fa-fw fa-github" aria-hidden="true"></i> GitHub</a></li>
              <li><a href="https://gitlab.com/{{ site.author.gitlab }}"><i class="fa fa-fw fa-gitlab" aria-hidden="true"></i> Gitlab</a></li>
              <li><a href="https://bitbucket.org/{{ site.author.bitbucket }}"><i class="fa fa-fw fa-bitbucket" aria-hidden="true"></i> Bitbucket</a></li> */}

            {/* <li><a href="{% if site.atom_feed.path %}{{ site.atom_feed.path }}{% else %}{{ '/feed.xml' | absolute_url }}{% endif %}"><i class="fa fa-fw fa-rss-square" aria-hidden="true"></i> {{ site.data.ui-text[site.locale].feed_label | default: "Feed" }}</a></li> */}
          </ul>
        </div>

        {/* <div class="page__footer-copyright">
        &copy; {{ site.time | date: '%Y' }} {{ site.name | default: site.title }}. {{ site.data.ui-text[site.locale].powered_by | default: "Powered by" }} 
        <a href="https://jekyllrb.com" rel="nofollow">Jekyll</a> 
        &amp; <a href="https://mademistakes.com/work/minimal-mistakes-jekyll-theme/" rel="nofollow">Minimal Mistakes</a>
        .</div> */}
      

      </footer>
    );
  }
}

export default Footer;
