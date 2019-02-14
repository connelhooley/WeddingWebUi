import React from "react";

import { DessertDto } from "../../utilities/service";
import { Vegetarian } from "../shared/vegetarian";
import { Radio, Radios } from "./radios";

export interface DessertFieldProps {
    value: DessertDto;
    firstName: string;
    disabled?: boolean;
    onChange: (value: DessertDto) => void;
}

export function DessertField({ value, onChange, firstName, disabled = false }: DessertFieldProps): JSX.Element {
    const radios: Array<Radio<DessertDto>> = [
        {
            label: "None",
            value: "None",
        },
        {
            label: (<>Eton mess&nbsp;<Vegetarian /></>),
            value: "EtonMess",
        },
        {
            label: (<>Chocolate brownie&nbsp;<Vegetarian /></>),
            value: "ChocolateBrownie",
        },
    ];
    return (
        <Radios<DessertDto>
            name={`${firstName}-dessert`}
            mainLabel="Dessert"
            disabled={disabled}
            radios={radios}
            value={value}
            onChange={onChange} />
    );
}

export type DessertFormModel = "EtonMess" | "ChocolateBrownie" | "None";
