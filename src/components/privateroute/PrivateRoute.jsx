import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Assuming you have a function to check if the user is authenticated
const isAuthenticated = () => !!localStorage.getItem('token');

const PrivateRoute = ({ element, ...rest }) => (
    <Route
        {...rest}
        render={({ location }) =>
            isAuthenticated() ? (
                element
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
            )
        }
    />
);

export default PrivateRoute