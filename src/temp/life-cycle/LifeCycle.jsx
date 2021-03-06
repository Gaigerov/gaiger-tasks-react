import React from 'react';

import ShowComponent from './ShowComponent';

export default class LifeCycle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShow: false,
            color: 'black',
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.handleChangeProps = this.handleChangeProps.bind(this);
    }

    handleToggle() {
        this.setState(({isShow}) => ({isShow: !isShow}));
    }

    handleChangeProps() {
        this.setState(({color}) => ({color: color === 'black' ? 'red' : 'black'}));
    }

    render() {
        const {isShow, color} = this.state;
        return (
            <div>
                {isShow && <ShowComponent color={color} />}
                <button onClick={this.handleToggle}>{isShow ? 'Спрятать' : 'Показать'}</button>
                <button onClick={this.handleChangeProps}>Смени цвет</button>
            </div>
        );
    }
}
