import { Routes, Route } from 'react-router-dom';

import Categories from './pages/Categories';
import Product from './pages/Product';
import Home from './pages/Home';

const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product/:id" element={<Product />} />
    </Routes>
);

export default Rotas;
