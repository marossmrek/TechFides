import React from 'react';
import cosmonauts from "../data.json";

export class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            removeCosmonaut: ''
        }
    }

    setRemoveValue(cosmonautIndex) {
        this.setState({
            removeCosmonaut: cosmonautIndex
        })
    }

    handleDelete() {
        cosmonauts.splice(this.state.removeCosmonaut, 1);
        this.forceUpdate();
    }

    render() {
        const cosmonautsList = cosmonauts.map((d, index) =>
            <tr key={index}>
                <td>{d.name}</td>
                <td>{d.lastname}</td>
                <td>{d.birthday}</td>
                <td>{d.superpower}</td>
                <td>
                        <span onClick={this.setRemoveValue.bind(this, index)} id={index}
                              className="glyphicon glyphicon-remove" aria-hidden="true"
                              data-toggle="modal"
                              data-target="#deleteModal">
                        </span>
                </td>
            </tr>
        );
        return (
            <div className="col-md-offset-2 col-md-8">
                <div className="modal fade" id="deleteModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Add new cosmonaut</h4>
                            </div>
                            <div className="modal-body">
                                <p>Sure cosmonaut go home?</p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={this.handleDelete.bind(this)} type="button" className="btn btn-danger"
                                        data-dismiss="modal">Go home
                                </button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Stay in the
                                    universe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Birthday</th>
                        <th>Superpower</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {cosmonautsList}
                    </tbody>
                </table>
            </div>
        )
    }
}