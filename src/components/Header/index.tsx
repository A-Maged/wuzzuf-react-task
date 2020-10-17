import React from 'react';
import { Link } from 'react-router-dom';

import { useActions, useStore } from '@State';
import { container } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const actions = useActions();
  const appState = useStore();

  return (
    <nav css={container}>
      <Link to="/">Home</Link>

      <Link to="" onClick={actions.app.toggleDarkTheme}>
        {appState.app.isDarkTheme ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </Link>
    </nav>
  );
}
