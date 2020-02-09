import React, { useState } from "react";
import SearchBar from ".";

export default {
  title: "SearchBar",
  component: "SearchBar"
};

const style = {
  container: {
    padding: "5px 10px",
    fontFamily: "Avenir"
  },
  head: {
    color: "#444"
  },
  p: {
    color: "#CCC",
    margin: "0px"
  }
};

const options = [
  { label: "Ekene Ashinze", value: "ashinzekene" },
  { label: "Bolaji Ayodeji", value: "BolajiAyodeji" },
  { label: "Peace Ojemeh", value: "perriefidelis" }
];

export const SearchBarComponent = () => {
  const [value, setValue] = useState("ashinzekene");

  return <SearchBar options={options} value={value} onChange={setValue} />;
};

export const SearchBarComponentWithLabel = () => {
  const [value, setValue] = useState("ashinzekene");

  return <SearchBar options={options} value={value} label="Contributors" onChange={setValue} />;
};

export const SearchBarComponentCustomRender = () => {
  const [value, setValue] = useState("ashinzekene");

  return (
    <SearchBar
      options={options}
      value={value}
      onChange={setValue}
      renderItem={(option, i) => (
        <div style={style.container}>
          <div style={style.head}>{option.label}</div>
          <p style={style.p}>{option.value}</p>
        </div>
      )}
    />
  );
};
