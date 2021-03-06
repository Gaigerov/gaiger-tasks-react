import React from 'react';

import './MenuList.scss';

import MenuListItem from './MenuList__item';

const MENU_LIST = [
    {title: 'Settings', categories: ['Personal', 'Common']},
    {title: 'Cities', categories: ['Moscow', 'NewYork', 'Alshir']},
    {title: 'Colors', categories: ['Red', 'Blue', 'White', 'Yellow']},
];

export default class MenuList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: null,
        };

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(category) {
        this.setState({selected: category});
    }

    render() {
        const {selected} = this.state;
        return (
            <div className="MenuList">
                {MENU_LIST.map(({title, categories}) => (
                    <MenuListItem
                        key={title}
                        title={title}
                        categories={categories}
                        onSelect={this.handleSelect}
                        selected={selected}
                    />
                ))}
            </div>
        );
    }
}
