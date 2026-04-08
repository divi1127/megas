import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ShopCollection from './pages/ShopCollection';
import Cart from './pages/Cart';
import TrackOrder from './pages/TrackOrder';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import Contact from './pages/Contact';
import BookAppointment from './pages/BookAppointment';
import About from './pages/About';

import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import Checkout from './pages/Checkout';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="all-collections" element={<ShopCollection />} />
            <Route path="category/:categoryId" element={<ShopCollection />} />
            <Route path="cart" element={<Cart />} />
            <Route path="track-order" element={<TrackOrder />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="contact" element={<Contact />} />
            <Route path="book-appointment" element={<BookAppointment />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="account" element={<Account />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
