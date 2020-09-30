import React, { useState } from "react";
import { useEffect } from "react";

import style from "./DropDownField.module.css";

const carProperty = require("../../Model/carProperty.json");
const plateProperty = require("../../Model/plateProperty.json");

function DropDownField(props) {
  const [data, setData] = useState([]);

  const dateObject = new Date();
  const currentYear = dateObject.getFullYear();
  const carYear = [];

  for (let i = currentYear + 1; i >= 1937; i--) {
    carYear.push(i);
  }

  const handleFormChange = (e) => {
    props.setFormData({
      ...props.formData,
      [props.keyName]: e.target.value,
    });
  };

  useEffect(() => {
    switch (props.name) {
      case "Car Model": {
        setData(carProperty.models);
        break;
      }
      case "Car Color": {
        setData(carProperty.colors);
        break;
      }
      case "Car Year": {
        setData(carYear);
        break;
      }
      case "Plate Emirate": {
        setData(plateProperty.plateEmirate);
        break;
      }
      case "Plate Code": {
        if (props.formData.plateEmirate) {
          setData(plateProperty.plateCode[props.formData.plateEmirate]);
        }
        break;
      }
      default: {
        setData([]);
        break;
      }
    }
  }, [setData, props.formData]);

  return (
    <>
      <select
        className={style.dropDownFieldSelect}
        name={props.name}
        defaultValue={props.name}
        onChange={(e) => handleFormChange(e)}
        className={style.dropDownField}
      >
        <option defaultValue={props.name} disabled hidden>
          {props.name}
        </option>
        {data.map((entry) => (
          <option key={entry} value={entry}>
            {entry}
          </option>
        ))}
      </select>
    </>
  );
}

export default DropDownField;
