import React from "react";

import { Dessert } from "../../utilities/service";
import { Radio, RadioButtons } from "./radios";

export interface DessertFieldProps {
    value: Dessert;
    onChange: (value: Dessert) => void;
}

export function DessertField({ value, onChange }: DessertFieldProps): JSX.Element {
    const radios: Array<Radio<Dessert>> = [
        { label: "Eton mess", value: "EtonMess" },
        { label: "Chocolate brownie", value: "ChocolateBrownie" },
    ];
    return (
        <label>
            Dessert
            <RadioButtons<Dessert>
                radios={radios}
                value={value}
                onChange={onChange} />
        </label>
    );
}
