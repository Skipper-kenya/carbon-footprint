import React from "react";
import "../styles/compareFootprint.css";
import { GlobalContext } from "../context/GlobalStates";
import { useContext } from "react";
const CompareFootprints = () => {
  const { results ,submitHolder} = useContext(GlobalContext);
  const res = submitHolder.reduce((sum, item) => {
    return sum + item.electricity + item.fuel + item.gas + item.water;
  }, 0);
  results.current = res * 0.0000002843451361;

  return (
    <div className="compare-wrapper">
      <h3>*The page is only valid after a successfull submisssion</h3>
      <div className="compareCont">
        <h3>
          {results.current < 4
            ? `You are ${4 - results.current}t/yr above the average`
            : `You are ${results.current - 4}t/yr above the limit`}
        </h3>
      </div>
    </div>
  );
};

export default CompareFootprints;
