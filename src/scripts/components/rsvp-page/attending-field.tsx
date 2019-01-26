import React from "react";

import { InviteTypeFormModel } from "./guest-fields";
import { Radio, Radios } from "./radios";

export interface GuestFieldsProps {
    inviteType: InviteTypeFormModel;
    value: AttendingFormModel;
    onChange: (value: AttendingFormModel) => void;
}

export function AttendingField({ inviteType, value, onChange }: GuestFieldsProps): JSX.Element {
    const message = inviteType === "Day"
        ? "You are invited to join us on our special day"
        : "You are invited to join us on our special day at the evening reception";
    const radios: Array<Radio<AttendingFormModel>> = inviteType === "Day"
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
        <Radios<AttendingFormModel>
            mainLabel={message}
            radios={radios}
            value={value}
            onChange={onChange} />
    );
}

export type AttendingFormModel = "NotAttending" | "Day" | "Evening";
