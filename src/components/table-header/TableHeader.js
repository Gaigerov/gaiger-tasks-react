import React from 'react';
import PropTypes from 'prop-types';
import {PAGE_NAME} from '../../consts';

class TableHeader extends React.Component {

    render() {

        const {onHandleEditPage, onHandleMainPage, page} = this.props;

        return (
            <div>
                <ul className={'nav nav-tabs pl-5 border-bottom-0'}>
                    <li className={'nav-item'}>
                        <a className={page === PAGE_NAME.MAIN ? 'nav-link btn active' : 'nav-link btn'} onClick={onHandleMainPage}>Редактирование задач</a>
                    </li>
                    <li className={'nav-item'}>
                        <a className={page === PAGE_NAME.EDIT ? 'nav-link btn active' : 'nav-link btn'} onClick={onHandleEditPage}>Работа с задачами</a>
                    </li>
                </ul>
            </div>
        );
    }
}

TableHeader.propTypes = {
    page: PropTypes.string.isRequired,
    onHandleMainPage: PropTypes.func.isRequired,
    onHandleEditPage: PropTypes.func.isRequired,
};

TableHeader.defaultProps = {
};

export default TableHeader;
