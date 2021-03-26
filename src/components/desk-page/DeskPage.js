import React from 'react';
import {TASK_STATUS} from '../../consts';
import PropTypes from 'prop-types';
import CardTask from '../card-task';

class DeskPage extends React.Component {

    sortedTasks() {
        return this.props.tasks.reduce((memo, task) => {
            switch (task.status) {
                case TASK_STATUS.PENDING: {
                    memo.pendingTasks.push(task);
                    break;
                }
                case TASK_STATUS.IN_WORK: {
                    memo.inWorkTasks.push(task);
                    break;
                }
                case TASK_STATUS.DONE: {
                    memo.doneTasks.push(task);
                    break;
                }
                default: {
                    memo.pendingTasks.push(task);
                    break;
                }
            }
            return memo;
        }, {pendingTasks: [], inWorkTasks: [], doneTasks: []});
    }

    render() {
        const {pendingTasks, inWorkTasks, doneTasks} = this.sortedTasks();

        const {
            onRemoveTask,
            onEditTask,
            onChangeFormStatus,
            onToggleTaskImportant,
            formStatus
        } = this.props;

        return (
            <div className="card ml-2 mr-2">
                <div className="card-body" id="past">
                    <p className="h4">Работа с задачами</p>
                    <span className="d-flex ml-2 mr-2 row">
                        <div className="card col-12 col-md-12 col-lg-4 border-warning bg-warning-50 text-dark">
                            <div className="card-body">
                                <h4>В ожидании</h4>
                                <p>эти задачи ждут исполнителя</p>
                                <div className="list-group">
                    {pendingTasks.map(t => (
                        <CardTask
                            key={t}
                            task={t}
                            onRemoveTask={onRemoveTask}
                            onEditTask={onEditTask}
                            onChangeFormStatus={onChangeFormStatus}
                            onToggleTaskImportant={onToggleTaskImportant}
                            formStatus={formStatus}
                        />
                    ))}
                </div>
                            </div>
                        </div>
                        <div className="card col-12 col-md-12 col-lg-4 border-primary bg-gradient text-dark">
                            <div className="card-body">
                                <h4>В работе</h4>
                                <p>эти задачи находятся у исполнителя в работе</p>
                                {inWorkTasks.map(t => t.title).join(',')}
                            </div>
                        </div>

                        <div className="card col-12 col-md-12 col-lg-4 border-success text-dark">
                            <div className="card-body">
                                <h4>Готовые</h4>
                                <p>эти задачи готовы и переданы заказчику</p>
                                {doneTasks.map(t => t.title).join(',')}
                            </div>
                        </div>
                    </span>

                </div>
            </div>
        );
    }
}

DeskPage.propTypes = {
    tasks: PropTypes.array,
    formStatus: PropTypes.string,
    onRemoveTask: PropTypes.func.isRequired,
    onEditTask: PropTypes.func.isRequired,
    onChangeFormStatus: PropTypes.func.isRequired,
    onToggleTaskImportant: PropTypes.func.isRequired,
};

export default DeskPage;
