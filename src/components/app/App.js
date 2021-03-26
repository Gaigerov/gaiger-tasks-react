import React from 'react';
import moment from 'moment';
import TableHeader from '../table-header';
import TableForm from '../table-form';
import TaskList from '../task-list';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSwatchbook} from '@fortawesome/free-solid-svg-icons';
import {FORM_STATUS, STORE_KEY, TASK_ON_PAGE, EMPTY_FORM, PAGE_NAME, TASK_STATUS} from '../../consts';
import {getStorageValue, setStorageValue} from '../../utils';
import {v4} from 'uuid';
import Pagination from '../pagination';
import DeskPage from '../desk-page';
import {sortBy, reverse} from 'lodash';

moment.lang('ru');

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: this.getTasksFromStorage() || [],
            form: {
                status: FORM_STATUS.CREATE,
                editTaskId: undefined,
                values: {
                    ...EMPTY_FORM,
                },
            },
            pagination: {
                page: 0,
            },
            searchInput: '',
            page: PAGE_NAME.MAIN,
        };
    }

    handleChangeSearch = text => {
        this.setState(state => ({
            searchInput: text,
            pagination: {
                ...state.pagination,
                page: 0,
            },
        }));
    }

    handleEditPage = () => {
        this.setState(state => ({
            ...state,
            page: PAGE_NAME.MAIN ? PAGE_NAME.EDIT : PAGE_NAME.MAIN,
        }));
    }

    handleMainPage = () => {
        this.setState(state => ({
            ...state,
            page: PAGE_NAME.EDIT ? PAGE_NAME.MAIN : PAGE_NAME.EDIT,
        }));
    }

    handleChangePage = page => {
        this.setState(state => ({
            pagination: {
                ...state.pagination,
                page,
            }
        }));
    }

    getTasksFromStorage = () => {
        return getStorageValue(localStorage, STORE_KEY.TASKS);
    }

    saveTasksToStorage = tasks => {
        setStorageValue(localStorage, STORE_KEY.TASKS, tasks);
        this.setState({tasks});
    }

    createTask = task => {
        const taskList = this.state.tasks.concat(task);
        this.saveTasksToStorage(taskList);
    }

    removeTask = removeTaskId => {
        const taskList = this.state.tasks.filter(task => task.id !== removeTaskId);
        this.saveTasksToStorage(taskList);
    }

    clearTaskList = () => {
        this.setState(state => {
            return {
                ...state,
                tasks: [],
                pagination: {
                    page: 0
                },
            };
        });
    }

    editTask = taskToEdit => {
        const editTaskId = this.state.form.editTaskId;
        const taskList = this.state.tasks.map(task => {
            if (task.id === editTaskId) {
                return taskToEdit;
            }
            return task;
        });
        this.setState(state => {
            return {
                ...state,
                form: {
                    ...state.form,
                    values: {
                        ...state.form.values,
                        ...EMPTY_FORM,
                    },
                },
            };
        });
        this.handleClearForm();
        this.saveTasksToStorage(taskList);
    }

    changeFormStatus = editTaskId => {
        const findTask = this.state.tasks.find(task => task.id === editTaskId) ?? EMPTY_FORM;
        this.setState(state => {
            return {
                ...state,
                form: {
                    ...state.form,
                    status: findTask.id === undefined ? FORM_STATUS.CREATE : FORM_STATUS.EDIT,
                    editTaskId,
                    values: {
                        ...findTask,
                    },
                }
            };
        });
    }

    toggleTaskImportant = taskId => {
        const taskList = this.state.tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    important: !task.important,
                };
            }
            return task;
        });
        this.saveTasksToStorage(taskList);
    }

    handleInput = event => {
        const {id, value, checked, type} = event.currentTarget;

        this.setState(state => {
            return {
                ...state,
                form: {
                    ...state.form,
                    values: {
                        ...state.form.values,
                        [id]: type === 'checkbox' ? checked : value,
                    },
                },
            };
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const task = this.state.form.values;
        if (this.state.form.status === FORM_STATUS.CREATE) {
            this.createTask({
                ...task,
                status: TASK_STATUS.PENDING,
                id: v4(),
            });
            this.handleClearForm();
        }
        if (this.state.form.status === FORM_STATUS.EDIT) {
            this.editTask(task);
            this.handleClearForm();
        }
    }

    handleClearForm = () => {
        this.setState(state => {
            const tableForm = state.form.values;
            const clearForm = Object.keys(tableForm).reduce((newState, key) => {
                const value = tableForm[key];
                const emptyValue = typeof value === 'string' ? '' : false;
                return {
                    ...newState,
                    [key]: emptyValue,
                };
            }, {});
            return {
                ...state,
                form: {
                    ...state.form,
                    values: clearForm,
                },
            };
        });
        this.changeFormStatus();
    }

    render() {
        const {tasks, pagination, searchInput} = this.state;

        const filteredTasks = reverse(tasks.filter(task => {
            const title = task.title.toLowerCase();
            const description = task.description.toLowerCase();
            const searchValue = searchInput.toLowerCase();
            return title.includes(searchValue) || description.includes(searchValue);
        }));

        const sortedTasks = reverse(sortBy(filteredTasks, m => m.important));

        const pageCount = Math.ceil(sortedTasks.length / TASK_ON_PAGE);

        return (
            <div>
                <div className="d-flex pt-3 pl-3">
                    <span className="text-primary">
                        <FontAwesomeIcon icon={faSwatchbook} size="2x" />
                    </span>
                    <h2>Менеджер задач</h2>
                </div>
                <span className="container-fluid">
                    <TableHeader
                        page={this.state.page}
                        onHandleEditPage={this.handleEditPage}
                        onHandleMainPage={this.handleMainPage}
                    />
                    {this.state.page === PAGE_NAME.MAIN ? <div className="d-flex ml-2 mr-2 row">
                        <div className="card col-12 col-md-6 col-lg-4">
                            <TableForm
                                title={this.state.form.values.title}
                                description={this.state.form.values.description}
                                date={this.state.form.values.date}
                                important={this.state.form.values.important}
                                formStatus={this.state.form.status}
                                onSubmit={this.handleSubmit}
                                handleInput={this.handleInput}
                                onHandleClearForm={this.handleClearForm}
                                formTitle={this.state.form.status === FORM_STATUS.CREATE ? 'Добавить событие' : 'Редактировать событие'}
                            />
                        </div>
                        <div className="card col-12 col-md-6 col-lg-8">
                            <TaskList
                                pageName={this.state.page}
                                page={pagination.page}
                                tasks={sortedTasks}
                                searchValue={searchInput}
                                onChangeSearch={this.handleChangeSearch}
                                onRemoveTask={this.removeTask}
                                onEditTask={this.editTask}
                                onChangeFormStatus={this.changeFormStatus}
                                onToggleTaskImportant={this.toggleTaskImportant}
                                onClearTaskList={this.clearTaskList}
                                formStatus={this.state.form.status}
                            />
                            <Pagination
                                page={pagination.page}
                                onChangePage={this.handleChangePage}
                                pageCount={pageCount}
                            />
                        </div>
                    </div> : <div>
                        <DeskPage
                            tasks={sortedTasks}
                            onRemoveTask={this.removeTask}
                            onEditTask={this.editTask}
                            onChangeFormStatus={this.changeFormStatus}
                            onToggleTaskImportant={this.toggleTaskImportant}
                            formStatus={this.state.form.status}
                        />
                    </div>}
                </span>
            </div>
        );
    }
}

/**
 * (+) Для всех компонентов более двух пропсов перенос строки
 * (+) Внутри jsx двойные ковычки
 * (+) Убрать бинды сделав все методы стрелочными функциями
 * (+) Проверить чтобы не было document.query
 * (+) Когда нажимаю submit и форма в статусе create то вызов функции createTask и очищать после
 * (+) Оформить карточки
 *
 * (+) Сделать адаптиную страницу на bootstrap (доделать, пример удалить)
 * (+) Перенести стейт формы из TableForm в App (state.form.values) и все методы
 * (+) При нажатии на карандаш, нужно загружать даные в форму
 * (+) При нажатии на удаление - удалять таску
 * (+) При нажатии на звезду - менять важность задачи
 * (на занятиях)
 * (+) Удаление тасок
 * (+) Отображение дат Moment.js
 * (+) Пагинация
 * (+) Фильтрация (по названию задачи, по дате\диапазон)
 * Календарь
 * Драг-дроп задач по статусам (В ожидании\ В работе\ Выполнено)
 * Переезд на typescript
 * Внедрение Redux
 * Переезд на функциональные компоненты
 * Научимся прогонять тесты после пуша в мастер (TI\CD)
 * Автовыкладка на github pages
 */

/**
 * Пагинацию доделать (+)
 * (+) Почитать про импорты и экспорты (одноврмененный импорт и экспорт одной строкой, переименование дефолтных и не дефолтных импортов)
 * (+) Кнопка star внутри тасок должна менять значение импорт в тасках
 * (+) Редактирование тасок
 * Сортировка задач по важности (важные всегда в начале) (+)
 * (+) При наведении на иконки тасок должен менятся их цвет. Звезда - желтый, редактировние - зеленый, удаление - красный
 * Курсор на кнопках должен быть пальцем (+)
 * (+) При наведении на таски должны подсвечиваться (это есть в бутстрепе)
 * (+) Название события - звездочка должна иметь отступ
 * Верстка страницы "Работа с задачами", три колонки. Все задачи должны отобразится в колонке - в ожидании (+)
 *
 * (+) Страницы должны начинатся с "1"
 * Когда запись редактируется, она должна выделятся синим (используй классы и информацию из стейта) (+/-)
 * (+) Сделать кнопку "Удалить все таски"
 * Объеденить список тасок в одну лист группу https://getbootstrap.com/docs/5.0/components/list-group/ (+)
 *
 * (+) При очистке списка, страница должна сбрасыватся на 0
 * Сделать переход между Страницами "Редактирование задач" и "Работа с задачами" (+)
 * Верстка календаря (-)
 * Логика открытия\закрытия календаря (-)
 * Описать propTypes для всех компонентов (+)
 */
