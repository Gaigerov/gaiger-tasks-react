import React from 'react';
import CardTask from '../card-task';
import {TASK_ON_PAGE} from '../../consts';
import Button from '../button';
import PropTypes from 'prop-types';

class TaskList extends React.Component {
    getTaskOnPage = () => {
        const startIndex = this.props.page * TASK_ON_PAGE;
        const endIndex = startIndex + TASK_ON_PAGE;
        return this.props.tasks.slice(startIndex, endIndex);
    }

    render() {
        const {
            pageName,
            onRemoveTask,
            onEditTask,
            onChangeFormStatus,
            onToggleTaskImportant,
            searchValue,
            onChangeSearch,
            onClearTaskList,
            formStatus
        } = this.props;

        const showTasks = this.getTaskOnPage();

        const handleChangeSearch = event => {
            onChangeSearch(event.currentTarget.value);
        };

        return (
            <div className="card-body" id="past">
                <p className="h4">Список задач</p>
                <div className="d-flex justify-content-between mb-2 ">
                    <input
                        type="text"
                        className="form-control col-6 col-md-6 col-lg-8 mr-1"
                        placeholder="Поиск..."
                        value={searchValue}
                        onChange={handleChangeSearch}
                    />
                    <Button
                        id="btnTask"
                        type="submit"
                        styleType="danger"
                        buttonName="Очистить список"
                        onClick={onClearTaskList}
                    >
                    </Button>
                </div>
                <div className="list-group">
                    {showTasks.map(task => (
                        <CardTask
                            key={task}
                            task={task}
                            pageName={pageName}
                            onRemoveTask={onRemoveTask}
                            onEditTask={onEditTask}
                            onChangeFormStatus={onChangeFormStatus}
                            onToggleTaskImportant={onToggleTaskImportant}
                            formStatus={formStatus}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

TaskList.propTypes = {
    searchValue: PropTypes.string,
    onChangeSearch: PropTypes.func.isRequired,
    tasks: PropTypes.array,
    page: PropTypes.shape({
        page: PropTypes.number,
    }),
    onRemoveTask: PropTypes.func.isRequired,
    onEditTask: PropTypes.func.isRequired,
    onChangeFormStatus: PropTypes.func.isRequired,
    onToggleTaskImportant: PropTypes.func.isRequired,
    onClearTaskList: PropTypes.func.isRequired,
    formStatus: PropTypes.string,
};

TaskList.defaultProps = {
};

export default TaskList;
