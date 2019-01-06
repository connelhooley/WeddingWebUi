import "../styles/main"

import "es6-shim";
import React from "react";
import ReactDom from "react-dom";

import { Router } from "./components/router";

ReactDom.render(
    <Router />,
    document.getElementById("app")
);
