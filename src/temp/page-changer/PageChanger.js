import React from 'react';

import Button from '../button';

export default class PageChanger extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
        };

        this.handleClickLeft = this.handleClickLeft.bind(this);
        this.handleClickRight = this.handleClickRight.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleClickLeft() {
        const {page} = this.state;
        this.setState({
            page: page - 1,
        });
    }

    handleClickRight() {
        const {page} = this.state;
        this.setState({
            page: page + 1,
        });
    }

    handleReset() {
        this.setState({
            page: 0,
        });
    }

    render() {
        const {page} = this.state;
        return (
            <div>
                <div>{page}</div>
                <div>
                    <Button onClick={this.handleClickLeft} type='primary'>left</Button>
                    <Button onClick={this.handleReset}>reset</Button>
                    <Button onClick={this.handleClickRight} type='secondary'>right</Button>
                </div>
            </div>
        );
    }
}
