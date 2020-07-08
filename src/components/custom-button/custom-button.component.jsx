import React from 'react';

import './custom-button.style.scss';

/* jshint ignore:start */

// eslint-disable-next-line react/prop-types
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;