import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {

    render() {
        const {styleType = 'primary', buttonName, ...props} = this.props;

        const className = `btn btn-${styleType} w-50 ml-1 mr-1`;

        return (
            <button className={className}{...props}>{buttonName}</button>
        );
    }
}

Button.propTypes = {
    type: PropTypes.string,
    styleType: PropTypes.string,
    buttonName: PropTypes.string,
};

Button.defaultProps = {
};

export default Button;
