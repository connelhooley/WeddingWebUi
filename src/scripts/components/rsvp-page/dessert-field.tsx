import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { DessertDto } from "../../utilities/service";
import { Radio, Radios } from "./radios";

export interface DessertFieldProps {
    value: DessertDto;
    disabled?: boolean;
    onChange: (value: DessertDto) => void;
}

export function DessertField({ value, onChange, disabled = false }: DessertFieldProps): JSX.Element {
    const radios: Array<Radio<DessertDto>> = [
        {
            label: (<>Eton mess&nbsp;<FontAwesomeIcon className="vegetarian" icon={["fab", "vimeo-v"]} /></>),
            value: "EtonMess",
        },
        {
            label: (<>Chocolate brownie&nbsp;<FontAwesomeIcon className="vegetarian" icon={["fab", "vimeo-v"]} /></>),
            value: "ChocolateBrownie",
        },
    ];
    return (
        <Radios<DessertDto>
            mainLabel="Dessert"
            disabled={disabled}
            radios={radios}
            value={value}
            onChange={onChange} />
    );
}

export type DessertFormModel = "EtonMess" | "ChocolateBrownie";
