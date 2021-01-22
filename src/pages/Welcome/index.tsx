import React from 'react';
import { Link } from 'react-router-dom';

import { container } from './style';
export default function Welcome() {
  return (
    <main css={container}>
      <h1>Welcome</h1>
      <p>
        This is the solution for the technical assessment task i recieved from{' '}
        <a href="https://wuzzuf.net" target="_blank" rel="noopener noreferrer">
          Wuzzuf
        </a>
      </p>

      <p>
        Then go to the <Link to="/home">next page</Link>
      </p>
    </main>
  );
}
