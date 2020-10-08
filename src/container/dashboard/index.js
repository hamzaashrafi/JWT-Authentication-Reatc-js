import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DashboardComponent } from '../../component';

class DashboardContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    onLogout = () => {
        localStorage.clear();
        window.location.reload();
    };
    render() {
        return (
            <div>
                <DashboardComponent
                    onLogout={this.onLogout.bind(this)}
                />
            </div>
        );
    }
}

const mapStateToProps = (props) => {
    console.log(props);
    return {
        user: props.user.user
    };
};
export default connect(mapStateToProps, {})(DashboardContainer);