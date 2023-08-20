import Header from "./components/Hero/Header/Header";
import Hero from "./components/Hero/Hero/Hero"
import './App.css'
import Companies from "./components/Hero/Companies/Companies";
import Residencies from "./components/Hero/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contacts/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
      <div className="white-gradient"/>
      <Header />
     <Hero /> 
      </div>
      <Companies/>
     <Residencies/>
     <Value/>
     <Contact/>
   <GetStarted/>
  <Footer/>
    </div>
  );
}

export default App;
