import React from 'react';
import { Link } from 'react-router-dom';

import { useActions, useStore } from '@State';
import { container, icon } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import SunIcon from '@Components/SunIcon';

export default function Header() {
  const actions = useActions();
  const appState = useStore();

  return (
    <nav css={container}>
      <Link to="/">Home</Link>

      <Link to="" onClick={actions.app.toggleDarkTheme}>
        {appState.app.isDarkTheme ? (
          <SunIcon css={icon} />
        ) : (
          <FontAwesomeIcon icon={faMoon} css={icon} />
        )}
      </Link>
    </nav>
  );
}
