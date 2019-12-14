import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import propTypes from "prop-types";
import ReactRedux from "react-redux";

global.React = React;
global.ReactDOM = ReactDOM;
global.styled = styled;
global.PropTypes = propTypes;
global.ReactRedux = {
  useSelector: () => {
    return { counter: 0 };
  },
  useDispatch: () => {}
};
global.polished = {
  darken: () => {}
};
