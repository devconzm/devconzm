import React from "react";
import RadioButton from ".";

export default {
  title: "RadioButton",
  component: "RadioButton"
};

const onChange = () => console.log("Value has changed");

export const defaultRadioButton = () => <RadioButton />;

export const radioButtonChecked = () => <RadioButton defaultChecked onChange={onChange}></RadioButton>;

export const disabledRadioButton = () => <RadioButton disabled style={{ border: "2px solid #96ADDC" }}></RadioButton>;

export const enabledRadioButton = () => <RadioButton enabled style={{ border: "2px solid #96ADDC" }}></RadioButton>;
