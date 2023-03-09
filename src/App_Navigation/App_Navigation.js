
import './App_Navigation.css'
import Navigation from '../components/Navigation/Navigation';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from '../components/Navigation/page/Home';
import Member from '../components/Navigation/page/Member';
import Product from '../components/Navigation/page/Product';

function App_Navigation() {

  return (
    <div>
      <Router>
        <Navigation/>
        <Routes>
            <Route path ="/" element={<Home/>} exact/>
            <Route path ="/member" element={<Member/>}/>
            <Route path ="/product" element={<Product/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App_Navigation;
