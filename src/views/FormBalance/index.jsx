import React, { useEffect } from "react";
import Form from "./Form";
import Navbar from "../../components/Navbar";

import "./FormBalance.css";

const FormBalance = (props) => {
  return (
    <>
      <Navbar />
      <div className="contentTab">
        <Form initialValues={{}} handleSubmit={() => {}} />
      </div>
    </>
  );
};

export default FormBalance;
