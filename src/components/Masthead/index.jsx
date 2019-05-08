import React, {Component} from 'react'
// import './index.css'

export default class Masthead extends Component {
  render() {
      return (
        <div className="masthead">
          <div className="masthead__inner-wrap">
            <div className="masthead__menu">
              <nav id="site-nav" className="greedy-nav">
                <a className="site-title" href="/">Bilal Nazir</a>
                <ul className="visible-links">
                  <li className="masthead__menu-item">
                    <a href="/blog">Blog</a>
                  </li>
                  {/* <li className="masthead__menu-item">
                    <a href="/contact">Contact</a>
                  </li> */}
                  <li className="masthead__menu-item">
                    <a href="/resume">Resume</a>
                  </li>
                </ul>
                <button className="hidden" type="button">
                  <span className="visually-hidden" />
                  <div className="navicon" />
                </button>
                <ul className="hidden-links hidden" />
              </nav>
            </div>
          </div>
        </div>
      )
  }
}