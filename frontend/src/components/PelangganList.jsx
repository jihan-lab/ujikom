import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PelangganList = () => {
  const [pelanggan, setPelanggan] = useState([]);

  const getPelanggan = async () => {
    const response = await axios.get(`http://localhost:5000/pelanggan`);
    setPelanggan(response.data);
  };

  useEffect(() => {
    getPelanggan();
  }, []);

  return (
    <div className="container">
      <h1>Planggan</h1>
      <Link to="/pelanggan/add">
        <button className="btn btn-primary my-3">Add Pelanggan</button>
      </Link>
      <table className="table mt-1">
        <thead>
          <tr>
            <th className="text-center" scope="col">
              No
            </th>
            <th scope="col">Nama Pelanggan</th>
            <th className="text-center" scope="col">
              No. Telp
            </th>
            <th className="text-center" scope="col">
              Alamat
            </th>
            <th className="text-center" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {pelanggan.map((item, index) => (
            <tr key={item.id}>
              <th className="text-center" scope="row">
                {index + 1}
              </th>
              <td>{item.pelanggan_name}</td>
              <td className="text-center">{item.pelanggan_hp}</td>
              <td className="text-center">{item.pelanggan_alamat}</td>
              <td className="text-center">
                <Link
                  to={`/pelanggan/edit/${item.uuid}`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PelangganList;
