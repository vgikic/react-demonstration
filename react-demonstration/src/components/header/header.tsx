import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import style from './header.module.scss';

import { AccountRoute, ItemsRoute, LoginRoute } from '../../routes';
import { connect } from 'react-redux';

const Header = () => {
    const materialIconStyle = `material-icons ${style['md-light']} ${style['md-48']}`;

    const [navigationState, changeNavigationState] = useState({ routeStyle: `${style.route} ${style.visible}`, navStyle: `` });

    const onMenuClick = () => {
        const isActive = navigationState.routeStyle.indexOf('visible') != -1;

        const nextRouteStyle = isActive ? `${style.route}` : `${style.route} ${style.visible}`;
        const nextNavStyle = isActive ? '' : `${style['navigation-extend']}`;
        changeNavigationState({ navStyle: nextNavStyle, routeStyle: nextRouteStyle });

    }

    return (
        <header className={style.container}>
            <nav className={navigationState.navStyle}>
                <ul>

                    <li className={navigationState.routeStyle}>
                        <NavLink to={`${ItemsRoute}`} activeClassName={style.active} exact>ITEMS</NavLink>
                    </li>

                    <li className={navigationState.routeStyle}>
                        <NavLink to={`${LoginRoute}`} activeClassName={style.active} exact>LOGIN</NavLink>
                    </li>

                    <li className={navigationState.routeStyle}>
                        <NavLink to={`${AccountRoute}`} activeClassName={style.active} exact>ACCOUNT</NavLink>
                    </li>

                    <li className="icon-container">
                        <i onClick={onMenuClick} className={materialIconStyle}>view_headline</i>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default connect()(Header);