import React from "react";
import { Link } from "gatsby";
import AuthorThumbnail from "../AuthorThumbnail/AuthorThumbnail";
import PostTags from "../PostTags/PostTags";
import SiteConfig from "../../../data/SiteConfig";
import AuthorLink from "../AuthorLink/AuthorLink";
import PostFormatting from "../PostFormatting/PostFormatting";
import PostHeader from "../PostHeader/PostHeader";
import PostDate from "../PostDate/PostDate";
import AuthorModel from "../../models/author-model";
import "./PostListing.css";

const getPostList = (postEdges) =>
  postEdges.map(postEdge => ({
    path: postEdge.node.fields.slug,
    tags: postEdge.node.frontmatter.tags,
    cover: postEdge.node.frontmatter.cover,
    title: postEdge.node.frontmatter.title,
    date: postEdge.node.frontmatter.date,
    // author: AuthorModel.getAuthor(
    //   authorEdges,
    //   postEdge.node.frontmatter.author,
    //   SiteConfig.blogAuthorId
    // ),
    excerpt: postEdge.node.excerpt,
    timeToRead: postEdge.node.timeToRead
  }));

class PostListing extends React.Component {
  render() {
    const { postEdges } = this.props;
    const postList = getPostList(postEdges);

    return (
      <div>
        {/* This is the post loop - each post will be output using this markup */}
        {postList.map(post => {
          const { title, path, excerpt, author, tags, date } = post;
          const className = post.post_class ? post.post_class : "post post-item";

          return (
            <PostFormatting className={className} key={title}>
              <PostHeader>
                <h2 className="post-title">
                  <Link to={`${path}`}>{title}</Link>
                </h2>
              </PostHeader>
              <section className="post-excerpt">
                {/* TODO limit excerpt to 26 words */}
                <p>
                  {`${excerpt} `}
                  <Link className="read-more" to={`${path}`}>
                    &raquo;
                  </Link>
                </p>
              </section>
              <footer className="post-meta">
              {/*  <AuthorThumbnail avatar={author.image} name={author.name} />*/}
              {/*  <AuthorLink url={`/author/${author.uid}`} name={author.name} />*/}
                <PostTags prefix=" on " tags={tags} />
                <PostDate date={date} />
              </footer>
            </PostFormatting>
          );
        })}
      </div>
    );
  }
}

export default PostListing;
