import React, { Component } from 'react';
import { AuthComponent } from '../../component';
import { loginUser } from '../../store/action'
import { connect } from 'react-redux';

export class AuthContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    inputHandler = (env) => {
        this.setState({ [env.target.name]: env.target.value });
    };

    onFinish = values => {
        values.preventDefault()
        const obj = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(obj)
    };

    render() {
        return (
            <div>
                <AuthComponent
                    onFinish={this.onFinish.bind(this)}
                    inputHandler={this.inputHandler.bind(this)}
                    isLogin={this.props.isLogin}
                />
            </div>
        )
    }
}

const mapStateToProps = (props) => {
    return {
        isLogin: props.user.isLogin,
        isUserExist: props.user.isUserExist,
    }
};

export default connect(mapStateToProps, { loginUser })(AuthContainer);
