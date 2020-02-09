import React, { Children, useEffect, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import classes from "./style.module.css";

const noob = () => {};

const Tabs = props => {
  const [selectedTab, setSelectedTab] = useState(props.selectedTab || props.defaultSelectedTab);

  useEffect(() => {
    if (typeof props.selectedTab !== "number") return;
    setSelectedTab(props.selectedTab);
  }, [props.selectedTab]);

  const handleClick = selectedTab => e => {
    if (props.selectedTab !== undefined) return;
    props.onChangeTab(selectedTab);
    setSelectedTab(selectedTab);
  };

  const renderTabLabels = () =>
    Children.map(props.children, (child, index) => {
      const isDisabled = child.props.disabled;
      return (
        <div
          className={classNames(classes.tabsTab, "py-4", {
            [classes.selectedTab]: index === selectedTab
          })}
          role={isDisabled ? undefined : "tab"}
          tabIndex={isDisabled ? undefined : 0}
          onKeyUp={isDisabled ? noob : handleClick(index)}
          onClick={isDisabled ? noob : handleClick(index)}
          key={index}
          onPointerDown={isDisabled ? noob : handleClick(index)}
        >
          {child}
          <div className={classes.tabIndicator} />
        </div>
      );
    });

  return (
    <div className="tab" style={props.style}>
      <div role="tablist" className={classes.tabList}>
        {renderTabLabels()}
      </div>
      <div role="tabpanel">{Children.toArray(props.children)[selectedTab].props.children}</div>
    </div>
  );
};

Tabs.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  defaultSelectedTab: PropTypes.number,
  selectedTab: PropTypes.number,
  onChangeTab: PropTypes.func
};

Tabs.defaultProps = {
  defaultSelectedTab: 0,
  onChangeTab: noob,
  selectedTab: undefined,
  style: {}
};

export default Tabs;
