import logo from './logo.svg';
import './App.css';
import {StrictMode} from "react";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import ServiceManager from "./component/ServiceManager";
import CustomerManager from "./component/CustomerManager";
import CustomerEdit from "./component/CustomerEdit";
import CustomerCreate from "./component/CustomerCreate";
import ServiceEdit from "./component/ServiceEdit";
import ServiceCreate from "./component/ServiceCreate";
import ContractManager from "./component/ContractManager";
import ContractCreate from "./component/ContractCreate";
import Footer from "./component/Footer";
import Header from "./component/Header";
import CustomerCreateList from "./component/CustomerCreateList";
import ContractCreateList from "./component/ContractCreateList";

function App() {
    return (
        <>
            <StrictMode>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route
                            path="/"
                            element={<ServiceManager />}
                        />
                        <Route path="/service/edit/:id" element={<ServiceEdit />} />
                        <Route path="service/create" element={<ServiceCreate />} />
                        <Route path="customer/list" element={<CustomerManager />} />
                        <Route path="customer/create" element={<CustomerCreate />} />
                        <Route path="customer/list/create" element={<CustomerCreateList />}/>
                        <Route path="customer/edit/:id" element={<CustomerEdit />} />
                        <Route path="contract/list" element={<ContractManager />} />
                        <Route path="contract/list/create" element={<ContractCreateList />} />
                        <Route path="contract/create" element={<ContractCreate />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </StrictMode>
        </>
    );
}

export default App;
