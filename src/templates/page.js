import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => {
  const page = data.markdownRemark;
  const words = page.frontmatter.words ? (<p><i>{page.frontmatter.words}</i></p>) : null;
  return (
    <Layout>
      <h1>{page.frontmatter.title}</h1>
      {words}
      <div dangerouslySetInnerHTML={{ __html: page.html}}></div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        words
      }
    }
  }
`;
