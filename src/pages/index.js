import React from "react";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import Layout from "../components/layout";

export default ({data}) => (
  <div>
    <Layout>
      <Link to="/starks">The Starks</Link>
      <h4>{data.allMarkdownRemark.totalCount} pages</h4>
      {data.allMarkdownRemark.nodes.map(node => (
        <div key={node.id}>
          <h3>{node.frontmatter.title}</h3>
          <p><i>{node.excerpt}</i></p>
        </div>
      ))}
    </Layout>
  </div>
);

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      nodes {
        id
        frontmatter {
          title
          words
        }
        excerpt
      }
    }
  }
`;
