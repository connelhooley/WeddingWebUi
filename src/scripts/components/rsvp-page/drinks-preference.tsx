import React from "react";

import { AgeDto, InviteTypeDto } from "../../utilities/service";

export interface DrinksPreferenceFieldsProps {
    age: AgeDto;
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
        age,
        inviteType,
        drinkPreferenceRed,
        drinkPreferenceWhite,
        drinkPreferenceRose,
        onDrinkPreferenceWhiteChange,
        onDrinkPreferenceRoseChange,
        onDrinkPreferenceRedChange,
    }: DrinksPreferenceFieldsProps,
): JSX.Element {
    if (inviteType === "Evening" || age !== "Adult") {
        return <></>;
    }
    return (
        <div className="guest-field">
            <label>Drinks preference</label>
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={drinkPreferenceRed}
                    onChange={(e) => onDrinkPreferenceRedChange(e.target.checked)} />
                Red wine
            </label>
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={drinkPreferenceWhite}
                    onChange={(e) => onDrinkPreferenceWhiteChange(e.target.checked)} />
                White wine
            </label>
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={drinkPreferenceRose}
                    onChange={(e) => onDrinkPreferenceRoseChange(e.target.checked)} />
                Rose wine
            </label>
        </div>
    );
}
