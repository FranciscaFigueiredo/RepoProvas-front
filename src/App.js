import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";

import Home from "./pages/Home";
import SaveExam from "./pages/SaveExam";
import ShowExams from "./pages/ShowExams";
import ShowTeachers from "./pages/ShowTeachers";
import ShowExamsByTeacher from "./pages/ShowExamsByTeacher";
import ShowSubjects from "./pages/ShowSubjects";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/post' element={<SaveExam />} />
                <Route path='/exams' element={<ShowExams />} />
                <Route path='/teachers' element={<ShowTeachers />} />
                <Route path='/teacher/:id' element={<ShowExamsByTeacher />} />
                <Route path='/subjects' element={<ShowSubjects />} />
            </Routes>
        </BrowserRouter>
    );
}
