import React from "react";

import { DessertDto } from "../../utilities/service";
import { Radio, RadioButtons } from "./radios";

export interface DessertFieldProps {
    value: DessertDto;
    onChange: (value: DessertDto) => void;
}

export function DessertField({ value, onChange }: DessertFieldProps): JSX.Element {
    const radios: Array<Radio<DessertDto>> = [
        { label: "Eton mess", value: "EtonMess" },
        { label: "Chocolate brownie", value: "ChocolateBrownie" },
    ];
    return (
        <label>
            Dessert
            <RadioButtons<DessertDto>
                radios={radios}
                value={value}
                onChange={onChange} />
        </label>
    );
}

export type DessertFormModel = "EtonMess" | "ChocolateBrownie";
