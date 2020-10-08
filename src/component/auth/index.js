import React from 'react';
import history from '../../history'
function AuthComponent(props) {
    return (
        <div className='align-center container'>
            <form onSubmit={props.onFinish}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange={props.inputHandler} name='email' type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={props.inputHandler} type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary w-25 mr-5">Login</button>
                <label className="form-check-label" htmlFor="exampleCheck1">If you don't have account <b onClick={() => history.push('/signup')}>SignUp</b></label>
            </form>
        </div>
    )
}


export default AuthComponent