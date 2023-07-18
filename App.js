import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Products from './pages/products';
import Product from './pages/product';
import NewProduct from './pages/newProduct';
import NotFound from './pages/notFound';
import ProductLayout from './productLayout';

function App() {

  const location = useLocation();

    return(
      <div>

        {/* <Routes location='/products'> */}
        <Routes>
          <Route path='/products' element={<h2>Offers available on all products</h2>}/>
        </Routes>

        <nav>
          <NavLink 
            style={({ isActive }) => { return isActive ? { color: "red" } : {} }} 
            to="/">

            {({ isActive }) => isActive ? "Home is Active" : "Home"}        
          </NavLink>{' '}

          <Link to="/about">About</Link>{' '}
          <Link to="/products">Products</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>

          <Route path='/products' element={<ProductLayout />}>
            <Route index element={<Products />}/>
            <Route path=':id' element={<Product />}/>
            <Route path='new' element={<NewProduct />}/>
          </Route>

          {/* <Route path='/products' element={<Products />}/>
          <Route path='/products/:id' element={<Product />}/>
          <Route path='/products/new' element={<NewProduct />}/> */}

          <Route path='*' element={<NotFound />}/>
        </Routes>
        {location.state}
      </div>
    ); 
}

export default App;
