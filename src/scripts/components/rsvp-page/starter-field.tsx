import React from "react";

import { StarterDto } from "../../utilities/service";
import { Radio, RadioButtons } from "./radios";

export interface StarterFieldProps {
    value: StarterDto;
    onChange: (value: StarterDto) => void;
}

export function StarterField({ value, onChange }: StarterFieldProps): JSX.Element {
    const radios: Array<Radio<StarterDto>> = [
        { label: "Prawn cocktail", value: "PrawnCocktail" },
        { label: "Asparagus", value: "Asparagus" },
    ];
    return (
        <label>
            Starter
            <RadioButtons<StarterDto>
                value={value}
                radios={radios}
                onChange={onChange} />
        </label>
    );
}

export type StarterFormModel = "PrawnCocktail" | "Asparagus";
