import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignUp from './pages/SignUp';
import GlobalStyle from './styles/GlobalStyle';

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/sign-up" element={ <SignUp /> } />
            </Routes>
        </BrowserRouter>
    );
}
