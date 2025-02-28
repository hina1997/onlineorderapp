import React, { Component } from 'react'
import {createWallet} from '../../../actions/projectActions'
import {connect} from 'react-redux'
import classnames from 'classnames'

class CreateOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            address: '',
            material:'',
            description: '',
            size:'',
            priority: '',
            errors:''
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }

    submitHandler = (event) => {
        const newWallet = {
            name: this.state.name,
            address: this.state.address,
            material: this.state.material,
            description: this.state.description,
            size: this.state.size,
            priority: this.state.priority
        }
        this.props.createWallet(newWallet,this.props.history)
        event.preventDefault()
    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Order</h5>
                            <hr />
                            <form onSubmit={(event)=>this.submitHandler(event)}>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "name")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.name})} placeholder="Name" />
                                    <p className="text-danger">{this.state.errors.name}</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "address")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.address})} placeholder="Address" />
                                    <p className="text-danger">{this.state.errors.address}</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "material")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.material})} placeholder="Material" />
                                    <p className="text-danger">{this.state.errors.material}</p>
                                </div>
                                <div className="form-group">
                                <select className="form-control form-control-lg" onChange={(event) => this.changeHandler(event, "priority")}>
                                    <option value={3}>Select your Design</option>
                                    <option value={1}>1-piece</option>
                                    <option value={2}>2-piece</option>
                                    <option value={3}>3-piece</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select className="form-control form-control-lg" onChange={(event) => this.changeHandler(event, "size")}>
                                    <option value={3}>Select your Size</option>
                                    <option value={1}>Smal</option>
                                    <option value={2}>Medium</option>
                                    <option value={3}>Large</option>
                                </select>
                            </div>
                                <div className="form-group">
                                    <textarea onChange={(event) => this.changeHandler(event, "description")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.description})} placeholder="Description"></textarea>
                                    <p className="text-danger">{this.state.errors.description}</p>
                                </div>
                                
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Create" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    errors:state.errors
})

export default connect(mapStateToProps,{createWallet})(CreateOrder)
