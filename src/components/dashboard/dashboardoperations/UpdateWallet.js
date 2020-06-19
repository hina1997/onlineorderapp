import React, { Component } from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames'
import {getWallet,updateWallet} from '../../../actions/projectActions'

class UpdateWallet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:'',
            name: '',
            address: '',
            material:'',
            size:'',
            description: '',
            priority: '',
            currentBalance:'',
            errors:''
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
        if(nextProps.wallet){
            this.setState({
                id:nextProps.wallet.id,
                name: nextProps.wallet.name,
                address: nextProps.wallet.address,
                material:nextProps.wallet.material,
                size:nextProps.wallet.size,
                description: nextProps.wallet.description,
                currentBalance:nextProps.wallet.currentBalance,
                priority: nextProps.wallet.priority,
            })
        }
    }

    componentDidMount(){
        this.props.getWallet(this.props.match.params.id)
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }

    submitHandler = (event) => {
        const updateWallet = {
            id:this.state.id,
            name: this.state.name,
            address: this.state.address,
            material: this.state.material,
            description: this.state.description,
            size: this.state.size,
            priority: this.state.priority
        }
        this.props.updateWallet(this.state.id,updateWallet,this.props.history)
        event.preventDefault()
    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Update Order</h5>
                            <hr />
                            <form onSubmit={(event)=>this.submitHandler(event)}>
                                <div className="form-group">
                                    <input type="text" value={this.state.name} onChange={(event) => this.changeHandler(event, "name")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.name})} placeholder="Name" />
                                    <p className="text-danger">{this.state.errors.name}</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" value={this.state.address} onChange={(event) => this.changeHandler(event, "address")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.address})} placeholder="Address" />
                                    <p className="text-danger">{this.state.errors.address}</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" value={this.state.material} onChange={(event) => this.changeHandler(event, "material")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.material})} placeholder="Material" />
                                    <p className="text-danger">{this.state.errors.material}</p>
                                </div>
                               
                                <div className="form-group">
                                    <textarea value={this.state.description} onChange={(event) => this.changeHandler(event, "description")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.description})} placeholder="Description"></textarea>
                                    <p className="text-danger">{this.state.errors.description}</p>
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-control-lg" value={this.state.priority} onChange={(event) => this.changeHandler(event, "priority")}>
                                        <option value={3}>Select your Design</option>
                                        <option value={1}>1-piece</option>
                                        <option value={2}>2-piece</option>
                                        <option value={3}>3-piece</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-control-lg" value={this.state.size} onChange={(event) => this.changeHandler(event, "size")}>
                                        <option value={3}>Display your size</option>
                                        <option value={1}>Small</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Large</option>
                                    </select>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Update" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    errors:state.errors,
    wallet:state.wallet.wallet
})

export default connect(mapStateToProps,{getWallet,updateWallet})(UpdateWallet)
