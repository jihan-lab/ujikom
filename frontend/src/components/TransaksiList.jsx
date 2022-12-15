import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TransaksiList = () => {
  const [transaksi, setTransaksi] = useState([]);

  const getTransaksi = async () => {
    const response = await axios.get(`http://localhost:5000/transaksi`);
    setTransaksi(response.data);
  };

  const deleteTransaksi = async (transaksiId) => {
    const response = window.confirm("Apakah kamu yakin ingin hapus data ini ?");
    if (response) {
      await axios.delete(`http://localhost:5000/transaksi/${transaksiId}`);
    }
    getTransaksi();
  };

  useEffect(() => {
    getTransaksi();
  }, []);

  return (
    <div className="container">
      <h1>Transaksi</h1>
      <Link to="/transaksi/add">
        <button className="btn btn-primary my-3">Add Transaksi</button>
      </Link>
      <table className="table mt-1">
        <thead>
          <tr>
            <th className="text-center" scope="col">
              No
            </th>
            <th scope="col">Tgl Transaksi</th>
            <th className="text-center" scope="col">
              Harga per kg
            </th>
            <th className="text-center" scope="col">
              Berat per kg
            </th>
            <th className="text-center" scope="col">
              Nama Pelanggan
            </th>
            <th className="text-center" scope="col">
              Total Harga
            </th>
            {/* <th className="text-center" scope="col">
              Actions
            </th> */}
          </tr>
        </thead>
        <tbody>
          {transaksi.map((item, index) => (
            <tr key={item.uuid}>
              <th className="text-center" scope="row">
                {index + 1}
              </th>
              <td>{item.transaksi_tgl}</td>
              <td className="text-center">
                Rp. {item.harga.harga_per_kg.toLocaleString()}
              </td>
              <td className="text-center">{item.transaksi_berat}</td>
              <td className="text-center">{item.pelanggan.pelanggan_name}</td>
              <td className="text-center">
                Rp. {item.total_harga.toLocaleString()}
              </td>
              {/* <td className="text-center">
                <Link
                  to={`/product/edit/${item.uuid}`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteTransaksi(item.uuid)}
                  className="btn btn-danger ms-2"
                >
                  Delete
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransaksiList;
