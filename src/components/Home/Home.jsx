import React from 'react';
// import { useQuery, gql } from '@apollo/client';
import NameWithDesignation from "../NameWithDesignation/NameWithDesignation";
import PageDescription from "../PageDescription/PageDescription";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
    renderMark: {
        [MARKS.BOLD]: text => <PageDescription text={text}></PageDescription>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
}

export default function Home(props) {
    // const { loading, error, data } = useQuery(BLOG_INFO);

    const {config, pageContext} = props;

    console.log('Props', props);

       // console.log('Blog Data', data);
       const shortBio = pageContext.shortBio;
       let socialLinks = (pageContext.socialLinks2 && pageContext.socialLinks2.map(link => link.content));
       if(!socialLinks || socialLinks.length === 0)
           socialLinks = config.siteSocialUrls;

       return  (
           <React.Fragment>
               <NameWithDesignation text={"BILAL NAZIR."} roles={pageContext.roles}></NameWithDesignation>
               <div className="page-description">{documentToReactComponents(shortBio.json, options)}</div>
               <SocialMediaIcons urls={socialLinks} color="currentColor" />
           </React.Fragment>
       )

}
