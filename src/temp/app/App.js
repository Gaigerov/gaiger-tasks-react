import React from 'react';
import Header from '../header';
import PageChanger from '../page-changer';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header text="Заголовок" />

                <PageChanger />

                <p>Информация о неком сайте</p>

                <p>Дополнительная информация которую стоило бы тебе знать</p>
            </div>
        );
    }
}
