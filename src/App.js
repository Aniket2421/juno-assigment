import React, { useState } from "react";
import Modal from "./components/Modal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Pending from "./components/pending";
import Completed from "./components/completed";

const App = () => {
  const [isPending, setIsPending] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showCloseAccountForm, setShowCloseAccountForm] = useState(false);

  const Toggelmodal = () => {
    setShowCloseAccountForm(!showCloseAccountForm);
  };

  return (
    <div className="container">
      <div className="monitoring-page">
        {/* Side Navbar */}
        <div className="side-navbar">
          {/* Logo */}
          <div className="logo">LOGO HERE</div>

          {/* Navigation Links */}
          <nav>
            <a href="#">Overview</a>
            <a href="#">Onboarding</a>
            <a href="#">Monitoring</a>
            <a href="#">Flagging</a>
            <a href="#">Source of Income</a>
            <a href="#">UAR</a>
          </nav>

          {/* User Profile Section */}
          <div className="user-profile">
            <img
              src="https://placekitten.com/40/40"
              alt="User Profile"
              className="profile-picture"
            />
            <p className="user-name">John Doe</p>
            <p className="user-role">john@gmail.com</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              marginBottom: "10px",
            }}
          >
            <h1>Monitoring</h1>
          </div>

          <div className="middel-div">
            <div className="p-tag">
              <p
                className={isPending ? "active" : ""}
                onClick={() => {
                  setIsCompleted(false);
                  setIsPending(true);
                }}
              >
                Pending
              </p>
              <p
                className={`tab ${isCompleted ? "active" : ""}`}

                onClick={() => {
                  setIsPending(false);
                  setIsCompleted(true);
                }}
              >
                Completed
              </p>
            </div>
            <div>
              <button onClick={Toggelmodal}>
                <IoIosCloseCircleOutline />
                Closed Account
              </button>
            </div>
          </div>
          <div className="underline">
            <div className={`activeUnderlined ${isCompleted ? "" : "activeUnder"}`}></div>
            <div className={`activeUnderlined ${isCompleted ? "activeUnder" : ""}`}></div>
          </div>

          {showCloseAccountForm && <Modal Toggelmodal={Toggelmodal} />}

          {isPending && <Pending isPending={isPending} />}
          {isCompleted && <Completed isCompleted={isCompleted} />}
        </div>
      </div>
    </div>
  );
};

export default App;
