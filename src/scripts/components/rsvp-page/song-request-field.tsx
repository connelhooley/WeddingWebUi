import React from "react";

import { Age } from "../../utilities/service";

export interface SongRequestFieldProps {
    age: Age;
    value: string;
    onChange: (value: string) => void;
}

export function SongRequestField({ age, value, onChange }: SongRequestFieldProps): JSX.Element {
    if (age === "Infant") {
        return <></>;
    }
    return (
        <label>
            Song Request
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)} />
        </label>
    );
}
