import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTab } from "../redux/actions/actions";
import { TABS } from "../redux/actions/constraints";

const Tabs = ({ currentTab }) => {
  const dispatch = useDispatch();
  return (
    <>
      {TABS.map((tab, id) => (
        <button
          key={id}
          className="btn tabs"
          onClick={() => dispatch(toggleTab(tab))}
          style={{
            backgroundColor: tab === currentTab ? "rgb(14, 85, 7)" : "",
          }}
        >
          {tab}
        </button>
      ))}
    </>
  );
};

export default Tabs;
