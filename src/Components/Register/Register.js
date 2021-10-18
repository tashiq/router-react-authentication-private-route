import React from 'react';
import { useState } from 'react/cjs/react.development';

const Register = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const getPass = e => {
        setPassword(e.target.value);
    }

    const getEmail = e => {
        setEmail(e.target.value);
    }
    const getName = e => {
        setName(e.target.value);
    }
    const getPhone = e => {
        setPhone(e.target.value);
    }
    return (
        <div className="container">
            <h3>Please Register</h3>
            <form className="w-50">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input onClick={getName} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                    <input onClick={getPhone} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onClick={getEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onClick={getPass} type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    );
};

export default Register;