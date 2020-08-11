import React from "react";
import { Link } from "gatsby";

function FeedPost({ post }) {
  const postTitle = post.frontmatter.title || post.fields.slug;

  return (
    <article className="post-feed" key={post.fields.slug}>
      <header>
        <h3>
          <Link to={post.fields.slug}>{postTitle}</Link>
        </h3>
        <p className="heading small dark-grey">{post.frontmatter.date}</p>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
        />
      </section>
    </article>
  );
}

export default FeedPost;
