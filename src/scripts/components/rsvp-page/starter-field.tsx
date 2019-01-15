import React from "react";

import { Starter } from "../../utilities/service";
import { Radio, RadioButtons } from "./radios";

export interface StarterFieldProps {
    value: Starter;
    onChange: (value: Starter) => void;
}

export function StarterField({ value, onChange }: StarterFieldProps): JSX.Element {
    const radios: Array<Radio<Starter>> = [
        { label: "Prawn cocktail", value: "PrawnCocktail" },
        { label: "Asparagus", value: "Asparagus" },
    ];
    return (
        <label>
            Starter
            <RadioButtons<Starter>
                value={value}
                radios={radios}
                onChange={onChange} />
        </label>
    );
}
