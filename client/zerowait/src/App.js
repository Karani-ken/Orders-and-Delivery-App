import HomePage from './Components/HomePage';
import Loadingpage from './Components/Loadingpage';
import ProductPage from './Components/ProductPage.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './Components/ProfilePage.jsx';
import PaymentPage from './Components/PaymentPage.jsx';
function App() {
  return (
    <div className="App">
      <Router>      
        <Routes>
          <Route path='/' element={<HomePage />} />    
          <Route path='/product/:id' element={ <ProductPage/>} /> 
          <Route path='/profile' element={<ProfilePage/>}  />
          <Route path='/checkout-page' element={<PaymentPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
