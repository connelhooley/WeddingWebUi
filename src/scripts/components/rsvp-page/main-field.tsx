import React from "react";

import { Main } from "../../utilities/service";
import { Radio, RadioButtons } from "./radios";

export interface MainFieldProps {
    value: Main;
    onChange: (value: Main) => void;
}

export function MainField({ value, onChange }: MainFieldProps): JSX.Element {
    const radios: Array<Radio<Main>> = [
        { label: "Cod and chips", value: "CodAndChips" },
        { label: "Hunter's chicken", value: "HuntersChicken" },
    ];
    return (
        <label>
            Main
            <RadioButtons<Main>
                value={value}
                radios={radios}
                onChange={onChange} />
        </label>
    );
}
