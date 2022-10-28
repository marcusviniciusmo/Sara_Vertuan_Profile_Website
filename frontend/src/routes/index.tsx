import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from 'views/Home';
import { AboutMe } from 'views/AboutMe';
import { Testimonies } from 'views/Testimonies';
import { Gallery } from 'views/Gallery';
import { Contact } from 'views/Contact';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/testimonies' element={<Testimonies />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};