import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LanguageScroller from './LanguageScroller';  // Use './' for the current folder

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Optional: Put language scroller here, or embed inside Navbar */}
      <div className="p-2 flex justify-end container-custom">
        <LanguageScroller /> {/* Replaced LanguageSwitcher with LanguageScroller */}
      </div>

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
