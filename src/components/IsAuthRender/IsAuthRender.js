import React from "react";

const IsAuthRender = ({ state,open, setOpen, onLoginClick,referrelId }) => {
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
      <div>
        <button className="reg_btn" onClick={onLoginClick}>
          LEADERBOARD
        </button>
        <button
          className="referal_btn"
          onClick={() => {
            navigator.clipboard.writeText(referrelId);
            alert("Referel id copied to clipboard");
          }}
        >
          Click to copy referrel ID: {referrelId}
        </button>
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
