import React from "react";

import { AgeDto } from "../../utilities/service";
import { AttendingFormModel } from "./attending-field";

export interface DietaryRequirementFieldProps {
    age: AgeDto;
    attending: AttendingFormModel;
    value: string;
    onChange: (value: string) => void;
}

export function DietaryRequirementField(
    { age, attending, value, onChange }: DietaryRequirementFieldProps,
): JSX.Element {
    if (attending === null || attending === "NotAttending" || age === "Infant") {
        return <></>;
    }
    return (
        <div className="guest-field">
            <label>
                Dietary requirements <span className="hint small">(if required)</span>
                <input
                    type="text"
                    maxLength={280}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    data-lpignore="true"/>
            </label>
        </div>
    );
}
