import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function Vegetarian(): JSX.Element {
    return (
        <FontAwesomeIcon title="Suitable for vegetarians" className="vegetarian" icon={["fab", "vimeo-v"]} />
    );
}
