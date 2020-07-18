import React from 'react';
import GatsbyImg from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

function renderImage(src, file) {
    console.log('PostCoverImage File', file);
    if(file)
        return <GatsbyImg fluid={file.node.childImageSharp.fluid} />
    return <img src={src} />
}

const PostCoverImage = function (props) {

    const { src } = props;
    const filename = src.replace(/^.*[\\\/]/, '');

    console.log('PostCoverImage Props ==>', props)
    return <StaticQuery
        query={graphql`
      query {
      images: allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif/"}}) {
      edges {
        node {
          extension
          relativePath
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    }
    `}
        render={({ images }) => renderImage(src, images.edges.find(image => image.node.relativePath === filename))}
    />
}

export  default PostCoverImage;