import React from 'react';

export default class ShowComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timer: undefined,
            count: 0,
        };
    }

    componentDidMount() {
        console.warn('монтирование');
        this.setState({
            timer: setInterval(() => {
                this.setState(({count}) => ({count: count + 1}));
            }, 1000),
        });
    }

    componentDidUpdate() {
        console.warn('обновление пропсов');
        const {color} = this.props;
        if (color === 'red') {
            console.warn('Острожно красный цвет');
        }
    }

    componentWillUnmount() {
        console.warn('удаление компоненты');
        clearInterval(this.state.timer);
    }

    render() {
        const {color} = this.props;
        const {count} = this.state;
        return (
            <div style={{color}}>я туть {count}</div>
        );
    }
}
