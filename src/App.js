import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Menu from './Menu';
import Signup from './signup';
import Signin from './signin';
import Getpas from './password';
import Home from './home';
import Pswd from './newpas';
import Edit from './update';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Menu/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/getpas' element={<Getpas/>}/>
      <Route path='/newpas' element={<Pswd/>}/>
      <Route path='/edit' element={<Edit/>}/>



    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
