import React from "react";

import { Age, InviteType, Starter } from "../../utilities/service";
import { Radio, RadioButtons } from "./radios";

export interface StarterFieldProps {
    age: Age;
    inviteType: InviteType;
    value: Starter;
    onChange: (value: Starter) => void;
}

export function StarterField({ age, inviteType, value, onChange }: StarterFieldProps): JSX.Element {
    if (inviteType === "Evening" || age === "Infant") {
        return <></>;
    }
    const radios: Array<Radio<Starter>> = [
        { label: "Prawn cocktail", value: "PrawnCocktail" },
        { label: "Asparagus", value: "Asparagus" },
    ];
    return (
        <label>
            Starter
            <RadioButtons<Starter>
                value={value}
                radios={radios}
                onChange={onChange} />
        </label>
    );
}
