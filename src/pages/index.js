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
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
          </Link>
          <p><i>{node.excerpt}</i></p>
        </div>
      ))}
    </Layout>
  </div>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
      totalCount
      nodes {
        id
        frontmatter {
          title
          words
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
`;
