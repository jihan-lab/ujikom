import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PelangganList from "../components/PelangganList";
import { getMe } from "../features/authSlice";
import Layout from "./Layout";

const Pelanggan = () => {
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
        <PelangganList />
      </Layout>
    </div>
  );
};

export default Pelanggan;
