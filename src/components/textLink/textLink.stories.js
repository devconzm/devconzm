import React from "react";
import TextLink, { linkTypes } from ".";

export default {
  title: "TextLink",
  component: "TextLink"
};

const onClick = () => console.log("Value has changed");

export const defaultLink = () => (
  <TextLink href="" onClick={onClick}>
    {" "}
    Text Link{" "}
  </TextLink>
);

export const LinkWhite = () => (
  <TextLink href="#" onClick={onClick} type={linkTypes.oc_link_white}>
    {" "}
    Text Link{" "}
  </TextLink>
);

export const LinkDark = () => (
  <TextLink href="#" onClick={onClick} type={linkTypes.oc_link_dark}>
    {" "}
    Text Link{" "}
  </TextLink>
);
