import React from "react";

import { StarterDto } from "../../utilities/service";
import { Pescetarian } from "../shared/pescetarian";
import { Radio, Radios } from "./radios";

export interface StarterFieldProps {
    value: StarterDto;
    firstName: string;
    disabled?: boolean;
    onChange: (value: StarterDto) => void;
}

export function StarterField({ value, onChange, firstName, disabled = false }: StarterFieldProps): JSX.Element {
    const radios: Array<Radio<StarterDto>> = [
        {
            label: (<>Prawn cocktail&nbsp;<Pescetarian /></>),
            value: "PrawnCocktail",
        },
        {
            label: "Asparagus in Parma ham",
            value: "Asparagus",
        },
    ];
    return (
            <Radios<StarterDto>
                name={`${firstName}-starter`}
                mainLabel="Starter"
                disabled={disabled}
                value={value}
                radios={radios}
                onChange={onChange} />
    );
}

export type StarterFormModel = "PrawnCocktail" | "Asparagus";
