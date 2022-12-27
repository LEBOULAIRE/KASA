import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Error from './pages/Error';
import Homepage from './pages/Homepage';
import Lodging from './pages/Lodging';


// function de l'apllication
function App() {
    return (
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/home' element={<Homepage />} />
            <Route path='/lodging/:id' element={<Lodging />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error />} />

          </Routes>
      
      </BrowserRouter>
    );
  };

export default App;
