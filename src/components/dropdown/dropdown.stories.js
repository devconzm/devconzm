import React, { useState } from "react";
import DropDown from ".";

export default {
  title: "Dropdown",
  component: "Dropdown"
};

const options = [
  { label: "Ekene Ashinze", value: "ashinzekene" },
  { label: "Bolaji Ayodeji", value: "BolajiAyodeji" },
  { label: "Peace Ojemeh", value: "perriefidelis" }
];

export const DropdownComponent = () => {
  const [value, setValue] = useState("ashinzekene");

  return <DropDown options={options} value={value} onChange={setValue} />;
};
