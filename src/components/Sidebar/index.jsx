import React, {Component} from 'react';
import './index.css';

export default class Sidebar extends Component{

    showFollowMenu = () => {      
      if(this.menuNode.className.indexOf('show') === -1)
      this.menuNode.style.display = 'block';
      this.menuNode.classList.add("show");
    }

    componentWillMount(){
      document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount(){
      document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick = (e) => {
      if( this.menuNode.contains(e.target)){
        return;
      }

      console.log('Hiding popup');
      // hide the menu
    
      if(this.menuNode.className.indexOf('show') !== -1){
        this.menuNode.style.display = 'none';
        this.menuNode.classList.remove("show");
      }        
    }

    render(){
        return(
          <div className="sidebar sticky">
            <div itemScope="" itemType="http://schema.org/Person">
              <div className="author__avatar">
                <img src="/images/bio-photo.jpg" className="author__avatar" alt="Bilal Nazir" itemProp="image" />
              </div>

              {/* <div className="author__content">
                <h3 className="author__name" itemProp="name">Bilal Nazir</h3>

                <p className="author__bio" itemProp="description">
                    full Stack Web Developer
                </p>

              </div> */}

              <div className="author__urls-wrapper">
                <button type="button" className="btn btn--inverse" onClick={this.showFollowMenu}>Follow</button>
                <ul ref={node => this.menuNode = node} className="author__urls social-icons">

                  <li itemProp="homeLocation" itemScope="" itemType="http://schema.org/Place">
                    <i className="fa fa-fw fa-map-marker" aria-hidden="true" /> 
                    <span itemProp="name">Dubai, UAE</span>
                  </li>

                  <li>
                    <a href="mailto:bilal.nazirahmad@gmail.com">
                      <meta itemProp="email" content="bilal.nazirahmad@gmail.com" />
                      <i className="fa fa-fw fa-envelope-square" aria-hidden="true" />
                      Email
                    </a>
                  </li>

                  <li>
                    <a href="https://twitter.com/bilalnazir90" itemProp="sameAs">
                      <i className="fa fa-fw fa-twitter-square" aria-hidden="true" /> 
                      Twitter
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/in/bilalfastian" itemProp="sameAs">
                      <i className="fa fa-fw fa-linkedin-square" aria-hidden="true" /> 
                      LinkedIn
                    </a>
                  </li>

                  <li>
                    <a href="https://github.com/bilalfastian" itemProp="sameAs">
                      <i className="fa fa-fw fa-github" aria-hidden="true" /> 
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
    }
}