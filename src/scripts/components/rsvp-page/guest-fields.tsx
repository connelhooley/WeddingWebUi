import React from "react";

import { Guest } from "../../utilities/service";
import { AttendingField } from "./attending-field";
import { DietaryRequirementField } from "./dietary-requirement-field";
import { DrinksPreferenceFields } from "./drinks-preference";
import { MealFields } from "./meal-fields";
import { SongRequestField } from "./song-request-field";

export interface GuestFieldsProps {
    guest: Guest;
}

export function GuestFields({ guest }: GuestFieldsProps): JSX.Element {
    return (
        <fieldset className="guest">
            <legend>{guest.firstName}</legend>
            <AttendingField
                inviteType={guest.inviteType}
                value={guest.attending}
                onChange={null} />
            <MealFields
                age={guest.age}
                inviteType={guest.inviteType}
                starter={guest.starter}
                main={guest.main}
                dessert={guest.dessert}
                onStarterChange={null}
                onMainChange={null}
                onDessertChange={null} />
            <DrinksPreferenceFields
                age={guest.age}
                inviteType={guest.inviteType}
                drinkPreferenceRed={guest.drinkPreferenceRed}
                drinkPreferenceWhite={guest.drinkPreferenceWhite}
                drinkPreferenceRose={guest.drinkPreferenceRose}
                onDrinkPreferenceRedChange={null}
                onDrinkPreferenceWhiteChange={null}
                onDrinkPreferenceRoseChange={null} />
            <DietaryRequirementField
                age={guest.age}
                value={guest.dietaryRequirements}
                onChange={null} />
            <SongRequestField
                age={guest.age}
                value={guest.songRequest}
                onChange={null} />
        </fieldset>
    );
}
