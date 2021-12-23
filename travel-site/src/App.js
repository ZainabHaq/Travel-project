import './App.css';
import Navb from './Components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Contact from './Components/ContactUs';
import Service from './Components/TravelService/Service';
import Sidebar from './Components/SideBar';
import Navbar from './Components/Navbar/index';
import { useState } from 'react';
import FooterBar from './Components/Footer';
import Heading from './Components/Heading';
import Home1 from './Components/Home/Home1';
import About from './Components/AboutUs/About';
import Package from './Components/Packages/Package';
function App() {
  const [isOpen,setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
     <Router>
     <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
        <Routes>
            

    
           <Route exact path='/' element={<Home1/>}/>
           <Route exact path='/contact-us' element={<Contact/>}/>
           <Route exact path= '/services' element={<Service/>}/>
           <Route exact path= '/About' element={<About/>}/>
           <Route exact path= '/package' element={<Package/>}/>

        </Routes>
        <FooterBar/>
     </Router>

    </div>
  );
}

export default App;
