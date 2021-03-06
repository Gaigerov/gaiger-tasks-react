import React from 'react';

export default class TableFormGroup extends React.Component {
    render() {
        const {label, required, handleInput, ...props} = this.props;
        return (
            <div className="form-group">
                <label>
                    {label}
                    {required && <span className="text-danger"> *</span>}
                </label>
                <input onChange={handleInput} className="form-control" {...props}></input>
            </div>
        );
    }
}
