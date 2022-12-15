import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FormAddUser = () => {
  const [berat, setBerat] = useState("");
  const [tglSelesai, setTglSelesai] = useState("");
  const [hargaId, setHargaId] = useState([]);
  const [pelangganId, setPelangganId] = useState([]);
  const [plId, setPlId] = useState("");
  const [total, setTotal] = useState(0);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveTransaksi = async (e) => {
    e.preventDefault();
    const harga = await axios.get(`http://localhost:5000/harga`);
    const hargatotal = berat * harga.data[0].harga_per_kg;
    setTotal(hargatotal);
    try {
      await axios.post(`http://localhost:5000/transaksi`, {
        transaksi_berat: berat,
        hargaId: 1,
        transaksi_harga: 1,
        pelangganId: plId,
        transaksi_pelanggan: plId,
        harga_total: total,
      });
      navigate("/transaksi");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const cekTotal = async () => {
    setTotal("");
    const harga = await axios.get(`http://localhost:5000/harga`);
    const hargatotal = berat * harga.data[0].harga_per_kg;
    setTotal(hargatotal);
  };

  useEffect(() => {
    const getHarga = async () => {
      const harga = await axios.get(`http://localhost:5000/harga`);
      setHargaId(harga.data);
    };
    const getPelanggan = async () => {
      const pelanggan = await axios.get(`http://localhost:5000/pelanggan`);
      setPelangganId(pelanggan?.data);
    };
    getPelanggan();
    getPelanggan();
    getHarga();
    getHarga();
  }, [plId]);

  return (
    <div className="container">
      <h1>Add Transaksi</h1>
      {msg && (
        <div className="alert alert-danger my-3">
          <strong>{msg}</strong>
        </div>
      )}
      <form className="mt-2" onSubmit={saveTransaksi}>
        <div className="mb-3">
          <label className="form-label">Berat per Kg</label>
          <input
            value={berat}
            onChange={(e) => setBerat(e.target.value)}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label
            value={tglSelesai}
            onChange={(e) => setTglSelesai(e.target.value)}
            className="form-label"
          >
            Tanggal Selesai
          </label>
          <input type="date" className="form-control" />
        </div>
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
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Pelanggan
          </label>
          <select
            value={plId}
            onChange={(e) => setPlId(e.target.value)}
            className="form-select"
          >
            <option>--- Silahkan Pilih Pelanggan ---</option>
            {pelangganId.map((item, index) => (
              <option key={item.id} value={item.id}>
                {item.pelanggan_name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Save Transaksi
        </button>
      </form>
      <button onClick={cekTotal} className="btn btn-info float-end">
        Cek Total Harga = Rp. {total.toLocaleString()}
      </button>
    </div>
  );
};

export default FormAddUser;
