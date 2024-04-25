import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import ListingApi from './components/pages/listing/listingApi';
import PlaceBooking from './components/pages/booking/placeBooking';
import About from './components/pages/About/About';
import Service from './components/pages/Gservices/Service';
import Career from './components/pages/Career/Career';
import Team from './components/pages/Team/Team';
import Contact from './components/pages/Contact/Contact';
import Blog from './components/pages/Blog/Blog';
import CareerlistingApi from './components/pages/careerlisting/careerlistingApi';
import CareerBooking from './components/pages/careerbooking/careerBooking';
import TeamlistingApi from './components/pages/teamlisting/teamlistingApi';


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
    <Route path="/booking/:item_name" component={PlaceBooking}/>
    <Route path="/careerlist/:id" component={CareerlistingApi}/>
    <Route path="/careerbooking/:item_name" component={CareerBooking}/>
    <Route path="/teamlist/:id" component={TeamlistingApi}/>
   </Switch>
   <Footer/>
    </Router>
  );
}

export default App;
