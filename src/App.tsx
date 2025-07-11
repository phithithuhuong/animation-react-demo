import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import { 
  HomePage, 
  CarouselPage, 
  AnimationsPage, 
  GalleryPage, 
  TrelloPage,
  AboutPage, 
  ContactPage,
  SchedulePage 
} from './pages';
import { ROUTES } from './constants/routes';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-800">
        <Navigation />
        <main className="flex-1 min-h-[calc(100vh-70px)]">
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.CAROUSEL} element={<CarouselPage />} />
            <Route path={ROUTES.ANIMATIONS} element={<AnimationsPage />} />
            <Route path={ROUTES.GALLERY} element={<GalleryPage />} />
            <Route path={ROUTES.TRELLO} element={<TrelloPage />} />
            <Route path={ROUTES.SCHEDULE} element={<SchedulePage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.CONTACT} element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
