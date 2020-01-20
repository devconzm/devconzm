import React, { useState } from "react";
import { Tabs, Tab } from ".";

export default {
  title: "Tabs",
  component: "Tabs"
};

export const SimpleTabs = () => (
  <Tabs>
    <Tab label="Home">This is the home page</Tab>
    <Tab label="About">This is the about page</Tab>
    <Tab label="Contact">This is the contact page</Tab>
    <Tab label="Other">This is the other page</Tab>
  </Tabs>
);

export const TabsWithDisabled = () => (
  <Tabs>
    <Tab label="Home">This is the home page</Tab>
    <Tab disabled label="About">
      This is the about page
    </Tab>
    <Tab label="Contact">This is the contact page</Tab>
    <Tab label="Other">This is the other page</Tab>
  </Tabs>
);

export const ControlledTab = () => {
  const [tab, setTab] = useState(3);

  const changeTab = i => () => {
    setTab((i + 1) % 5);
  };

  return (
    <Tabs selectedTab={tab}>
      <Tab onClick={changeTab(0)} label="Home">
        This is the home page
      </Tab>
      <Tab onClick={changeTab(1)} label="About">
        This is the about page
      </Tab>
      <Tab onClick={changeTab(2)} label="Contact">
        This is the contact page
      </Tab>
      <Tab onClick={changeTab(3)} label="Other">
        This is the other page
      </Tab>
      <Tab onClick={changeTab(4)} label="Another">
        This is the another page
      </Tab>
    </Tabs>
  );
};

export const CustomLabels = () => {
  const titleStyle = { fontSize: "16px", display: "block" };
  const subTitleStyle = {
    fontSize: "10px",
    color: "#888",
    textTransform: "initial"
  };
  const containerStyle = { padding: "10px" };
  return (
    <Tabs>
      <Tab
        label={
          <div style={containerStyle}>
            <div style={titleStyle}>Home</div>
            <div style={subTitleStyle}>This is the home page</div>
          </div>
        }
      >
        Home: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis, saepe architecto deleniti ex
      </Tab>
      <Tab
        label={
          <div style={containerStyle}>
            <div style={titleStyle}>About</div>
            <div style={subTitleStyle}>This is the about page</div>
          </div>
        }
      >
        About: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis, saepe architecto deleniti ex
      </Tab>
      <Tab
        label={
          <div style={containerStyle}>
            <div style={titleStyle}>Contact</div>
            <div style={subTitleStyle}>This is the contact page</div>
          </div>
        }
      >
        Contact: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis, saepe architecto deleniti ex
      </Tab>
      <Tab
        label={
          <div style={containerStyle}>
            <div style={titleStyle}>Other</div>
            <div style={subTitleStyle}>This is the other page</div>
          </div>
        }
      >
        Other: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis, saepe architecto deleniti ex
      </Tab>
    </Tabs>
  );
};
