import logo from './logo.svg';
import './App.css';
import {StrictMode} from "react";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import ServiceManager from "./components/services/ServiceManager";
import CustomerManager from "./components/customers/CustomerManager";
import CustomerEdit from "./components/customers/CustomerEdit";
import CustomerCreate from "./components/customers/CustomerCreate";
import ServiceEdit from "./components/services/ServiceEdit";
import ServiceCreate from "./components/services/ServiceCreate";
import ContractManager from "./components/contract/ContractManager";
import ContractEdit from "./components/contract/ContractEdit";
import ContractCreate from "./components/contract/ContractCreate";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <>
            <StrictMode>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<ServiceManager/>}/>
                        <Route path="service/edit/:id" element={<ServiceEdit/>}/>
                        <Route path="service/create" element={<ServiceCreate/>}/>
                        <Route path="customers" element={<CustomerManager/>}/>
                        <Route path="customer/edit/:id" element={<CustomerEdit/>}/>
                        <Route path="customer/create" element={<CustomerCreate/>}/>
                        <Route path="contract/list" element={<ContractManager/>}/>
                        <Route path="contract/edit/:id" element={<ContractEdit/>}/>
                        <Route path="contract/create" element={<ContractCreate/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </StrictMode>
        </>
    );
}

export default App;
