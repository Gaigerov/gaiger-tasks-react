import React from 'react';
import moment from 'moment';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilAlt, faStar as fasStar} from '@fortawesome/free-solid-svg-icons';
import {faStar, faTrashAlt} from '@fortawesome/free-regular-svg-icons';
import './CardTask.scss';

export default class CardTask extends React.Component {
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
        const {task} = this.props;
        const {title, description, date, important} = task;

        return (
            <div className="card list-group">
                <div className="list-group-item-action">
                    <div className="card-body d-flex justify-content-between pt-0 pb-0 pr-0 pl-3 align-middle">
                        <p className="m-0 p-0 font-weight-bold">{title}</p>
                        <div className="controls d-flex w-15 mb-0">
                            <p className="mb-0 btn m-0 p-0">
                                <FontAwesomeIcon
                                    onClick={this.changeStatus}
                                    icon={important ? fasStar : faStar}
                                    className="fa-important"
                                    fixedWidt
                                />
                                <FontAwesomeIcon
                                    onClick={this.handleEdit}
                                    className="fa-edit"
                                    icon={faPencilAlt}
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
                        <p className="m-0 pl-3">{description}</p>
                    </div>
                    <div>
                        <p className="m-0 pl-3">{moment(date, 'YYYY-MM-DD').format('dddd, DD MMMM YYYY')}</p>
                    </div>
                </div>
                </div>
        );
    }
}
