import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { useActions, useStore } from '@State';
import { container, icon } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import SunIcon from '@Components/SunIcon';

export default function Header() {
  const actions = useActions();
  const appState = useStore();

  return (
    <nav css={(theme) => container(theme)}>
      <NavLink exact to="/" activeClassName="active">
        Welcome
      </NavLink>

      <NavLink to="/home" activeClassName="active">
        Home
      </NavLink>

      <Link to="#" onClick={actions.app.toggleDarkTheme}>
        {appState.app.isDarkTheme ? (
          <SunIcon css={icon} />
        ) : (
          <FontAwesomeIcon icon={faMoon} css={icon} />
        )}
      </Link>
    </nav>
  );
}
