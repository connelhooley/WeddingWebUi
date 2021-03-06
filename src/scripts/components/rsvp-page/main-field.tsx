import React from "react";

import { MainDto } from "../../utilities/service";
import { Pescetarian } from "../shared/pescetarian";
import { Vegetarian } from "../shared/vegetarian";
import { Radio, Radios } from "./radios";

export interface MainFieldProps {
    value: MainDto;
    firstName: string;
    disabled?: boolean;
    onChange: (value: MainDto) => void;
}

export function MainField({ value, onChange, firstName, disabled = false }: MainFieldProps): JSX.Element {
    const radios: Array<Radio<MainDto>> = [
        {
            label: (<>Cod and chips&nbsp;<Pescetarian /></>),
            value: "CodAndChips",
        },
        {
            label: "Hunter's chicken",
            value: "HuntersChicken",
        },
        {
            label: (<>Stuffed courgette&nbsp;<Vegetarian /></>),
            value: "StuffedCourgette",
        },
    ];
    return (
            <Radios<MainDto>
            name={`${firstName}-main`}
                mainLabel="Main"
                disabled={disabled}
                value={value}
                radios={radios}
                onChange={onChange} />
    );
}

export type MainFormModel = "CodAndChips" | "HuntersChicken" | "StuffedCourgette";
