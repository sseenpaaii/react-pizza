import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";
import Category from "./pages/Category";
import New from "./pages/New";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category/:type" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/new" element={<New />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
