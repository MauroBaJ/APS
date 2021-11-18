
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
import Careers from './Components/pages/Careers/Careers';
import viewJobs from './Components/pages/ViewJobs/viewJobs';
import Vacante from './Components/pages/Vacante/Vacante';
import Carrito from './Components/pages/Carrito/Carrito';
import LogOut from './Components/LogOut/LogOut';
import Admin from './Components/pages/Admin/Admin';
import CrearProducto from './Components/pages/CrearProducto/CrearProducto';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import ModificarProducto from './Components/pages/ModificarProducto/ModificarProducto';
import Tabla from './Components/pages/ModificarProducto/Tabla';
import CrearVacante from './Components/pages/CrearVacante/CrearVacante';
import TablaVacantes from './Components/pages/ModificarVacante/TablaVacantes';
import ModificarVacante from './Components/pages/ModificarVacante/ModificarVacante';
import ProcesoPago from './Components/pages/ProcesoPago/ProcesoPago';
import AddNewCard from './Components/pages/ProcesoPago/AddNewCard';
import ProcesoEnvio from './Components/pages/ProcesoEnvio/ProcesoEnvio';
import Compra from './Components/pages/Compra/Compra';
import RealizarCompra from './Components/pages/Compra/RealizarCompra';
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
          <Route exact path='/careers' component={Careers}></Route>
          <Route exact path='/viewJobs' component={viewJobs}></Route>
          <Route exact path='/vacante' component={Vacante}></Route>
          <Route exact path='/carrito' component={Carrito}></Route>
          <Route exact path='/logOut' component={LogOut}></Route>
          <Route exact path='/admin' component={Admin}></Route>
          <Route exact path='/admin/products/create' component={CrearProducto}></Route>
          <Route exact path='/admin/products/modify' component={ModificarProducto}></Route>
          <Route exact path='/admin/products/modify/product' component={Tabla}></Route>
          <Route exact path='/admin/careers/create' component={CrearVacante} ></Route>
          <Route exact path='/admin/careers/modify'component={TablaVacantes} ></Route>
          <Route exact path='/admin/careers/modify/opening' component={ModificarVacante}></Route>
          <Route exact path='/carrito/pago' component={ProcesoPago}></Route>
          <Route exact path='/carrito/pago/nuevaTarjeta' component={AddNewCard}></Route>
          <Route exact path='/carrito/direccion' component={ProcesoEnvio}></Route>
          <Route exact path='/carrito/compra/confirmar' component={Compra}></Route>
          <Route exact path='/carrito/compra/realizar' component={RealizarCompra}></Route>
        </Switch>


        <Footer />
            </Router>

        
 
      
    </div>
  );
}

export default App;
