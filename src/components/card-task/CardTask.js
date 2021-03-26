import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilAlt, faStar as fasStar} from '@fortawesome/free-solid-svg-icons';
import {faStar, faTrashAlt, faCalendarMinus as fasCalendarMinus} from '@fortawesome/free-regular-svg-icons';
import './CardTask.scss';
import {TASK_STATUS, FORM_STATUS, PAGE_NAME} from '../../consts';

class CardTask extends React.Component {

    handleRemove = () => {
        const {onRemoveTask, task} = this.props;
        onRemoveTask(task.id);
    }

    handleEdit = () => {
        const {onChangeFormStatus, task} = this.props;
        onChangeFormStatus(task.id);
    }

    changeStatus = () => {
        const {onToggleTaskImportant, task} = this.props;
        onToggleTaskImportant(task.id);
    }

    render() {
        const {task, formStatus, pageName} = this.props;
        const {title, description, date, important} = task;
        const starStatus = important ? fasStar : faStar;

        return (
            <div className={formStatus === FORM_STATUS.CREATE ? 'list-group-item' : 'list-group-item bg-primary'}>
                <div className="card-body d-flex pt-0 pr-0 pb-0 pl-0 justify-content-between align-middle">
                    <p className="m-0 font-weight-bold">{title}</p>
                    <div className="controls d-flex w-15 mb-0">
                        <p className="mb-0 btn m-0 p-0">
                            <FontAwesomeIcon
                                onClick={this.changeStatus}
                                icon={pageName === PAGE_NAME.MAIN ? starStatus : ''}
                                className="fa-important"
                                fixedWidth
                            />
                            <FontAwesomeIcon
                                onClick={pageName === PAGE_NAME.MAIN ? this.handleEdit : this.handleEdit}
                                className="fa-edit"
                                icon={pageName === PAGE_NAME.MAIN ? faPencilAlt : fasCalendarMinus}
                                fixedWidth
                            />
                            <FontAwesomeIcon
                                onClick={this.handleRemove}
                                className="fa-delete"
                                icon={faTrashAlt}
                                fixedWidth
                            />
                        </p>
                    </div>
                </div>
                <div>
                    <p className="m-0 pl-0">{description}</p>
                </div>
                <div>
                    <p className="m-0 pl-0">{moment(date, 'YYYY-MM-DD').format('dddd, DD MMMM YYYY')}</p>
                </div>
            </div>
        );
    }
}

CardTask.propTypes = {
    task: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        date: PropTypes.string,
        important: PropTypes.bool,
        status: PropTypes.oneOf([
            TASK_STATUS.PENDING,
            TASK_STATUS.IN_WORK,
            TASK_STATUS.DONE,
        ]),
    }),
    onRemoveTask: PropTypes.func.isRequired,
    onEditTask: PropTypes.func.isRequired,
    onChangeFormStatus: PropTypes.func.isRequired,
    onToggleTaskImportant: PropTypes.func.isRequired,
};

CardTask.defaultProps = {
};

export default CardTask;
