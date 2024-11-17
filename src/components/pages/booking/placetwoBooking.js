import React, { Component } from 'react';


const url = "https://node-api-freelance.onrender.com/addbooking";

class PlacetwoOrder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item_name: this.props.match.params.item_name,
            name: '',
            phone: '',
            email: '',
            cost: sessionStorage.getItem('cost'),
            errors: {}
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

        if (!name) {
            formIsValid = false;
            errors["name"] = "Name cannot be empty";
        }

        if (!email) {
            formIsValid = false;
            errors["email"] = "Email cannot be empty";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
        }

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

    handleSubmit = () => {
        if (this.validateForm()) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            .then(() => this.props.history.push('/placepayment'));
        } else {
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
                            <label>Service Name :</label>
                            <input
                                readOnly
                                name="item_name"
                                value={this.state.item_name}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label>Minimum Cost :</label>
                            <input
                                readOnly
                                name="cost"
                                value={this.state.cost}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label>ଆପଣଙ୍କ Email Address ଏଣ୍ଟର କରନ୍ତୁ । :</label>
                            <input
                                name="email"
                                value={this.state.email}
                                className="form-control"
                                onChange={this.handleChange}
                            />
                            <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                        </div>

                        <div className="form-group">
                            <label>ଆପଣଙ୍କ ନାମ ଏଣ୍ଟର କରନ୍ତୁ । :</label>
                            <input
                                name="name"
                                value={this.state.name}
                                className="form-control"
                                onChange={this.handleChange}
                            />
                            <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                        </div>

                        <div className="form-group">
                            <label>ଆପଣଙ୍କ ଫୋନ ନମ୍ବର ଏଣ୍ଟର କରନ୍ତୁ । :</label>
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

                        {/* QR Code for PhonePe payment */}
                       
                    </div>
                </div>
            </div>
        );
    }
}

export default PlacetwoOrder;