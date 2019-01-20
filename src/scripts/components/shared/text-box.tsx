import React from "react";

export interface TextBoxProps {
    label: string;
    value?: string;
    type?: string;
    onChange: (value: string) => void;
}
export function TextBox({ label, value, type = "text", onChange }: TextBoxProps): JSX.Element {
    return (
        <div className="guest-field">
            <label>
                {label}
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)} />
            </label>
        </div>
    );
}
