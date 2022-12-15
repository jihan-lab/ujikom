import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormEditPelanggan from "../components/FormEditPelanggan";
import { getMe } from "../features/authSlice";
import Layout from "./Layout";

const EditPelanggan = () => {
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
        <FormEditPelanggan />
      </Layout>
    </div>
  );
};

export default EditPelanggan;
