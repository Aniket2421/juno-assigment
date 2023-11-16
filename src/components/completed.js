import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Table from './Table';
import { completed } from '../jsonData';


const Completed = ({isCompleted}) => {
    const [searchterm, setSerachtrem] = useState("");
    const [showdiv, setShowdiv] = useState(true);

    const handelshowdiv = () => {
        setShowdiv(!showdiv)
    }
  return (
    <div className='completed-div'>
        <div className="low-div">
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="search"
            onChange={(e) => setSerachtrem(e.target.value)}
          />

          <div className="icon">
            <CiSearch />
          </div>
        </div>

        <button style={{ display: "flex", alignItems: "center" ,justifyContent: "center" }}>
          trigger reason <RiArrowDropDownLine onClick={handelshowdiv} />
        </button>
        <div className={`flag ${showdiv ? "hide" : " "}`}>
          <p>Hard flag</p>
          <p>Temp flag</p>
          <p> Restricted unflag</p>
          <p> Un flag</p>
          <p>Reviewed</p>
        </div>
        <button>risk level</button>
      </div>

      <Table completed={completed} searchterm={searchterm}  isCompleted={isCompleted}/>

    </div>
  )
}

export default Completed