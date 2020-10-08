import React, { Component } from 'react';
import { AuthContainer, DashboardContainer, SignUpContainer } from './container';
import { Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import history from './history'
import { getStorage } from './helper';
import { fetchUser } from './store/action';

class Routing extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  componentDidMount() {
    const token = getStorage('token')
    if (token) {
      this.props.fetchUser({ token })
    }
  }
  render() {
    return (
      <div>
        <Router history={history} >
          <Switch>
            <Route exact path='/'>
              {this.props.isUserExist
                ? <DashboardContainer />
                : <AuthContainer />}
            </Route>
            <Route path='/signup'>
                <SignUpContainer />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (props) => {
  return {
    isUserExist: props.user.isUserExist
  }
};
export default connect(mapStateToProps, { fetchUser })(Routing);