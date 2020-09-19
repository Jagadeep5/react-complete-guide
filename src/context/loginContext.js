import React from 'react';

const LoginContext = React.createContext({
    authentication: false,
    login: () => {}
});

export default LoginContext;