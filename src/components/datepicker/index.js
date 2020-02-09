import React from "react";
import Picker from "react-datepicker";

import "react-datepicker/dist/react-datepicker-cssmodules.css";
import classes from "./style.module.css";
import calendarIcon from "./calendar-icon.svg";
import { TextBox } from "../textBox";

const isSunday = date => date.getDay() === 0;

const isToday = date => date.toDateString() === new Date().toDateString();

const CustomInput = ({ ...props }) => (
  <div>
    <object data={calendarIcon} className={classes.calendarIcon}>
      calendar icon
    </object>
    <TextBox {...props} />
  </div>
);

const DatePicker = ({ ...props }) => (
  <Picker
    {...props}
    showPopperArrow={false}
    customInput={<CustomInput />}
    popperClassName={classes.popper}
    dateFormat="dd/MM/yyyy"
    dayClassName={day => (isSunday(day) ? classes.sunday : isToday(day) ? classes.today : classes.day)}
    wrapperClassName={classes.dateWrapper}
  />
);

export default DatePicker;
