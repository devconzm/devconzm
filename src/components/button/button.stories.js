import React from "react";
import Button, { buttonTypes } from ".";

export default {
  title: "Button",
  component: "Button"
};

const onClick = () => console.log("Button clicked!");
const SampleComponent = () => <span style={{ fontSize: "20px" }}>OSCAfrica!!!</span>;

export const withEmoji = () => (
  <Button onClick={onClick}>
    <span role="img" aria-label="so cool" style={{ fontSize: "20px" }}>
      😀 😎 👍 💯
    </span>
  </Button>
);

export const disabledWithEmoji = () => (
  <Button onClick={onClick} disabled>
    <span role="img" aria-label="so cool" style={{ fontSize: "20px" }}>
      😀 😎 👍 💯
    </span>
  </Button>
);

export const defaultBtnwithText = () => <Button onClick={onClick}>Bolaji</Button>;

export const buttonVariationTwo = () => (
  <Button onClick={onClick} type={buttonTypes.oc_btn_02}>
    <SampleComponent />
  </Button>
);

export const buttonVariationTwoDisabled = () => (
  <Button onClick={onClick} type={buttonTypes.oc_btn_02} disabled>
    <SampleComponent />
  </Button>
);

export const buttonVariationThree = () => (
  <Button onClick={onClick} type={buttonTypes.oc_btn_03}>
    <SampleComponent />
  </Button>
);

export const buttonVariationThreeDisabled = () => (
  <Button onClick={onClick} type={buttonTypes.oc_btn_03} disabled>
    <SampleComponent />
  </Button>
);

export const buttonVariationFour = () => (
  <Button onClick={onClick} type={buttonTypes.oc_btn_04}>
    <SampleComponent />
  </Button>
);

export const buttonVariationFourDisabed = () => (
  <Button onClick={onClick} type={buttonTypes.oc_btn_04} disabled>
    <SampleComponent />
  </Button>
);

export const buttonVariationFive = () => (
  <Button onClick={onClick} type={buttonTypes.oc_btn_05}>
    <SampleComponent />
  </Button>
);

export const buttonVariationFiveDisabled = () => (
  <Button onClick={onClick} type={buttonTypes.oc_btn_05} disabled>
    <SampleComponent />
  </Button>
);

export const buttonVariationSix = () => (
  <Button onClick={onClick} type={buttonTypes.oc_btn_06}>
    <SampleComponent />
  </Button>
);

export const buttonVariationSixDisabled = () => (
  <Button onClick={onClick} type={buttonTypes.oc_btn_06} disabled>
    <SampleComponent />
  </Button>
);

export const buttonVariationSeven = () => (
  <Button onClick={onClick} type={buttonTypes.oc_btn_07}>
    <SampleComponent />
  </Button>
);

export const buttonVariationSevenDisabled = () => (
  <Button onClick={onClick} type={buttonTypes.oc_btn_07} disabled>
    <SampleComponent />
  </Button>
);
