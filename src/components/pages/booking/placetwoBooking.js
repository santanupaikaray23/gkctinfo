import React, { Component } from 'react';

const url = "http://localhost:9600/addbooking";

class PlacetwoOrder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item_name: this.props.match.params.item_name,
            name: '',
            phone: '',
            email: '',
            cost: sessionStorage.getItem('cost'),
            errors: {} // New state to track validation errors
        };
    }

    // Function to handle input changes
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // Validation logic
    validateForm = () => {
        const { name, email, phone } = this.state;
        let errors = {};
        let formIsValid = true;

        // Name validation
        if (!name) {
            formIsValid = false;
            errors["name"] = "Name cannot be empty";
        }

        // Email validation
        if (!email) {
            formIsValid = false;
            errors["email"] = "Email cannot be empty";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
        }

        // Phone validation (assuming it should be 10 digits)
        if (!phone) {
            formIsValid = false;
            errors["phone"] = "Phone number cannot be empty";
        } else if (phone.length !== 10) {
            formIsValid = false;
            errors["phone"] = "Phone number should be 10 digits";
        }

        this.setState({ errors });
        return formIsValid;
    }

    // Function to handle form submission
    handleSubmit = () => {
        if (this.validateForm()) {
            // If form is valid, submit data
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            .then(() => this.props.history.push('/viewBooking'));
        } else {
            // If form is invalid, show errors
            console.log("Form has errors:", this.state.errors);
        }
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">Place Booking</div>

                    <div className="panel-body">
                        <div className="form-group">
                            <label>Service Name</label>
                            <input
                                readOnly
                                name="item_name"
                                value={this.state.item_name}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label>Cost</label>
                            <input
                                readOnly
                                name="cost"
                                value={this.state.cost}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                name="email"
                                value={this.state.email}
                                className="form-control"
                                onChange={this.handleChange}
                            />
                            <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                        </div>

                        <div className="form-group">
                            <label>Name</label>
                            <input
                                name="name"
                                value={this.state.name}
                                className="form-control"
                                onChange={this.handleChange}
                            />
                            <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                        </div>

                        <div className="form-group">
                            <label>Phone</label>
                            <input
                                name="phone"
                                value={this.state.phone}
                                className="form-control"
                                onChange={this.handleChange}
                            />
                            <span style={{ color: "red" }}>{this.state.errors["phone"]}</span>
                        </div>

                        <button
                            className="btn btn-success"
                            onClick={this.handleSubmit}
                        >
                            Pay Now
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlacetwoOrder;