import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home';
import Contactus from './components/Contactus';
import Pricing from './components/Pricing';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Listing_management from './components/Listing_management';
import Review_management from './components/Review_management';
import Our_news from './components/Our_news';
import Blog from './components/Blog';
import Support from './components/Support';
import Our_team from './components/Our_team';
import How_we_work from './components/How_we_work';
function App() {
  return (
    <div>
      <Router>
   <Navbar/>
             <Route exact path="/" component={Home} />
             <Route  path="/aboutus" component={Aboutus} />
             <Route  path="/pricing" component={Pricing} />
             <Route  path="/support" component={Support} />
             <Route  path="/blog" component={Blog} />
             <Route  path="/contactus" component={Contactus} />
             <Route  path="/how-we-work" component={How_we_work} />
             <Route  path="/listing-management" component={Listing_management} />
             <Route  path="/our-news" component={Our_news} />
             <Route  path="/our-team" component={Our_team} />
             <Route  path="/review-management" component={Review_management} />
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
