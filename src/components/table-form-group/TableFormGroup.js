import React from 'react';
import PropTypes from 'prop-types';

class TableFormGroup extends React.Component {
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

TableFormGroup.propTypes = {
    id: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    type: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    placeholder: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
};

TableFormGroup.defaultProps = {
};

export default TableFormGroup;
