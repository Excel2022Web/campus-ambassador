import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import Lottie from "react-lottie";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import mascot_data from "../../assets/json/mascot.json";
import "./Main.css";
import AccountHandler from "../../auth/accountHandler";
import PhoneNoDialog from "../PhoneNoDialog/PhoneNoDialog";
import { accountBackendUrl } from "../../utils/urls";
import axios from "axios";
function Main() {
  const [mascotSize, setMascotSize] = useState();
  const [open, setOpen] = useState(false);
  const size = useScreenWidth();
  const[isAmbassador,setIsAmbassador]=useState(false)
  const[referrelId,setReferrelId]=useState()
  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mascot_data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if (AccountHandler.isUserLoggedIn()) {
      axios
        .get(`${accountBackendUrl}/profile`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "accessToken"
            )}`,
          },
        })
        .then(
          (response) => {
            // console.log("Navpro:",response)
            // console.log(response.data.ambassador);
            if(response.data.ambassador){
              setIsAmbassador(true);
              setReferrelId(response.data.ambassador.userId);
            }
            else{
              setIsAmbassador(false);
            }

          },
          (error) => {
            // console.log(error);
          }
        );
    }
  }, []);
  useEffect(() => {
    if (size > 600) {
      setMascotSize(350);
    } else if (size > 500) {
      setMascotSize(350);
    } else if (size > 400) {
      setMascotSize(300);
    } else {
      setMascotSize(200);
    }
  }, [size]);

  const onLoginClick = () => {
    if (!AccountHandler.isUserLoggedIn()) {
      AccountHandler.logInUser();
    } else {
      navigate("/leaderboard");
    }
  };

  // eslint-disable-next-line
  const onLogoutClick = () => {
    AccountHandler.logOutUser();
  };

  return (
    <div className="home_sec" id="home">
      <PhoneNoDialog open={open} handleClose={handleClose} />
      <div className="home">
        <Lottie
          options={defaultOptions}
          height={mascotSize}
          width={mascotSize}
          style={{ margin: 0 }}
        />
        <div className="home_title">
          <div className="holo-container" data-aos="zoom-in">
            <div className="holo holo-1">
              <div className="text t-left">Campus</div>
              <div className="text t-right">Campus</div>
              <div className="text">Campus</div>
            </div>
            <div className="holo holo-2">
              <div className="text t-left">Ambassador</div>
              <div className="text t-right">Ambassador</div>
              <div className="text">Ambassador</div>
            </div>
          </div>
        </div>
      </div>

      
      {AccountHandler.isUserLoggedIn()?
      <div>
        {isAmbassador?
        <div>
          <button className="reg_btn" onClick={onLoginClick}>
            LEADERBOARD
          </button>
          <button className="referal_btn" onClick={()=>{
          navigator.clipboard.writeText(referrelId);
          alert('Referel id copied to clipboard');
        }}>Click to copy referrel ID: {referrelId}</button>
        </div>:
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
          </div>}
      </div>
      :
      (
        <button className="reg_btn" onClick={onLoginClick}>
            REGISTER
          </button>
      )
      }


      {/* new code */}
      <div className="features">
        <div className="home_highlights" data-aos="fade-up">
          <div className="count_circle">
            <h3>
              <CountUp
                end={8}
                duration={2}
                enableScrollSpy={true}
                preserveValue={true}
              />
              K+
            </h3>
          </div>
          <div className="features_cont">
            <h4>FOOTFALL </h4>
          </div>
          <div className="feature_foot" />
        </div>

        <div className="home_highlights" data-aos="fade-up">
          <div className="count_circle">
            <h3>
              <CountUp
                end={40}
                duration={2}
                enableScrollSpy={true}
                preserveValue={true}
              />
              +
            </h3>
          </div>
          <div className="features_cont">
            <h4>EVENTS </h4>
          </div>
          <div className="feature_foot" />
        </div>
        <div className="home_highlights" data-aos="fade-up">
          <div className="count_circle">
            <h3>
              <CountUp
                end={4}
                duration={2}
                enableScrollSpy={true}
                preserveValue={true}
              />
              L+
            </h3>
          </div>
          <div className="features_cont">
            <h4>PRIZE POOL </h4>
          </div>
          <div className="feature_foot" />
        </div>
      </div>
    </div>
  );
}

export default Main;
