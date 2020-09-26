import React from "react";

const carProperty = require("../../Model/carProperty.json");

function DropDownField(props) {
  const dateObject = new Date();
  const currentYear = dateObject.getFullYear();
  const carYear = [];

  for (let i = currentYear + 1; i >= 1937; i--) {
    carYear.push(i);
  }

  //   function range(startYear = 1937) {
  //     const endYear = new Date().getFullYear() + 1;
  //     const arraySize = endYear - startYear + 1;
  //     return [...Array(arraySize).keys()].map((i) => i + startYear);
  //   }

  if (props.name === "Car Year") {
    return (
      <select name={props.name} defaultValue={props.name}>
        <option value={props.name} disabled selected hidden>
          {props.name}
        </option>
        {carYear.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    );
  }

  if (props.name === "Car Model") {
    return (
      <select name={props.name} defaultValue={props.name}>
        <option value={props.name} disabled selected hidden>
          {props.name}
        </option>
        {carProperty.models.map((model) => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
      </select>
    );
  }

  if (props.name === "Car Color") {
    return (
      <select name={props.name} defaultValue={props.name}>
        <option value={props.name} disabled hidden>
          {props.name}
        </option>
        {carProperty.colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    );
  }
}

export default DropDownField;
