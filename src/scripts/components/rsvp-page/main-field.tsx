import React from "react";

import { Age, InviteType, Main } from "../../utilities/service";
import { Radio, RadioButtons } from "./radios";

export interface MainFieldProps {
    age: Age;
    inviteType: InviteType;
    value: Main;
    onChange: (value: Main) => void;
}

export function MainField({ age, inviteType, value, onChange }: MainFieldProps): JSX.Element {
    if (inviteType === "Evening" || age === "Infant") {
        return <></>;
    }
    const radios: Array<Radio<Main>> = [
        { label: "Cod and chips", value: "CodAndChips" },
        { label: "Hunter's chicken", value: "HuntersChicken" },
    ];
    return (
        <label>
            Main
            <RadioButtons<Main>
                value={value}
                radios={radios}
                onChange={onChange} />
        </label>
    );
}
