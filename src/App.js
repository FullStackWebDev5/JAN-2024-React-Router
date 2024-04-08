import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


/*
  Domain: http://localhost:3000

  Home: / (Root route)
  About: /about
  Contact: /contact
*/
























/*
  - npm install
  - import [packageName] from '[packageName]

  Eg:
    import moment from 'moment';
    
    <p>{moment().format('LL')}</p>
    <p>{moment("19470815", "YYYYMMDD").fromNow()}</p>
    <p>{moment("20240407", "YYYYMMDD").fromNow()}</p>
*/