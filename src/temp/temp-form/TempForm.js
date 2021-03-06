import React from 'react';

export default class TempForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            surname: '',
            age: '',
        };
    }

    handleInput = event => {
        const {id, value} = event.currentTarget;

        this.setState(() => ({
            [id]: value,
        }));
    }

    handleSubmit = event => {
        event.preventDefault();
        const form = this.state;
        console.log({form});
    }

    handleClearForm = () => {
        this.setState(state => Object.keys(state).reduce((newState, key) => {
            return {
                ...newState,
                [key]: '',
            };
        }, {}));
    }

    render() {
        const {name, surname, age} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Имя</label>
                    <input id="name" value={name} onChange={this.handleInput} />
                </div>
                <div>
                    <label htmlFor="surname">Фамилия</label>
                    <input id="surname" value={surname} onChange={this.handleInput} />
                </div>
                <div>
                    <label htmlFor="age">Возраст</label>
                    <input id="age" value={age} onChange={this.handleInput} />
                </div>
                <button type="submit">Отправить</button>
                <button type="button" onClick={this.handleClearForm}>Очистить</button>
            </form>
        );
    }
}
