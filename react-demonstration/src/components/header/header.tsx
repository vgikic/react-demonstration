import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';

import { AccountRoute, ItemsRoute, LoginRoute } from '../../routes';

const Header = () => {

    const materialIconStyle = `material-icons ${style['md-light']} ${style['md-48']}`;

    const [routeState, changerouteState] = useState(`${style.route}`);

    const onMenuClick = () => {
        const nextState = routeState.indexOf('active') > -1 ? `${style.route}` : `${style.route} ${style.active}`;
        changerouteState(nextState);
    }

    return (
        <header className={style.container}>
            <nav className={style.navigation}>
                <ul>

                    <li className={routeState}>
                        <Link to={`${ItemsRoute}`}>ITEMS</Link>
                    </li>

                    <li className={routeState}>
                        <Link to={`${LoginRoute}`}>LOGIN</Link>
                    </li>

                    <li className={routeState}>
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