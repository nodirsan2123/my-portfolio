import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import '@fontsource/roboto';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
