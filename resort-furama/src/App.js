import './App.css';
import {StrictMode} from "react";
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ServiceManager from "./component/ServiceManager";


function App() {
    return (
        <>
            <StrictMode>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<ServiceManager/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </StrictMode>
        </>
    );
}

export default App;
