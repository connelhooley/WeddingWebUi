import React from "react";

import { AgeDto } from "../../utilities/service";
import { AttendingFormModel } from "./attending-field";

export interface SongRequestFieldProps {
    age: AgeDto;
    attending: AttendingFormModel;
    value: string;
    onChange: (value: string) => void;
}

export function SongRequestField({ age, attending, value, onChange }: SongRequestFieldProps): JSX.Element {
    if (attending === null || attending === "NotAttending" || age === "Infant") {
        return <></>;
    }
    return (
        <div className="guest-field">
            <label>
                Song request <span className="hint small">(optional)</span>
                <input
                    type="text"
                    maxLength={280}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    data-lpignore="true" />
            </label>
        </div>
    );
}
