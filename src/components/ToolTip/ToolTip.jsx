import React from "react";
import PropTypes from "prop-types";
import scss from "./ToolTip.module.scss";

const Tooltip = ({ text }) => {
  return <div className={scss.tooltip}>{text}</div>;
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tooltip;
