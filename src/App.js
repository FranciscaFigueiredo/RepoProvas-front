import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import UserContext from './contexts/UserContext';
import { Home } from './pages/Home';
import Login from './pages/Login';

import SignUp from './pages/SignUp';
import GlobalStyle from './styles/GlobalStyle';

export default function App() {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        if (user === null) {
            setUser(JSON.parse(`${sessionStorage.getItem('user')}`));
        }

        if (user) {
            setToken(user.token);
        }
    }, [user, token]);

    return (
        <BrowserRouter>
            <GlobalStyle />
            <UserContext.Provider  value={{ user, setUser, token, setToken }}>
                <Routes>
                    <Route path="/" element={<Login user={ user } setUser={ setUser } setToken={ setToken } />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}
