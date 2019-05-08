import React from "react";
import { Link } from "gatsby";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  
  render() {
    const postList = this.getPostList();

    
    return (
      <div>
        {/* 
        <Link to={post.path} key={post.title}>
          <h1>{post.title}</h1>
        </Link>
        */}        

        {/* Your post list here. */
        postList.map(post => (

          <section key={post.path}>
            <div className="list__item">
              <article className="archive__item" itemScope itemType="http://schema.org/CreativeWork">    
                <h2 className="archive__item-title" itemProp="headline">
                  <Link to={`/${post.path}`}>
                    {post.title}
                  </Link>                    
                </h2>
                {/* <p>{post.date}</p> */}
                <p className="page__meta">
                  <i className="fa fa-clock-o" ariaHidden="true" />
                  <span> {post.timeToRead} </span>
                    minutes read
                </p> 
                <p className="archive__item-excerpt" itemProp="description">{post.excerpt}</p>
                {/* <Link to={`/${post.path}`}>Read More</Link> */}
              </article>
            </div>            
          </section>
        ))}
      </div>
    );
  }
}

export default PostListing;
