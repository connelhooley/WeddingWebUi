import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function Pescetarian(): JSX.Element {
    return (
        <FontAwesomeIcon title="Suitable for pescetarians" className="pescetarian" icon={["fas", "fish"]} />
    );
}
