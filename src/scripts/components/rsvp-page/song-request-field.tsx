import React from "react";

import { AgeDto } from "../../utilities/service";

export interface SongRequestFieldProps {
    age: AgeDto;
    value: string;
    onChange: (value: string) => void;
}

export function SongRequestField({ age, value, onChange }: SongRequestFieldProps): JSX.Element {
    if (age === "Infant") {
        return <></>;
    }
    return (
        <div className="guest-field">
            <label>
                Song request
                <input
                    type="text"
                    maxLength={280}
                    value={value}
                    onChange={(e) => onChange(e.target.value)} />
            </label>
        </div>
    );
}
