/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Helmet from "react-helmet";
import "prismjs/themes/prism.css";
import { ThemeProvider } from '../contexts/theme'
import config from "../../data/SiteConfig";
import "./layout.css";


function getLocalTitle(props) {

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
  const {
    location: { pathname }
  } = props;
  const currentPath = pathname.replace(pathPrefix, "").replace("/", "");
  let title = "";
  if (currentPath === "") {
    title = "Home";
  } else if (currentPath === "tags/") {
    title = "Tags";
  } else if (currentPath === "categories/") {
    title = "Categories";
  } else if (currentPath === "about/") {
    title = "About";
  } else if (currentPath.includes("posts")) {
    title = "Article";
  } else if (currentPath.includes("tags/")) {
    const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ");
    title = `Tagged in ${capitalize(tag)}`;
  } else if (currentPath.includes("categories/")) {
    const category = currentPath
        .replace("categories/", "")
        .replace("/", "")
        .replace("-", " ");
    title = `${capitalize(category)}`;
  }
  return title;
}

export default function MainLayout(props){

  /*
  let initialTheme = 'light';
  const lsDark = JSON.parse(localStorage.getItem("dark"))
  if (typeof lsDark === 'undefined' && supportsDarkMode()) {
    initialTheme = 'dark';
  } else{
    initialTheme = lsDark === 'dark' ? 'dark' : 'light';
  }
  console.log('initial theme', initialTheme);

  const [theme, setTheme] = React.useState(initialTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)

    console.log('New Theme State', newTheme);
    localStorage.setItem("dark", JSON.stringify(newTheme === 'dark'))
  }

  React.useEffect(() => {

    if(theme === 'dark') {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }

  }, [theme])



  const themeValue = {
    theme,
    toggleTheme
  };
*/
  const { children } = props;
  return (
      <div className={`page-layout`}>
        <Helmet>
          <title>{`${config.siteTitle} |  ${getLocalTitle(props)}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
      </div>
  );
}
