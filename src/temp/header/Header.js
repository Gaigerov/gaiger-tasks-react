import React from 'react';

export default class Header extends React.Component {
    render() {
        const {text} = this.props;
        return (
            <h1>{text}</h1>
        );
    }
}
