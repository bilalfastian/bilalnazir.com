import React from "react";
import "./PageDescription.css";

export default function PageDescription({text}) {
  if (text) {
    return <h2 className={"page-description"}>{text}</h2>;
  }
  return null;

}

// class PageDescription extends React.Component {
//   render() {
//     const { text, theme } = this.props;
//     if (text) {
//       return <h2 className={theme  + " page-description"}>{text}</h2>;
//     }
//     return null;
//   }
// }
//
// export default PageDescription;
