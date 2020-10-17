import React from 'react';
import { Link } from 'react-router-dom';

import { useActions } from '@State';
import { container } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const actions = useActions();

  return (
    <nav css={container}>
      <Link to="/">Home</Link>

      <Link to="" onClick={actions.app.toggleDarkTheme}>
        <FontAwesomeIcon icon={faMoon} />
      </Link>
    </nav>
  );
}
