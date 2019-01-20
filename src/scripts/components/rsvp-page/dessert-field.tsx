import React from "react";

import { DessertDto } from "../../utilities/service";
import { Radio, Radios } from "../shared/radios";

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
        <Radios<DessertDto>
            mainLabel="Dessert"
            radios={radios}
            value={value}
            onChange={onChange} />
    );
}

export type DessertFormModel = "EtonMess" | "ChocolateBrownie";
