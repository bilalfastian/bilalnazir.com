/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from "react";
import favicon from "./favicon.png";

let inlinedStyles = "";
if (process.env.NODE_ENV === "production") {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require("!raw-loader!../public/styles.css");
  } catch (e) {
    /* eslint no-console: "off" */
    console.log(e);
  }
}

export default class HTML extends React.Component {

  render() {
    const { headComponents, body, postBodyComponents } = this.props;
    let css;
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      );
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          {/* Mobile Meta */}
          <meta name="HandheldFriendly" content="True" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />


          {/* Styles'n'Scripts
          <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/css?family=Merriweather:300,700,700italic,300italic|Open+Sans:700,400"
          />


          <link
              href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
              rel="stylesheet"
          />
          */}

          {headComponents}
          <link rel="shortcut icon" href={favicon} />
          {css}
        </head>
        <body>
        <script
            key="maximeheckel-theme"
            dangerouslySetInnerHTML={{
              __html: `(function() {
                try {
                  var lsDark = localStorage.getItem('dark');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (typeof lsDark === 'undefined' && supportDarkMode)
                    document.body.classList.add('dark');                  
                  else 
                    document.body.classList.add(JSON.parse(lsDark) ? 'dark' : 'light');
                } catch (e) {}
              })();`,
            }}
        />

          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}

          {/*<script type="text/javascript" src="/js/script.js"></script>*/}
        </body>
      </html>
    );
  }
}
