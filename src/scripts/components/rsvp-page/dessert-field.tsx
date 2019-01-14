import React from "react";

import { Age, Dessert, InviteType } from "../../utilities/service";
import { Radio, RadioButtons } from "./radios";

export interface DessertFieldProps {
    age: Age;
    inviteType: InviteType;
    value: Dessert;
    onChange: (value: Dessert) => void;
}

export function DessertField({ age, inviteType, value, onChange }: DessertFieldProps): JSX.Element {
    if (inviteType === "Evening" || age === "Infant") {
        return <></>;
    }
    const radios: Array<Radio<Dessert>> = [
        { label: "Eton mess", value: "EtonMess" },
        { label: "Chocolate brownie", value: "ChocolateBrownie" },
    ];
    return (
        <label>
            Dessert
            <RadioButtons<Dessert>
                radios={radios}
                value={value}
                onChange={onChange} />
        </label>
    );
}
