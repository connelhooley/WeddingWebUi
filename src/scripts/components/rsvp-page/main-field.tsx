import React from "react";

import { MainDto } from "../../utilities/service";
import { Radio, RadioButtons } from "./radios";

export interface MainFieldProps {
    value: MainDto;
    onChange: (value: MainDto) => void;
}

export function MainField({ value, onChange }: MainFieldProps): JSX.Element {
    const radios: Array<Radio<MainDto>> = [
        { label: "Cod and chips", value: "CodAndChips" },
        { label: "Hunter's chicken", value: "HuntersChicken" },
    ];
    return (
        <label>
            Main
            <RadioButtons<MainDto>
                value={value}
                radios={radios}
                onChange={onChange} />
        </label>
    );
}

export type MainFormModel = "CodAndChips" | "HuntersChicken";
