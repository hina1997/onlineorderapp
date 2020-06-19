import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Transaction extends Component {
    render() {
        let id = this.props.match.params.id;
        return (
            <div className="container">
                <Link to="/dashboard" className="btn btn-default btn-lg mb-3" style={{ backgroundColor: '#BB8FCE ' }}>
                    Back
                </Link>
                <br />
                <div className="card text-center">
                    <div className="card-header bg-success text-white">
                        <h4>Total Order</h4>
                        <h1>Order: 2</h1>
                    </div>
                </div>
                <hr />
              
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Name</th>
                            <th scope="col">Material</th>
                            <th scope="col">Size</th>
                            <th scope="col">Description</th>
                            <th scope="col">Design</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-danger">
                            <td>2020-04-15</td>
                            <td>Hina</td>
                            <td className="text-danger">Lawn</td>
                            <td className="text-success">Small</td>
                            <td className="text-danger">suit</td>
                            <td className="text-success">1-piece</td>
                            <td>
                                <a className="text-info" href="updatetransactionForm.html"><i className="fas fa-edit fa-2x"></i></a>
                                <span className="text-danger"><i className="fas fa-trash fa-2x"></i></span>
                            </td>
                        </tr>
                        <tr className="table-success">
                            <td>2020-04-01</td>
                            <td>Hina</td>
                            <td className="text-danger">Lawn</td>
                            <td className="text-success">Small</td>
                            <td className="text-danger">suit</td>
                            <td className="text-success">1-piece</td>
                            <td>
                                <a className="text-info" href="updatetransactionForm.html"><i className="fas fa-edit fa-2x"></i></a>
                                <span className="text-danger"><i className="fas fa-trash fa-2x"></i></span>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Transaction
