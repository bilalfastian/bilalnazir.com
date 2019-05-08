import React, { Component } from 'react';
import './index.css';

export default class Resume extends Component{
    render(){  
        const { markdownRemark } = this.props.data;
        return (
          <div className="resume-page">
            <div dangerouslySetInnerHTML={{__html: markdownRemark.html}} />
          </div>
        )
    }
}