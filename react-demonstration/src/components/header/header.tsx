import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';

import { AccountRoute, ItemsRoute, LoginRoute } from '../../routes';

const Header = () => {
    debugger;
    const materialIconStyle = `material-icons ${style['md-light']} ${style['md-48']}`;

    const [navigationState, changeNavigationState] = useState({ routeStyle: `${style.route}`, navStyle: `` });

    const onMenuClick = () => {
        const isActive = navigationState.routeStyle.indexOf('active') != -1;

        const nextRouteStyle = isActive ? `${style.route}` : `${style.route} ${style.active}`;
        const nextNavStyle = isActive ? '' : `${style['navigation-extend']}`;
        changeNavigationState({ navStyle: nextNavStyle, routeStyle: nextRouteStyle });

    }

    return (
        <header className={style.container}>
            <nav className={navigationState.navStyle}>
                <ul>

                    <li className={navigationState.routeStyle}>
                        <Link to={`${ItemsRoute}`}>ITEMS</Link>
                    </li>

                    <li className={navigationState.routeStyle}>
                        <Link to={`${LoginRoute}`}>LOGIN</Link>
                    </li>

                    <li className={navigationState.routeStyle}>
                        <Link to={`${AccountRoute}`}>ACCOUNT</Link>
                    </li>

                    <li className="icon-container">
                        <i onClick={onMenuClick} className={materialIconStyle}>view_headline</i>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Header;