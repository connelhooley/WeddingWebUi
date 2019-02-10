import React from "react";
import { Map } from "./location-page/map";

// import bannerImg from "../../images/daisy-chain-ds-h.png";

export function LocationPage(): JSX.Element {
    return (
        <div id="location-page">
            <h1>Location</h1>
            <Map id="google-map" />
        </div>
    );
}
