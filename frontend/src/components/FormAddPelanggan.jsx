import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormAddPelanggan = () => {
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const savePelanggan = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/pelanggan`, {
        pelanggan_name: name,
        pelanggan_hp: hp,
        pelanggan_alamat: alamat,
      });
      navigate("/pelanggan");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div className="container">
      <h1>Add Pelanggan</h1>
      {msg && (
        <div className="alert alert-danger my-3">
          <strong>{msg}</strong>
        </div>
      )}
      <form className="mt-2" onSubmit={savePelanggan}>
        <div className="mb-3">
          <label className="form-label">Nama Pelanggan</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">No Hp</label>
          <input
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Alamat</label>
          <input
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save Pelanggan
        </button>
      </form>
    </div>
  );
};

export default FormAddPelanggan;
