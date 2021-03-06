import React from 'react';

import MenuListSubItem from './MenuList__subItem';

export default class MenuListItem extends React.Component {
    render() {
        const {title, categories, selected, onSelect} = this.props;
        return (
            <div className="MenuList__item">
                {title}
                <div className="MenuList__container">
                    {categories.map(category => (
                        <MenuListSubItem
                            key={category}
                            onSelect={onSelect}
                            category={category}
                            selected={selected}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
