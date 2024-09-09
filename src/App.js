import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import ListingApi from './components/pages/listing/listingApi';
import PlaceBooking from './components/pages/booking/placeBooking';
import About from './components/pages/About/About';
import Service from './components/pages/Gservices/Service';
import Contact from './components/pages/Contact/Contact';
import registeritem from './components/pages/register/registeritem';

function App() {
  return (
    <Router>
   <Navbar />
   <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/service' component={Service}/>
   
    <Route path='/contact' component={Contact}/>
    <Route path="/list/:id" component={ListingApi}/>
    <Route path="/enquiry/:item_name" component={PlaceBooking}/>
    <Route path="/register/:item_name" component={registeritem}/>
   
   </Switch>
   <Footer/>
    </Router>
  );
}

export default App;
