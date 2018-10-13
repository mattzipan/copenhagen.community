import React from 'react';
import Head from 'next/head';

export default ({ children }) => (
  <div>
    <style>{`
      html,
      body {
        color: #585858;
        margin: 0;
        font-family: sans-serif;
        line-height: 1.75;
      }
      *, *:before, *:after {
        box-sizing: border-box;
      }
      table {
          border-collapse: collapse;
      }
      `}</style>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Copenhagen.Community</title>
    </Head>
    <div>{children}</div>
  </div>
);
