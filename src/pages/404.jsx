import React, {Component} from 'react';
import Masthead  from '../components/Masthead';

export default class PageNotFound extends Component {
    render(){
        return (
          <div>  
            <Masthead />          
            <div id="main" style={{margin: "0 auto"}}>
              <h2>404 - Page Not Found</h2>
              <p>hmm, you seem lost.</p>
            </div>
          </div>
        )
    }
}