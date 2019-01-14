import React from "react";

import { Age, InviteType } from "../../utilities/service";

export interface DrinksPreferenceFieldsProps {
    age: Age;
    inviteType: InviteType;
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
        <>
            <label>Drinks preference</label>
            <label>
                Red wine
                <input
                    type="checkbox"
                    checked={drinkPreferenceRed}
                    onChange={(e) => onDrinkPreferenceRedChange(e.target.checked)} />
            </label>
            <label>
                White wine
                <input
                    type="checkbox"
                    checked={drinkPreferenceWhite}
                    onChange={(e) => onDrinkPreferenceWhiteChange(e.target.checked)} />
            </label>
            <label>
                Rose wine
                <input
                    type="checkbox"
                    checked={drinkPreferenceRose}
                    onChange={(e) => onDrinkPreferenceRoseChange(e.target.checked)} />
            </label>
        </>
    );
}
