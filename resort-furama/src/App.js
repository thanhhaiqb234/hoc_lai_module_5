import logo from './logo.svg';
import './App.css';
import Service from "./component/ServiceManager";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Navigation from "./component/Navigation";
import ServiceEdit from "./component/ServiceEdit";
import ServiceCreate from "./component/ServiceCreate";
function App() {
  return (
    <>
        <Header/>
        <Navigation/>
      <Footer/>
        <ServiceEdit/>
        <ServiceCreate/>
    </>
  );
}

export default App;
