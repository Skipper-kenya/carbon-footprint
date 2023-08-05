import React, { useState } from "react";

import { GlobalContext } from "../context/GlobalStates";
import { useEffect } from "react";
import { useRef } from "react";

const FootprintsResults = ({ submitHolder, setSubmitHolder, results }) => {
  const res = submitHolder.reduce((sum, item) => {
    return sum + item.electricity + item.fuel + item.gas + item.water;
  }, 0);
  results.current = res * 0.0000002843451361;

  return (
    <div className="results-wrapper">
      <section className="results">
        <h3>
          Your Carbon Footprint Score is:{" "}
          <span style={{ color: results.current < 4 ? "green" : "red" }}>
            {results.current ? results.current : 0} t/yr
          </span>
        </h3>
      </section>
    </div>
  );
};

export default FootprintsResults;
