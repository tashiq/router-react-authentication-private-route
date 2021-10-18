import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="mb-2">
            <NavLink to='/home' className="text-decoration-none text-dark border p-2 ms-1">
                Home
            </NavLink>
            <NavLink to='/login' className="text-decoration-none text-dark border p-2 ms-1">
                LOGIN
            </NavLink>
            <NavLink to='/register' className="text-decoration-none text-dark border p-2 ms-1">
                REGISTER
            </NavLink>
            <NavLink to='/shipping' className="text-decoration-none text-dark border p-2 ms-1">
                Shipping
            </NavLink>
            {user.email && <button onClick={logOut}>LOG OUT</button>}



        </div>
    );
};

export default Header;