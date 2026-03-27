import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import ServiceDetail from './pages/ServiceDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);


  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = currentPage === 'home'
      ? 'ECO-SOL ENERGIES - Premium Solar Solutions Pakistan'
      : `${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} - ECO-SOL ENERGIES`;
  }, [currentPage]);

  const renderPage = () => {
    if (currentPage.startsWith('product-')) {
      const productId = currentPage.substring(8); // extracts the ID after 'product-'
      return <ProductDetail productId={productId} onNavigate={handleNavigate} />;
    }

    if (currentPage.startsWith('service-')) {
      const serviceId = currentPage.substring(8); // extracts the ID after 'service-'
      return <ServiceDetail serviceId={serviceId} onNavigate={handleNavigate} />;
    }

    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'portfolio':
        return <Portfolio onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'products':
        return <Products onNavigate={handleNavigate} />;
      case 'faq':
        return <FAQ onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPolicy onNavigate={handleNavigate} />;
      case 'terms':
        return <TermsOfService onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
