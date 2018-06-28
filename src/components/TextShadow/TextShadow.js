import React from 'react';
import PropTypes from 'prop-types';

import css from './TextShadow.scss';

const TextShadow = (props) => {
    return (<span className={css['text-shadow']}>{props.children}</span>);
};

export default TextShadow;