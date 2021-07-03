import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AuthRoute from './utility/AuthRoute'
import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import Footer from './components/Footer'
import Details from './components/Details';
import Favourites from './components/Favourites';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/:post_id" component={Details} />
        <AuthRoute exact path="/favourites" component={Favourites} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
