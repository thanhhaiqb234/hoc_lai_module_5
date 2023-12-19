import './App.css';
import Blog from "./component/Blog";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {StrictMode} from "react";
import EditBlog from "./component/EditBlog";
import CreactBlog from "./component/CreactBlog";
function App() {
    return (
        <>
            <StrictMode>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Blog/>}/>
                        <Route path="/blog/edit/:id" element={<EditBlog/>}/>
                        <Route path="/create/blog" element={<CreactBlog/>}/>
                    </Routes>
                </BrowserRouter>
            </StrictMode>
        </>
    );
}

export default App;
