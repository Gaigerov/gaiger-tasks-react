import React from 'react';

import './Modal.scss';

export default class Modal extends React.Component {
    render = () => {
        const {children} = this.props;
        return (
            <div className="Modal">
                <div className="Modal__window">
                    {children}
                </div>
            </div>
        );
    }
}
