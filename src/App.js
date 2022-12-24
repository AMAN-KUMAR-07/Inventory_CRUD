import './App.css';
import { Navbar } from './component/Navbar';
import { AddProduct } from './component/AddProduct';
import { ViewProduct } from './component/ViewProduct';
import UpdateProduct from './component/UpdateProduct';
import { Route, Routes } from "react-router-dom";
import About from './component/About';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/viewProduct" element={<ViewProduct />} />
        <Route path="/updateProduct/:id" element={<UpdateProduct />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
