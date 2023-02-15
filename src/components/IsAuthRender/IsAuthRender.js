import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";

const IsAuthRender = ({ state, open, setOpen, onLoginClick, referrelId }) => {
  const [copied, setCopied] = useState(false);
  if (state === 1) {
    //logged in + not amba
    return (
      <div>
        <button className="reg_btn" onClick={onLoginClick}>
          LEADERBOARD
        </button>
        <button
          className="amb_btn"
          onClick={() => {
            setOpen(true);
          }}
        >
          Become Ambassador
        </button>
      </div>
    );
  } else if (state === 2) {
    //logged in + amba
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        <button className="reg_btn" onClick={onLoginClick}>
          LEADERBOARD
        </button>
        <div
          className="referal_btn"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem",
          }}
        >
          <div>
            Referral ID : <b>{referrelId}</b>
          </div>
          <CopyToClipboard text={referrelId} onCopy={() => setCopied(true)}>
            {copied ? (
              <FiCheck className="tmd_icon" />
            ) : (
              <FiCopy className="tmd_icon" />
            )}
          </CopyToClipboard>
        </div>
      </div>
    );
  } else if (state === 3) {
    //not loggedin not amba
    return (
      <button className="reg_btn" onClick={onLoginClick}>
        REGISTER
      </button>
    );
  } else {
    return null;
  }
};

export default IsAuthRender;
