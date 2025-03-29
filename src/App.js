import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './assets/page/Home';
import Courses from './assets/page/Courses';
import About from './assets/page/About';
import Contacts from './assets/page/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
