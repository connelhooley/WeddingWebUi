import "../styles/main";

import "es6-shim";

import React from "react";
import ReactDom from "react-dom";

import { Root } from "./components/root";
import { loadIcons } from "./utilities/icons";

loadIcons();

ReactDom.render(
    <Root />,
    document.getElementById("root"));
