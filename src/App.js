import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ManageOrder from './Components/ManageOrders/ManageOrders';
import AddService from './Components/AddService/AddService';
import Orders from './Components/Orders/Orders';
import Services from './Components/Services/Services';
import Details from './Components/Details/Details';

function App() {
  return (
    <div>
      <AuthProvider>

        <Router>

          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>

            <Route path="/about">
              <About></About>
            </Route>

            <PrivateRoute path="/manageOrders">
              <ManageOrder></ManageOrder>
            </PrivateRoute>

            <PrivateRoute path="/service/:serviceId">
              <Details></Details>
            </PrivateRoute>

            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>

            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>

        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
