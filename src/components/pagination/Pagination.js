import React from 'react';
import PropTypes from 'prop-types';

class Pagination extends React.Component {

    handleClickLeft = () => {
        if (this.props.page > 0) {
            this.props.onChangePage(this.props.page - 1);
        }
    }

    handleClickRight = () => {
        if (this.props.page < this.props.pageCount - 1) {
            this.props.onChangePage(this.props.page + 1);
        }
    }

    render = () => {
        const {page, pageCount, onChangePage} = this.props;

        return (
            <div className="pagination justify-content-center btn">
                <li className={page === 0 ? 'page-item disabled' : 'page-item'}>
                    <span onClick={this.handleClickLeft} className="page-link">left</span>
                </li>
                <li className="page-item">
                    <span className="page-link">{page + 1}</span>
                </li>
                <li className={page === pageCount - 1 ? 'page-item disabled' : 'page-item'}>
                    <span onClick={this.handleClickRight} className="page-link">right</span>
                </li>

            </div>
        );
    }
}

Pagination.propTypes = {
    page: PropTypes.shape({
        page: PropTypes.number,
    }),
    onChangePage: PropTypes.func.isRequired,
    pageCount: PropTypes.number,
};

Pagination.defaultProps = {
};

export default Pagination;
