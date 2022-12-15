import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import Layout from "./Layout";

const Pakaian = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

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
        <div className="container">
          <h1>History Pakaian</h1>
          <form className="mt-2">
            <div className="mb-3">
              <label className="form-label">Jenis</label>
              <input type="text" className="form-control" id="jenis" />
            </div>
            <div className="mb-3">
              <label htmlFor="jumlah" className="form-label">
                Jumlah
              </label>
              <input type="number" className="form-control" id="jumlah" />
            </div>
            <button type="submit" className="btn btn-primary">
              Lanjut
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Pakaian;
