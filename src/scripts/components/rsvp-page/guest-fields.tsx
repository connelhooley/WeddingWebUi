import React from "react";

import { Guest } from "../../utilities/service";
import { AttendingField } from "./attending-field";
import { DietaryRequirementField } from "./dietary-requirement-field";
import { DrinksPreferenceFields } from "./drinks-preference";
import { MealFields } from "./meal-fields";
import { SongRequestField } from "./song-request-field";

export interface GuestFieldsProps {
    guest: Guest;
    onChange: (guest: Guest) => void;
}

export function GuestFields({ guest, onChange }: GuestFieldsProps): JSX.Element {
    return (
        <fieldset key={guest.firstName} className="guest">
            <legend>{guest.firstName}</legend>
            <AttendingField
                inviteType={guest.inviteType}
                value={guest.attending}
                onChange={(attending) => onChange({ ...guest, attending})} />
            <MealFields
                age={guest.age}
                inviteType={guest.inviteType}
                starter={guest.starter}
                main={guest.main}
                dessert={guest.dessert}
                onStarterChange={(starter) => onChange({ ...guest, starter})}
                onMainChange={(main) => onChange({ ...guest, main})}
                onDessertChange={(dessert) => onChange({ ...guest, dessert})} />
            <DrinksPreferenceFields
                age={guest.age}
                inviteType={guest.inviteType}
                drinkPreferenceRed={guest.drinkPreferenceRed}
                drinkPreferenceWhite={guest.drinkPreferenceWhite}
                drinkPreferenceRose={guest.drinkPreferenceRose}
                onDrinkPreferenceRedChange={(drinkPreferenceRed) => onChange({ ...guest, drinkPreferenceRed})}
                onDrinkPreferenceWhiteChange={(drinkPreferenceWhite) => onChange({ ...guest, drinkPreferenceWhite})}
                onDrinkPreferenceRoseChange={(drinkPreferenceRose) => onChange({ ...guest, drinkPreferenceRose})} />
            <DietaryRequirementField
                age={guest.age}
                value={guest.dietaryRequirements}
                onChange={(dietaryRequirements) => onChange({ ...guest, dietaryRequirements})} /> />
            <SongRequestField
                age={guest.age}
                value={guest.songRequest}
                onChange={(songRequest) => onChange({ ...guest, songRequest})} />
        </fieldset>
    );
}
