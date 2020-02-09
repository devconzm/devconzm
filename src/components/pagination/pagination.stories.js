import React, { useState } from "react";
import Pagination from ".";

export default {
  title: "Pagination",
  component: "Pagination"
};

const props = {
  style: {
    background: "#F1F1F1",
    padding: "20px",
    borderRadius: "3px"
  }
};

const generateList = count =>
  Array(count)
    .fill("OSCA AFRICA")
    .map((t, i) => `${t} ${i + 1}`);

export const LessThan10Pages = () => {
  const perPage = 10;
  const [{ start, end, page }, setParams] = useState({
    start: 0,
    end: perPage,
    page: 0
  });

  const list = generateList(88);

  return (
    <div {...props}>
      <ul>
        {list.slice(start, end).map(text => (
          <li key={text}>{text}</li>
        ))}
      </ul>
      <Pagination currentPage={page} onChange={setParams} totalCount={list.length} resultsPerPage={perPage} />
    </div>
  );
};

export const MoreThan10Pages = () => {
  const perPage = 10;
  const [{ start, end, page }, setParams] = useState({
    start: 0,
    end: perPage,
    page: 0
  });

  const list = generateList(238);

  return (
    <div {...props}>
      <ul>
        {list.slice(start, end).map(text => (
          <li key={text}>{text}</li>
        ))}
      </ul>
      <Pagination currentPage={page} onChange={setParams} totalCount={list.length} resultsPerPage={perPage} />
    </div>
  );
};
