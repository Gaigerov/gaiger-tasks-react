import React from 'react';

const colors = [
    'blue', 'yellow', 'black', 'red', 'gray', 'brown', 'green'
];

export default class Conditions extends React.Component {
    render() {
        const isShow = true;
        const isIfTrue = true;
        const color = 'red';

        const switchFunc = () => {
            switch (color) {
                case 'red':
                    return <div>red</div>;
                case 'blue':
                    return <div>blue</div>;
                case 'black':
                    return <div>black</div>;
                default:
                    return null;
            }
        };
        return (
            <div>
                {isShow && (
                    <div>isShow</div>
                )}

                {isIfTrue ? (
                    <div>True</div>
                ) : (
                    <div>False</div>
                )}

                {switchFunc()}

                {colors.map(clr => {
                    return (
                        <div key={clr} style={{
                            backgroundColor: clr,
                            borderRadius: '50%',
                            width: '30px',
                            height: '30px',
                        }} />
                    );
                })}
            </div>
        );
    }
}
