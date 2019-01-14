import React from "react";

import { Attending, InviteType } from "../../utilities/service";
import { Radio, RadioButtons } from "./radios";

export interface GuestFieldsProps {
    inviteType: InviteType;
    value: Attending;
    onChange: (value: Attending) => void;
}

export function AttendingField({ inviteType, value, onChange }: GuestFieldsProps): JSX.Element {
    const message = inviteType === "Day"
        ? "You are invited to join us on our special day"
        : "You are invited to join us on our special day at the evening reception";
    const radios: Array<Radio<Attending>> = inviteType === "Day"
        ?
            [
                { label: "Attending day & evening", value: "Day" },
                { label: "Attending evening only", value: "Evening" },
                { label: "Not attending", value: "NotAttending" },
            ]
        :
            [
                { label: "Attending", value: "Evening" },
                { label: "Not attending", value: "NotAttending" },
            ];
    return (
        <label>
            {message}
            <RadioButtons<Attending>
                radios={radios}
                value={value}
                onChange={onChange} />
        </label>
    );
}
