import React from 'react';

import './Button.scss';

export default class Button extends React.Component {
    render() {
        const {children, onClick, type} = this.props;

        const modificator = type ? `Button_${type}` : '';
        const className = `Button ${modificator}`;

        return (
            <button className={className} onClick={onClick}>{children}</button>
        );
    }
}
