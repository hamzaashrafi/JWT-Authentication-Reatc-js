import React from 'react';

const SignUpComponent = (props) => {
    return (
        <div className='container signup_align'>
            <form onSubmit={props.onSignUp} method='POST'>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="userName">User Name</label>
                        <input onChange={props.inputHandler} type="text" required className="form-control" name='user_name' id="userName" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input onChange={props.inputHandler} type="email" required className="form-control" name='email' id="inputEmail4" placeholder="Email" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputMobile">Mobile Number</label>
                        <input onChange={props.inputHandler} type="number" name='mobileNumber' required className="form-control" id="inputMobile" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input onChange={props.inputHandler} type="password" name='password' required className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input onChange={props.inputHandler} type="text" name='city' className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="gender">Gender</label>
                        <select defaultValue='null' className="form-control" onChange={props.inputHandler} name='gender' id='gender'>
                            <option>Male</option>
                            <option>Female</option>
                            <option value='null' style={{ display: 'none' }}></option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input onChange={props.inputHandler} type="text" name='address' required className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <button type="submit" className="btn btn-primary w-25">Sign up</button>
            </form>
        </div>
    );
};

export default SignUpComponent;