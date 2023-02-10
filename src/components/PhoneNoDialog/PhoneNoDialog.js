import React, { useState } from "react";
import { Dialog } from "@mui/material";
import './PhoneNoDialog.css'
import axios from "axios";
import { caBaseUrl } from "../../utils/urls";
const PhoneNoDialog = ({ open, handleClose }) => {
  const [phNo, setPhNo] = useState("");
  const finalSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${caBaseUrl}/ambassador`, {
        access_token: window.localStorage.getItem("accessToken"),
        phone_no: phNo,
      })
      .then(
        (response) => {
          console.log(response);
          if (response.status === 200) {
            handleClose();
          }
        },
        (error) => {
          console.log(error);
          alert(error.response.data.error);
        }
      );
  };
  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        PaperProps={{
          sx: { width: "100%", borderRadius: 5, m: 2, minHeight: "60vh" },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="phno__dialog_container">
        <h1>Register to become Ambassador of Excel in your campus</h1>
        <form className="phone_dialog_form" onSubmit={finalSubmit}>
          <input
            type="text"
            className="phone__no_input"
            placeholder="Enter your mobile number"
            value={phNo}
            onChange={(e) => {
              setPhNo(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </form>
        </div>
      </Dialog>
    </div>
  );
};

export default PhoneNoDialog;