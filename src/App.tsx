import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import NewProductPage from './pages/NewProduct';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Layout>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/newproduct" element={<NewProductPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
