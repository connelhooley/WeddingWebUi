import React from "react";

import { AgeDto } from "../../utilities/service";

export interface DietaryRequirementFieldProps {
    age: AgeDto;
    value: string;
    onChange: (value: string) => void;
}

export function DietaryRequirementField(
    { age, value, onChange }: DietaryRequirementFieldProps,
): JSX.Element {
    if (age === "Infant") {
        return <></>;
    }
    return (
        <label>
            Dietary requirements
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)} />
        </label>
    );
}
