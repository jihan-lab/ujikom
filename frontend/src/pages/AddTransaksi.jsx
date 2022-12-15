import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormAddTransaksi from "../components/FormAddTransaksi";
import { getMe } from "../features/authSlice";
import Layout from "./Layout";

const AddTransaksi = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

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
      <FormAddTransaksi />
    </Layout>
  );
};

export default AddTransaksi;
