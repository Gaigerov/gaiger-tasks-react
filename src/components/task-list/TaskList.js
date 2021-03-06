import React from 'react';
import CardTask from '../card-task';
import {TASK_ON_PAGE} from '../../consts';
import Button from '../button';

export default class TaskList extends React.Component {
    getTaskOnPage = () => {
        const startIndex = this.props.page * TASK_ON_PAGE;
        const endIndex = startIndex + TASK_ON_PAGE;
        return this.props.tasks.slice(startIndex, endIndex);
    }

    render() {
        const {
            onRemoveTask,
            onEditTask,
            onChangeFormStatus,
            onToggleTaskImportant,
            clearForm,
            searchValue,
            onChangeSearch,
            onClearTaskList,
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

                {showTasks.map(task => (
                    <CardTask
                        key={task}
                        task={task}
                        onRemoveTask={onRemoveTask}
                        onEditTask={onEditTask}
                        onChangeFormStatus={onChangeFormStatus}
                        onToggleTaskImportant={onToggleTaskImportant}
                        clearForm={clearForm}
                    />
                ))}
            </div>
        );
    }
}
