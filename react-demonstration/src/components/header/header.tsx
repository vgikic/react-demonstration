import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

import { AccountRoute, ItemsRoute, LoginRoute } from '../../routes';
import { connect } from 'react-redux';
import IAccountState from '../account/state/IAccountState';
import IState from '../../common/interface/IState';
import { logout } from '../account/actions/AccountActionCreator';


const mapStateToProps = ({ account }: IState) => {
    return {
        ...account
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(logout())
    }
}

const Header = (props: IAccountState) => {

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

                    {
                        props.payload.isAuthenticated ?
                            (<li className={navigationState.routeStyle}>
                                <NavLink to={`${ItemsRoute}`} activeClassName={style.active} exact>ITEMS</NavLink>
                            </li>) : null
                    }

                    {
                        !props.payload.isAuthenticated ?
                            (<li className={navigationState.routeStyle}>
                                <NavLink to={`${LoginRoute}`} activeClassName={style.active} exact>LOGIN</NavLink>
                            </li>) : null
                    }

                    {
                        props.payload.isAuthenticated ?
                            <li className={navigationState.routeStyle}>
                                <NavLink to={`${AccountRoute}`} activeClassName={style.active} exact>ACCOUNT</NavLink>
                            </li> : null
                    }

                    {
                        props.payload.isAuthenticated ?
                            <li onClick={props.logOut} className={style['logout--icon']}>
                                <i className={materialIconStyle}>power_settings_new</i>
                            </li> : null
                    }

                    <li>
                        <i onClick={onMenuClick} className={materialIconStyle}>view_headline</i>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);