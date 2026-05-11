import './App.css';
import { Routes, Route } from 'react-router-dom';

import { ProductPreviewNew } from './component';
import { AboutUs } from './components/Aboutus';
import { Dashboard } from './components/products/Dashboard';
import { ProductList } from './components/products/ProductList';
import { ProductPreview } from './components/products/ProductPreview';
import { GeneralL } from './components/General';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<Dashboard />}>
          <Route index element={<ProductList />} />
        </Route>

        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/dhayamaran155/batch1" element={<Dashboard />}>
          <Route index element={<ProductList />} />
          <Route path="productList" element={<ProductList />} />
          <Route
            path="productPreview/:id/:price"
            element={<ProductPreview />}
          />
        </Route>

        <Route
          path="/product-display/:id"
          element={<ProductPreviewNew />}
        />

        <Route
          path="/general"
          element={<GeneralL title={"Dynamic Title - 1"} />}
        />

      </Routes>

    </div>
  );
}

export default App;