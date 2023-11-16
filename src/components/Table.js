import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Table = ({ pending, searchterm, completed, isPending, isCompleted }) => {
  const [data, setData] = useState(isPending ? pending : completed);
  const [fiterddata, setfilerteddata] = useState(data);
  const [sortDirection, setSortDirection] = useState({
    dateAsc: false,
    dateDes: false,
  });

  useEffect(() => {
    //console.log(data);
    if (searchterm === "") {
      setfilerteddata(data);
    } else {
      const filteredArray = data.filter((item) =>
        item.User.toLowerCase().includes(searchterm.toLowerCase())
      );
      setfilerteddata(filteredArray);
    }
  }, [data, searchterm]);

  const handelsortupper = () => {
    const sortedArray = [...data].sort((a, b) => {
      const riskLevels = { High: 1, Medium: 2, Low: 3 };
      return riskLevels[a["Risk Level"]] - riskLevels[b["Risk Level"]];
    });
    setfilerteddata(sortedArray);
  };

  const handelsortlower = () => {
    const sortedArray = [...data].sort((a, b) => {
      const riskLevels = { High: 1, Medium: 2, Low: 3 };
      return riskLevels[b["Risk Level"]] - riskLevels[a["Risk Level"]];
    });
    setfilerteddata(sortedArray);
  };

  const sortbydayace = () => {
    const sortedArray = [...data].sort((a, b) => {
      const queueA = parseInt(a["In Queue For"]);
      const queueB = parseInt(b["In Queue For"]);

      return queueA - queueB;
    });
    setfilerteddata(sortedArray);
  };

  const sortbydaydes = () => {
    const sortedArray = [...data].sort((a, b) => {
      const queueA = parseInt(a["In Queue For"]);
      const queueB = parseInt(b["In Queue For"]);

      return queueB - queueA;
    });
    setfilerteddata(sortedArray);
  };

  const sortbydateacs = () => {
    const sortedArray = [...data].sort((a, b) => {
      const dateA = new Date(a["Data Added On"]);
      const dateB = new Date(b["Data Added On"]);

      return dateA - dateB;
    });
    setfilerteddata(sortedArray);
    setSortDirection({ dateAsc: true, dateDes: false });
  };

  const sortbydatedes = () => {
    const sortedArray = [...data].sort((a, b) => {
      const dateA = new Date(a["Data Added On"]);
      const dateB = new Date(b["Data Added On"]);

      return dateB - dateA;
    });
    setfilerteddata(sortedArray);
    setSortDirection({ dateAsc: false, dateDes: true });
  };
  function getColorForRiskLevel(riskLevel) {
    switch (riskLevel) {
      case "High":
        return "red";
      case "Medium":
        return "orange";
      case "Low":
        return "green";
      default:
        return "black"; // Default color if the risk level is not recognized
    }
  }

  return (
    <div className="table-div">
      <table className="data-table">
        <thead>
          <tr>
            <th>User</th>

            <th>
              <div style={{ display: "flex", gap: "10px" }}>
                Risk Level
                <div className="arrows">
                  <MdKeyboardArrowUp on onClick={handelsortupper} />
                  <MdKeyboardArrowDown onClick={handelsortlower} />
                </div>
              </div>
            </th>
            <th>{isCompleted ? "Action Reason" : "Trigger Reason"}</th>
            <th>
              <div style={{ display: "flex", gap: "10px" }}>
                {isCompleted ? "Time To Close" : " In Queue For"}

                <div className="arrows">
                  <MdKeyboardArrowUp onClick={sortbydayace} />
                  <MdKeyboardArrowDown onClick={sortbydaydes} />
                </div>
              </div>
            </th>
            <th>
              <div style={{ display: "flex", gap: "10px" }}>
                Data Added On
                <div className="arrows">
                  <MdKeyboardArrowUp onClick={sortbydateacs} />
                  <MdKeyboardArrowDown onClick={sortbydatedes} />
                </div>
              </div>
            </th>
            <th>
              {isCompleted ? "Action Taken By" : "Previously Reviewed"}
            </th>
          </tr>
        </thead>
        <tbody style={{ height: "100px" }}>
          {fiterddata.map((item, index) => (
            <tr key={index}>
              <td className="info">
                <div>
                  <p className="name">{item.User} </p>
                  <p className="mail">{item.email}</p>
                </div>
                <FaExternalLinkAlt style={{ color: "rgba(70, 67, 238, 1)" }} />
              </td>
              <td style={{ color: getColorForRiskLevel(item["Risk Level"]) }}>
                <GoDotFill /> {item["Risk Level"]}
              </td>{" "}
              <td>
                {isPending ? item["Trigger Reason"] : item["Action Reason"]}
              </td>
              <td>
                {isPending ? item["In Queue For"] : item["Time To Close"]}
              </td>
              <td style={{color: "rgba(119, 118, 118, 1)"}}>{item["Data Added On"]}</td>
              <td>
                {isPending ? (
                   <>
                   <p>{item["Previously Reviewed"]}</p>
                   <p style={{color: "rgba(119, 118, 118, 1)"}}>{item["complete date"]}</p>
                 </>
                  
                ) : (
                  <>
                    <p>{item["Action Taken By"]}</p>
                    <p>{item["mail"]}</p>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
