import React from 'react';
import { Link } from 'react-router-dom';
import { AccountRoute, ItemsRoute, LoginRoute } from '../../routes';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={`${AccountRoute}`}>Account</Link>
                    </li>
                    <li>
                        <Link to={`${LoginRoute}`}>Log-in</Link>
                    </li>
                    <li>
                        <Link to={`${ItemsRoute}`}>Items - TODO</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;