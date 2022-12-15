import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AddPelanggan from "./pages/AddPelanggan";
import AddProduct from "./pages/AddProduct";
import AddTransaksi from "./pages/AddTransaksi";
import AddUser from "./pages/AddUser";
import Dashboard from "./pages/Dashboard";
import EditPelanggan from "./pages/EditPelanggan";
import EditProduct from "./pages/EditProduct";
import EditUser from "./pages/EditUser";
import Harga from "./pages/Harga";
import Pakaian from "./pages/Pakaian";
import Pelanggan from "./pages/Pelanggan";
import Product from "./pages/Product";
import Transaksi from "./pages/Transaksi";
import User from "./pages/User";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/add" element={<AddUser />} />
          <Route path="/user/edit/:id" element={<EditUser />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/add" element={<AddProduct />} />
          <Route path="/product/edit/:id" element={<EditProduct />} />
          <Route path="/harga" element={<Harga />} />
          <Route path="/transaksi" element={<Transaksi />} />
          <Route path="/transaksi/add" element={<AddTransaksi />} />
          <Route path="/pelanggan" element={<Pelanggan />} />
          <Route path="/pelanggan/add" element={<AddPelanggan />} />
          <Route path="/pelanggan/edit/:id" element={<EditPelanggan />} />
          <Route path="/pakaian" element={<Pakaian />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
