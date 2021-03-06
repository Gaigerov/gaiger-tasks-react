
import React from 'react';
import TableFormGroup from '../table-form-group';
import Button from '../button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FORM_STATUS} from '../../consts';

export default class TableForm extends React.Component {

    render() {
        const {
            title,
            description,
            date,
            important,
            formStatus,
            onSubmit,
            handleInput,
            onHandleClearForm,
            formTitle,
        } = this.props;

        return (
            <form
                className="card-body"
                onSubmit={onSubmit}
            >
                {/* Должен менятся статус от formStatus */}
                <h4 id="formTitle"
                >{formTitle}</h4>
                <TableFormGroup
                    id="title"
                    value={title}
                    type="text"
                    placeholder="Добавить название"
                    label="Название события:"
                    onChange={handleInput}
                    required
                />
                <TableFormGroup
                    id="description"
                    value={description}
                    type="textarea"
                    label="Описание:"
                    onChange={handleInput}
                />
                <TableFormGroup
                    id="date"
                    value={date}
                    type="date"
                    placeholder="Введите дату"
                    label="Дата события:"
                    onChange={handleInput}
                />
                <span className="d-flex pr-3 mb-3 align-items-center">
                    <div className="form-check d-flex align-items-center">
                        <input
                            id="important"
                            checked={important}
                            className="checkbox"
                            type="checkbox"
                            onChange={handleInput}
                            taskStatus
                        />
                    </div>
                    <span className="text-warning pl-2 pr-2">
                        <FontAwesomeIcon icon={faStar} size="1x" />
                    </span>
                    <p className="m-0 p-0 h6">Важное событие</p>
                </span>
                <span className="d-flex justify-content-between">
                    <Button
                        id="btnTask"
                        type="submit"
                        styleType={formStatus === FORM_STATUS.CREATE ? 'primary' : 'success'}
                        buttonName={formStatus === FORM_STATUS.CREATE ? 'Добавить' : 'Сохранить'}>
                    </Button>
                    <Button
                        id="btnClear"
                        type="button"
                        styleType='secondary'
                        buttonName={formStatus === FORM_STATUS.CREATE ? 'Очистить' : 'Отменить'}
                        onClick={onHandleClearForm}>
                    </Button>
                </span>
            </form >
        );
    }
}
