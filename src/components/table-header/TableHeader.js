import React from 'react';

export default class TableHeader extends React.Component {
    render() {
        return (
            <div>
            <ul className={'nav nav-tabs pl-5 border-bottom-0'}>
                <li className={'nav-item'}>
                <a className ={'nav-link btn active'}>Редактирование задач</a>
                </li>
                <li className={'nav-item'}>
                <a className ={'nav-link btn'}>Работа с задачами</a>
                </li>
            </ul>
            </div>
        );
    }
}
