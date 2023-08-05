import React, { useContext } from "react";
import "../styles/calculateFootprint.css";

import { GlobalContext } from "../context/GlobalStates";
import FootprintsResults from "./FootprintsResults";
const CalculateFootprints = () => {
  const {
    selectStates,
    setSelectStates,
    inputStates,
    setInputStates,
    radioStates,
    setRadioStates,
    submitHolder,
    setSubmitHolder,
    results,
  } = useContext(GlobalContext);

  const handleSelectChange = (e, name) => {
    const { value } = e.target;

    setSelectStates((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputsChange = (e, name) => {
    const { value } = e.target;

    setInputStates((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e) => {
    setRadioStates(e.target.value);
  };
  const executeFootprint = (e) => {
    e.preventDefault();
    const { rooms, members, residence, heating, airConditioner } = selectStates;

    const { gas, electricity, water, fuel } = inputStates;

    const submitHolderCopy = [...submitHolder];
    const submitArr = {
      rooms,
      members,
      residence,
      heating,
      airConditioner,
      gas,
      electricity,
      water,
      radioStates,
      fuel,
    };

    const submitCopy = { ...submitArr };

    submitCopy["gas"] = gas * 105 * rooms * members;
    submitCopy["fuel"] = fuel * 113 * rooms * members;
    submitCopy["water"] = water * 87 * rooms * members;
    submitCopy["electricity"] = electricity * 105 * members * rooms;

    submitHolderCopy.push(submitCopy);
    setSubmitHolder(submitHolderCopy);
  };
  return (
    <div className="calculate-wrapper">
      <h3>Complete the form below to calculate your carbon-footprints.</h3>

      <fieldset>
        <legend>Calculate Footprint</legend>
        <form onSubmit={executeFootprint}>
          <div className="selects">
            <div className="select-opt">
              <label>No of Rooms</label>
              <select
                value={selectStates.rooms}
                onChange={(e) => handleSelectChange(e, "rooms")}
              >
                <GenerateOptions value="1" user="1 Room" />
                <GenerateOptions value="2" user="2 Rooms" />
                <GenerateOptions value="3" user="3 Roos" />
                <GenerateOptions value="4" user="4 Rooms" />
                <GenerateOptions value="5" user="5+ Rooms" />
              </select>
            </div>
            <div className="select-opt">
              <label>No of Members:</label>
              <select
                value={selectStates.members}
                onChange={(e) => handleSelectChange(e, "members")}
              >
                <GenerateOptions value="1" user="1" />
                <GenerateOptions value="2" user="2" />
                <GenerateOptions value="3" user="3" />
                <GenerateOptions value="4" user="4" />
                <GenerateOptions value="5" user="5" />
                <GenerateOptions value="6" user="6" />
                <GenerateOptions value="7" user="7" />
                <GenerateOptions value="8" user="8" />
                <GenerateOptions value="9" user="9" />
                <GenerateOptions value="10" user="10" />
              </select>
            </div>

            <div className="select-opt">
              <label>Type of Residence:</label>
              <select
                value={selectStates.residence}
                onChange={(e) => handleSelectChange(e, "residence")}
              >
                <GenerateOptions value="flat" user="Flat" />
                <GenerateOptions value="apartment" user="Apartment" />
                {/* <GenerateOptions value="townhouse" user="Townhouse" />
                <GenerateOptions value="house" user="House" />
                <GenerateOptions value="villa" user="Villa" /> */}
                <GenerateOptions value="other" user="Other" />
              </select>
            </div>
            <div className="select-opt">
              <label>Heating Source:</label>
              <select
                value={selectStates.heating}
                onChange={(e) => handleSelectChange(e, "heating")}
              >
                <GenerateOptions value="central-heate" user="Central Heater" />
                <GenerateOptions value="direct-heater" user="Direct Heater" />
                <GenerateOptions value="fireplaces" user="Fireplaces" />
                <GenerateOptions value="other" user="Other" />
              </select>
            </div>
            <div className="select-opt">
              <label>Do you have Air Conditioner?</label>
              <select
                value={selectStates.airConditioner}
                onChange={(e) => handleSelectChange(e, "airConditioner")}
              >
                <GenerateOptions value="yes" user="Yes" />
                <GenerateOptions value="no" user="No" />
              </select>
            </div>
          </div>
          <div className="inputs">
            <div className="input">
              <label>Your monthly gas usage in kgs/galons:</label>
              <input
                type="number"
                value={inputStates.gas}
                onChange={(e) => handleInputsChange(e, "gas")}
              />
            </div>
            <div className="input">
              <label>Your monthly electricity wage in kwh:</label>
              <input
                type="number"
                value={inputStates.electricity}
                onChange={(e) => handleInputsChange(e, "electricity")}
              />
            </div>
            <div className="input">
              <label>Your monthly water usage in kwh:</label>
              <input
                type="number"
                value={inputStates.water}
                onChange={(e) => handleInputsChange(e, "water")}
              />
            </div>
          </div>{" "}
          <div className="radios">
            <p>how many cars are owned by your household?</p>
            <label>0</label>
            <input
              type="radio"
              name="cars"
              value="0"
              onChange={handleRadioChange}
              checked={radioStates === "0"}
            />
            <label>1</label>
            <input
              type="radio"
              name="cars"
              value="1"
              onChange={handleRadioChange}
              checked={radioStates === "1"}
            />
            <label>2</label>
            <input
              type="radio"
              name="cars"
              value="2"
              onChange={handleRadioChange}
              checked={radioStates === "2"}
            />
            <label>3</label>
            <input
              type="radio"
              name="cars"
              value="3"
              onChange={handleRadioChange}
              checked={radioStates === "3"}
            />
            <label>4</label>
            <input
              type="radio"
              name="cars"
              value="4"
              onChange={handleRadioChange}
              checked={radioStates === "4"}
            />
          </div>
          <div className="lastInput">
            <label>What's your average fuel consumption in kwh</label>
            <input
              type="number"
              value={inputStates.fuel}
              onChange={(e) => handleInputsChange(e, "fuel")}
            />
          </div>
          <button>calculate</button>
        </form>
      </fieldset>

      <FootprintsResults
        results={results}
        submitHolder={submitHolder}
        setSubmitHolder={setSubmitHolder}
        selectStates={selectStates}
      />
    </div>
  );
};

const GenerateOptions = (props) => {
  return <option value={props.value}>{props.user}</option>;
};

const GenerateLabels = (props) => {
  return <label>{props.label}</label>;
};

export default CalculateFootprints;
