import React from 'react';
import PropTypes from 'prop-types';

import css from './HighlightMessage.scss';

const HighlightMessage = (props) => {
    return (<span className={css['highlight-message']}>{props.children}</span>);
};

export default HighlightMessage;