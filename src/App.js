import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import ListingApi from './components/pages/listing/listingApi';
import Detail from './components/pages/details/details';
import PlaceBooking from './components/pages/booking/placeBooking';
import About from './components/pages/About/About';
import Service from './components/pages/Gservices/Service';
import Career from './components/pages/Career/Career';
import Team from './components/pages/Team/Team';
import Contact from './components/pages/Contact/Contact';
import Blog from './components/pages/Blog/Blog';



function App() {
  return (
    <Router>
   <Navbar />
   <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/service' component={Service}/>
    <Route path='/career' component={Career}/>
    <Route path='/team' component={Team}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/blog' component={Blog}/>
    <Route path="/list/:id" component={ListingApi}/>
    <Route path='/details/:id' component={Detail}/>
    <Route path="/booking/:check_name" component={PlaceBooking}/>
   
        
   
   </Switch>
   <Footer/>
    </Router>
  );
}

export default App;
