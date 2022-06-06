import logo from './logo.svg';
import './App.css';
import NavPan from "./Components/NavPan/NavPan";
import Tecnologes from "./Components/Tecnologes/Tecnologes";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TestProps from "./Components/TestProps/TestProps";
import Login_Form from "./Components/login form/Login_Form";





function App(props) {



  return (

    <div className="App">


        <BrowserRouter>
            <NavPan />
                <Routes>
                    <Route path="/main/*" element={<Tecnologes />}/>
                    <Route path="/about/*" element={<div><p>Я в эбауте</p></div>}/>
                    <Route path="/login/*" element={<Login_Form/>}/>
                    <Route path="/test_props/*" element={<TestProps callSend={props.callSend} inventory={props.inventory}/>}/>
                </Routes>


        </BrowserRouter>

     </div>

  );
}

export default App;
