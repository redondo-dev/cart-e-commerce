
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navb';
import StoreItem from './components/StoreItem';
import Store from './components/Store';
import ShoppingCartProvider from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
    <div className="App">
      <Navbar/>
      <br/>
      <Store />
      <br/>
      <StoreItem />
    </div>
    </ShoppingCartProvider>
  );
}

export default App;
