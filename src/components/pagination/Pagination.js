import React from 'react';

export default class Pagination extends React.Component {

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
                <span onClick={this.handleClickLeft} className="page-link">left</span>
                <span className="page-link">{page + 1}</span>
                <span onClick={this.handleClickRight} className="page-link">right</span>
            </div>
        );
    }
}