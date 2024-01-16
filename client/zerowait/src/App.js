import HomePage from './Components/HomePage';
import Loadingpage from './Components/Loadingpage';
import ProductPage from './Components/ProductPage.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>      
        <Routes>
          <Route path='/' element={<HomePage />} />    
          <Route path='/product/:id' element={ <ProductPage/>} />   
        </Routes>
      </Router>
    </div>
  );
}

export default App;
