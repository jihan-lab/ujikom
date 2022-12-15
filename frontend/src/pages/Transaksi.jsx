import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TransaksiList from "../components/TransaksiList";
import { getMe } from "../features/authSlice";
import Layout from "./Layout";

const Transaksi = () => {
  const [tgl, setTgl] = useState("");
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
        <TransaksiList />
      </Layout>
    </div>
  );
};

export default Transaksi;
