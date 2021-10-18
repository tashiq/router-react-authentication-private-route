import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { googleSignIn, gitHubSignIn } = useAuth();
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={googleSignIn}>Sign In With google</button>
            <button onClick={gitHubSignIn}>sign in with github</button>
        </div>
    );
};

export default Login;