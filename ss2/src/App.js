import './App.css';
import Blog from "./component/Blog";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {StrictMode} from "react";

function App() {
    return (
        <>
            <StrictMode>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Blog/>}/>
                    </Routes>
                </BrowserRouter>
            </StrictMode>
        </>
    );
}

export default App;
