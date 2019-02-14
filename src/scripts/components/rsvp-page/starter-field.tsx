import React from "react";

import { StarterDto } from "../../utilities/service";
import { Pescetarian } from "../shared/pescetarian";
import { Vegetarian } from "../shared/vegetarian";
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
            label: "None",
            value: "None",
        },
        {
            label: (<>Prawn cocktail&nbsp;<Pescetarian /></>),
            value: "PrawnCocktail",
        },
        {
            label: "Asparagus in Parma ham",
            value: "Asparagus",
        },
        {
            label: (<>Asparagus in goat's cheese tart&nbsp;<Vegetarian /></>),
            value: "AsparagusVeg",
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

export type StarterFormModel = "PrawnCocktail" | "Asparagus" | "AsparagusVeg"| "None";
