import React from "react";
import { Link } from "gatsby";

export default () => (
  <header>
    <Link to="/" style={{ marginRight: '0.5rem' }}><span role="img" aria-label="home">🏠</span></Link>
    <div style={{ display: 'inline-block', fontSize: '1.75rem' }}>A Gatsby Project of <span role="img" aria-label="ice">❄</span> and <span role="img" aria-label="fire">🔥</span></div>
  </header>
);