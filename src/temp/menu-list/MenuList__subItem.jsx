import React from 'react';

export default class MenuListSubItem extends React.Component {
    render() {
        const {onSelect, category, selected} = this.props;

        const handleSelectCategory = () => {
            onSelect(category);
        };
        const isSelected = selected === category;
        const className = `MenuList__subItem${isSelected ? ' MenuList__subItem_selected' : ''}`;
        return (
            <div
                className={className}
                onClick={handleSelectCategory}
            >
                {category}
            </div>
        );
    }
}
