import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import UserProvider from './context/Provider';
import Error from './Pages/Error';
import Product from './Pages/Product';

function App() {
  return (
    <UserProvider>
      <Routes className="App">
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
