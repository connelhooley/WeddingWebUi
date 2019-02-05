import React from "react";

import { AgeDto, InviteTypeDto } from "../../utilities/service";
import { AttendingFormModel } from "./attending-field";

export interface DrinksPreferenceFieldsProps {
    firstName: string;
    age: AgeDto;
    attending: AttendingFormModel;
    inviteType: InviteTypeDto;
    drinkPreferenceRed?: boolean;
    drinkPreferenceWhite?: boolean;
    drinkPreferenceRose?: boolean;
    onDrinkPreferenceRedChange: (value?: boolean) => void;
    onDrinkPreferenceWhiteChange: (value?: boolean) => void;
    onDrinkPreferenceRoseChange: (value?: boolean) => void;
}

export function DrinksPreferenceFields(
    {
        firstName,
        age,
        attending,
        inviteType,
        drinkPreferenceRed,
        drinkPreferenceWhite,
        drinkPreferenceRose,
        onDrinkPreferenceWhiteChange,
        onDrinkPreferenceRoseChange,
        onDrinkPreferenceRedChange,
    }: DrinksPreferenceFieldsProps,
): JSX.Element {
    if (attending !== "Day" || inviteType === "Evening" || age !== "Adult") {
        return <></>;
    }
    return (
        <div className="guest-field">
            <label>Drinks preference <span className="hint small">(optional)</span></label>
            <div className="guest-field-check-boxes">
                <label className="checkbox-label">
                    <input
                        name={`${firstName}-drinks-preference`}
                        type="checkbox"
                        checked={drinkPreferenceRed}
                        onChange={(e) => onDrinkPreferenceRedChange(e.target.checked)} />
                    Red wine
                </label>
                <label className="checkbox-label">
                    <input
                        name={`${firstName}-drinks-preference`}
                        type="checkbox"
                        checked={drinkPreferenceWhite}
                        onChange={(e) => onDrinkPreferenceWhiteChange(e.target.checked)} />
                    White wine
                </label>
                <label className="checkbox-label">
                    <input
                        name={`${firstName}-drinks-preference`}
                        type="checkbox"
                        checked={drinkPreferenceRose}
                        onChange={(e) => onDrinkPreferenceRoseChange(e.target.checked)} />
                    Rose wine
                </label>
            </div>
        </div>
    );
}
