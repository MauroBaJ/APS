
import './App.css';
import Footer from './Components/Footer/Footer';
import GoToTop from './Components/GoToTop/GoToTop';
import Navigation from './Components/Navigation/Navigation'
import MainPage from './Components/pages/MainPage/MainPage'
import AboutUs from './Components/pages/AboutUs/AboutUs';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './Components/pages/Login/Login';


function App() {

  

  return (
    <div className="App">
      
      <Router>
      <Navigation />
        <Switch>
          <Route exact path='/' component={MainPage}></Route>
          <Route exact path='/aboutus' component={AboutUs}></Route>
          <Route exact path='/login' component={Login}></Route>
        </Switch>


        <Footer />
            </Router>

        
 
      
    </div>
  );
}

export default App;
