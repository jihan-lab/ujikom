import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormAddPelanggan from "../components/FormAddPelanggan";
import { getMe } from "../features/authSlice";
import Layout from "./Layout";

const AddPelanggan = () => {
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
    <Layout>
      <FormAddPelanggan />
    </Layout>
  );
};

export default AddPelanggan;
