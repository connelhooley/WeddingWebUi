import React from "react";

import { StarterDto } from "../../utilities/service";
import { Radio, Radios } from "../shared/radios";

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
            <Radios<StarterDto>
                mainLabel="Starter"
                value={value}
                radios={radios}
                onChange={onChange} />
    );
}

export type StarterFormModel = "PrawnCocktail" | "Asparagus";
