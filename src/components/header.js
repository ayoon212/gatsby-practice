import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";

function getTitleMarkup(data) {
  return {__html: data.site.siteMetadata.title};
}

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (<header>
    <Link to="/" css={css`
      margin-right: ${rhythm(0.5)};
    `}><span role="img" aria-label="home">🏠</span></Link>
    <h1 css={css`
      display: inline-block
    `} dangerouslySetInnerHTML={getTitleMarkup(data)}></h1>
  </header>);
};
