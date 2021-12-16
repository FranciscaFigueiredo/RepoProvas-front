import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";

import Home from "./pages/Home";
import SaveExam from "./pages/SaveExam";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/post' element={<SaveExam />} />
            </Routes>
        </BrowserRouter>
    );
}
