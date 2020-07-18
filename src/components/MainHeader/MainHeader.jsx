import React from "react";
import classNames from "classnames";
import "./MainHeader.css";

class MainHeader extends React.Component {

  componentDidMount() {

    // const { children, cover, className } = this.props;
    // if (cover) {
    //   $('<img/>').attr('src', cover).on('load', function () {
    //     $(this).remove(); // prevent memory leaks as @benweet suggested
    //     $('body .main-header').css('background-image', `url(${cover}})`);
    //   });
    // }

    // if(cover){
    //   const imageUrl = cover;
    //   let bgElement = document.querySelector("body .main-header");
    //   let preloaderImg = document.createElement("img");
    //   preloaderImg.src = imageUrl;
    //
    //   preloaderImg.addEventListener('load', (event) => {
    //     bgElement.style.backgroundImage = `url(${imageUrl})`;
    //     preloaderImg = null;
    //
    //     if(BackgroundCheck){
    //       // Specific images
    //       BackgroundCheck.init({
    //         targets: '.post-head',
    //         images: '.post-head'
    //       });
    //     }
    //   });
    // }

  }

  render() {
    const { children, cover, className } = this.props;

    let classes = [];
    if(className && className.indexOf('home') !== -1 ){
      classes = classNames("main-header", className);
    }else{
      classes = classNames("main-header", className, {
        "no-cover": !cover
      });
    }

    const getStyle = () => {
      if (cover) {
        return { backgroundImage: `url("${cover}")` };
      }
      return null;
    };

    return (
      <header className={classes} style={getStyle()}>
        {children}
      </header>
    );
  }
}

export default MainHeader;
