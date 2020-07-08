import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

/* jshint ignore:start */
// eslint-disable-next-line react/prop-types
const Header = ({ currentUser }) => (
    <div className="header">
        <Link to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
        <Link className="option"  to="/shop">
            SHOP
        </Link>
        <Link className="option"  to="/shop">
            CONTACT
        </Link>
        {
            currentUser ?
            <div className='option' onClick={() => auth.signOut()}>
             SIGN OUT
            </div>

            :
            <link></link>
        }
        </div>
    </div>
)

export default Header;
