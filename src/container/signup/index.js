import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignUpComponent } from '../../component';
import { createUser } from '../../store/action';

class SignUpContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            details: {}
        };
    }

    inputHandler = (env) => {
        this.setState({
            details: {
                ...this.state.details,
                [env.target.name]: env.target.value
            }
        });
    };

    onSignUp = (value) => {
        value.preventDefault();
        const obj = this.state.details;
        this.props.createUser(obj);

    };

    render() {
        return (
            <div>
                <SignUpComponent
                    inputHandler={this.inputHandler.bind(this)}
                    onSignUp={this.onSignUp.bind(this)}
                />
            </div>
        );
    }
}

const mapStateToProps = (props) => {
    return {};
};

export default connect(mapStateToProps, { createUser })(SignUpContainer);

