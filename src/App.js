import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import ListingApi from './components/pages/listing/listingApi';
import Detail from './components/pages/details/details';
import PlaceBooking from './components/pages/booking/placeBooking';


function App() {
  return (
    <Router>
   <Navbar />
   <Switch>
    <Route path='/' exact component={Home}/>
    <Route path="/list/:id" component={ListingApi}/>
    <Route path='/details/:id' component={Detail}/>
    <Route path="/booking/:check_name" component={PlaceBooking}/>
   
        
   
   </Switch>
   <Footer/>
    </Router>
  );
}

export default App;
