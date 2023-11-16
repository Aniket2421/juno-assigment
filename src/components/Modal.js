import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ Toggelmodal }) => {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [Note, setNote] = useState("");

  const [chargeClosureFee, setChargeClosureFee] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isidsabled, setdisbled] = useState(false);

  useEffect(() => {
    if (
      email === "" ||
      reason === "" ||
      Note === "" ||
      chargeClosureFee === false ||
      selectedOption === null
    ) {
      setdisbled(true);
    } else {
      setdisbled(false);
    }
  }, [email, reason, Note, chargeClosureFee, selectedOption]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={`modal ${Toggelmodal ? "show" : "hide"}`}>
      <div className="close-account-form">
        <div className="heading">
          <h2>Closed Account</h2>
          <IoMdClose onClick={Toggelmodal} />
        </div>
        <div className="content">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="radiobtn">
          <label htmlFor="fileUAR">File UAR:</label>
          <input
            type="radio"
            value="Yes"
            checked={selectedOption === "Yes"}
            onChange={handleOptionChange}
          />
          Yes
          <input
            type="radio"
            value="No"
            checked={selectedOption === "No"}
            onChange={handleOptionChange}
          />
          No
        </div>

        <div className="reason">
          <label htmlFor="reasonNote">Reason</label>
          <textarea
            id="reasonNote"
            name="reasonNote"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>
        </div>

        <div className="notes">
          <label htmlFor="reasonNote">Note</label>
          <textarea
            id="reasonNote"
            name="reasonNote"
            value={Note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </div>

        <div className="closebtn">
          <div className="primary">
            <input
              type="radio"
              id="chargeClosureFee"
              name="chargeClosureFee"
              checked={chargeClosureFee}
              onChange={() => setChargeClosureFee(!chargeClosureFee)}
            />
            <label style={{color:"black"}} htmlFor="chargeClosureFee">Charge Closure Fee:</label>
          </div>

          <button style={{backgroundColor: isidsabled? "":"rgba(70, 67, 238, 1)",  color:"black"}}
            type="button"
            disabled={isidsabled}
            onClick={() => {
              alert("clicled")
            }}
          >
            Close Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
