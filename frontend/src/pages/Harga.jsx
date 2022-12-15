import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import Layout from "./Layout";

const Harga = () => {
  const [hargaId, setHargaId] = useState([]);
  const [gantiHarga, setGantiHarga] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  const changePrice = async (e) => {
    e.preventDefault();
    await axios.patch(
      `http://localhost:5000/harga/9e0b7a86-7943-4b9a-bfbf-488734d4ad7f`,
      {
        harga_per_kg: gantiHarga,
      }
    );
    getHarga();
    navigate("/harga");
  };
  const getHarga = async () => {
    const harga = await axios.get(`http://localhost:5000/harga`);
    setHargaId(harga.data);
  };
  useEffect(() => {
    getHarga();
  }, []);
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  return (
    <div>
      <Layout>
        <div className="mb-3">
          <label className="form-label">Harga Per Kg</label>
          <fieldset disabled>
            <input
              placeholder={hargaId[0]?.harga_per_kg.toLocaleString()}
              type="password"
              className="form-control"
            />
          </fieldset>
        </div>
        <form onSubmit={changePrice}>
          <div className="mb-5">
            <label className="form-label">Ganti harga</label>
            <input
              value={gantiHarga}
              onChange={(e) => setGantiHarga(e.target.value)}
              type="number"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </form>
      </Layout>
    </div>
  );
};

export default Harga;
