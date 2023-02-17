import React, { useEffect, useState } from "react";
import { Dialog } from "@mui/material";
import "./PhoneNoDialog.css";
import axios from "axios";
import { caBaseUrl } from "../../utils/urls";
import Aos from "aos";
const PhoneNoDialog = ({ open, handleClose }) => {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);
  const [phNo, setPhNo] = useState("");
  const finalSubmit = (e) => {
    e.preventDefault();
    if (phNo.length === 10) {
      axios
        .post(`${caBaseUrl}/ambassador`, {
          access_token: window.localStorage.getItem("accessToken"),
          phone_no: phNo,
        })
        .then(
          (response) => {
            // console.log(response);
            if (response.status === 201) {
              alert(
                "Successfully registered as Excel 2022 campus ambassador.."
              );
              handleClose();
              window.location.reload();
            }
          },
          (error) => {
            // console.log(error);
            alert(error.response.data.error);
            handleClose();
          }
        );
    } else {
      alert("Please check the entered Mobile number value");
    }
  };
  return (
    <div data-aos="zoom-in">
      <Dialog
        fullWidth={true}
        disableScrollLock={true}
        maxWidth={"md"}
        PaperProps={{
          sx: { width: "100%", borderRadius: 5, m: 2 },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="phno__dialog_container">
          <h1>Add phone number</h1>
          <form className="phone_dialog_form" onSubmit={finalSubmit}>
            <input
              type="number"
              className="phone__no_input"
              placeholder=""
              value={phNo}
              onChange={(e) => {
                setPhNo(e.target.value);
              }}
            />
            <button type="submit" className="submit_btn">
              Submit
            </button>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default PhoneNoDialog;
