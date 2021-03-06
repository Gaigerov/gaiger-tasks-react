import React from 'react';


const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

const getDaysOnMonth = (month, year) => {
    return 32 - new Date(year, month, 32).getDate();
};

// Возвращает день недели 0-6, где 0 - вск
const getStartWeekday = (month, year) => {
    return new Date(year, month, 0).getDay();
};

const getMonthPage = (month, year) => {
    const calendar = [];
    const startWeekDay = getStartWeekday(month, year);
    const daysOnMonth = getDaysOnMonth(month, year);
    let counter = 0;
    for (let row = 0; row < 6; row += 1) {
        calendar.push([]);
        for (let col = 0; col < 7; col += 1) {
            const day = (counter || col >= startWeekDay) && counter < daysOnMonth ? ++counter : '';
            calendar[row].push(day);
        }
    }
    return calendar;
};

const CONTAINER_CLASS = 'DateInput';

const isClickInContainer = (element) => {
    if (element.classList.contains(CONTAINER_CLASS)) {
        return true;
    }

    if (!element.parentNode) {
        return false;
    }

    return isClickInContainer(element.parentNode);
}

export default class DateInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShow: false,
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
        };
    }

    // event настоящий event.target
    handleClickOnWindow = (event) => {
        // window -> document -> html -> body -> div -> ... -> div
        // нужно подниматся по цепоке parent пока не встретим наш div или не дойдем до null
        // определеяем наш элемент ко классу
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOnWindow);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOnWindow);
    }

    render() {
        const {value, onChange} = this.props;
        const {isShow, month, year} = this.state;
        const calendar = getMonthPage(month, year);

        
        return (
            <div className={CONTAINER_CLASS}>
                <input type="text" value={value} onChange={onChange} />
                {isShow && (
                    <div>
                        {calendar}
                    </div>
                )}
            </div>
        );
    }
}
