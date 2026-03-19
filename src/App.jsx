import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';
import './styles/global.css';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProduct = (product) => {
    setSelectedProduct(product);
    setPage('product');
    window.scrollTo(0, 0);
  };

  const goBack = () => {
    setPage('catalog');
    setSelectedProduct(null);
  };

  return (
    <div>
      <Navbar setPage={setPage} page={page} />

      {page === 'home'    && <HomePage setPage={setPage} onProductClick={openProduct} />}
      {page === 'catalog' && <CatalogPage onProductClick={openProduct} />}
      {page === 'product' && <ProductPage product={selectedProduct} onBack={goBack} />}

      <Footer />
    </div>
  );
}