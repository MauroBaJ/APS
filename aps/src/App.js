
import './App.css';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation'
import MainPage from './Components/pages/MainPage/MainPage'
import AboutUs from './Components/pages/AboutUs/AboutUs';
import Tienda from './Components/pages/Tienda/Tienda';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './Components/pages/Login/Login';
import { CreateAccount } from './Components/pages/CreateAccount/CreateAccount';
import Producto from './Components/pages/Producto/Producto';
import Contacto from './Components/pages/Contacto/Contacto';


function App() {


  return (
    <div className="App">
      
      <Router>
      <Navigation />
        <Switch>
          <Route exact path='/' component={MainPage}></Route>
          <Route exact path='/aboutus' component={AboutUs}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/tienda' component={Tienda}></Route>
          <Route exact path='/register' component={CreateAccount}></Route>
          <Route exact path='/producto' component={Producto}></Route>
          <Route exact path='/contacto' component={Contacto}></Route>
        </Switch>


        <Footer />
            </Router>

        
 
      
    </div>
  );
}

export default App;
