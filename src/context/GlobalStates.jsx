import React, { createContext, useState, useRef } from "react";

export const GlobalContext = createContext(null);

const GlobalStates = (props) => {
  let test;
  const [selectStates, setSelectStates] = useState({
    rooms: 1,
    members: 1,
    residence: "flat",
    heating: "central-heater",
    airConditioner: "yes",
  });

  const [inputStates, setInputStates] = useState({
    gas: 1,
    electricity: 1,
    water: 1,
    fuel: 1,
  });

  const [radioStates, setRadioStates] = useState("");
  let results = useRef(0);
  const [submitHolder, setSubmitHolder] = useState([]);

  const values = {
    results,
    selectStates,
    setSelectStates,
    inputStates,
    setInputStates,
    radioStates,
    setRadioStates,
    submitHolder,
    setSubmitHolder,
  };

  return (
    <GlobalContext.Provider value={values}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalStates;
