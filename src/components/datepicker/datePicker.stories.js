import React, { useState } from "react";
import DatePicker from ".";

export default {
  title: "DatePicker",
  component: "DatePicker"
};

export const DefaultDatePicker = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div style={{ padding: "40px" }}>
      <DatePicker selected={date} onChange={setDate} />
    </div>
  );
};
