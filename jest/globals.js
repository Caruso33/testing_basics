import React from "react";
import ReactDOM from "react-dom";
import polished from "polished";
import styled from "styled-components";
import propTypes from "prop-types";

global.React = React;
global.ReactDOM = ReactDOM;
global.styled = styled;
global.PropTypes = propTypes;

global.polished = {
  darken: () => {}
};
