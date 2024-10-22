import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import ListingApi from './components/pages/listing/listingApi';
import PlaceBooking from './components/pages/enquiry/placeBooking';
import About from './components/pages/About/About';
import Service from './components/pages/Gservices/Service';
import Contact from './components/pages/Contact/Contact';
import ProductDetails from './components/pages/details/productDetails';
import PlacetwoBooking from './components/pages/booking/placetwoBooking';
import BookingComponent from './components/pages/booking/bookingApi';

function App() {
  return (
    <Router>
   <Navbar />
   <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/service' component={Service}/>
   <Route path='/details/:name' component={ProductDetails}/>
    <Route path='/contact' component={Contact}/>
    <Route path="/list/:id" component={ListingApi}/>
    <Route path="/enquiry/:item_name" component={PlaceBooking}/>
    <Route path="/booking/:item_name" component={PlacetwoBooking}/>
    <Route path="/placepayment" component={BookingComponent}/>
    
   
   </Switch>
   <Footer/>
    </Router>
  );
}

export default App;
