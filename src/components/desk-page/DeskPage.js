import React from 'react';

export default class DeskPage extends React.Component {


    render() {

        return (
            <div className="card ml-2 mr-2">
                <div className="card-body" id="past">
                    <p className="h4">Работа с задачами</p>
                    <span className="d-flex ml-2 mr-2 row">
                        <div className="card col-12 col-md-12 col-lg-4 bg-warning text-dark">
                            <div className="card-body">
                                <h4>В ожидании</h4>
                                <p>эти задачи ждут исполнителя</p>

                            </div>
                        </div>
                        <div className="card col-12 col-md-12 col-lg-4 bg-primary bg-gradient text-light">
                            <div className="card-body">
                                <h4>В работе</h4>
                                <p>эти задачи находятся у исполнителя в работе</p>
                                <div className="card-body bg-light mb-1"></div>
                                <div className="card-body bg-light mb-1"></div>
                                <div className="card-body bg-light"></div>
                            </div>
                        </div>

                        <div className="card col-12 col-md-12 col-lg-4 bg-success text-light">
                            <div className="card-body">
                                <h4>Готовые</h4>
                                <p>эти задачи готовы и переданы заказчику</p>
                                <div className="card-body bg-light mb-1"></div>
                                <div className="card-body bg-light mb-1"></div>
                                <div className="card-body bg-light"></div>
                            </div>
                        </div>
                    </span>

                </div>
            </div>
        );
    }
}
