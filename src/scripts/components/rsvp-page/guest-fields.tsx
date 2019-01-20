import React from "react";

import { AttendingField, AttendingFormModel } from "./attending-field";
import { DessertFormModel } from "./dessert-field";
import { DietaryRequirementField } from "./dietary-requirement-field";
import { DrinksPreferenceFields } from "./drinks-preference";
import { MainFormModel } from "./main-field";
import { MealFields } from "./meal-fields";
import { SongRequestField } from "./song-request-field";
import { StarterFormModel } from "./starter-field";

export interface GuestFieldsProps {
    guest: GuestRsvpFormModel;
    onChange: (guest: GuestRsvpFormModel) => void;
}

export function GuestFields({ guest: values, onChange }: GuestFieldsProps): JSX.Element {
    return (
        <div className="guest">
            <header className="guest-header">
                {values.firstName}
            </header>
            <div className="guest-fields">
                <AttendingField
                    inviteType={values.inviteType}
                    value={values.attending}
                    onChange={(attending) => onChange({ ...values, attending})} />
                <MealFields
                    age={values.age}
                    inviteType={values.inviteType}
                    isChildSetMenu={values.isChildSetMenu}
                    starter={values.starter}
                    main={values.main}
                    dessert={values.dessert}
                    onStarterChange={(starter) => onChange({ ...values, starter})}
                    onMainChange={(main) => onChange({ ...values, main})}
                    onDessertChange={(dessert) => onChange({ ...values, dessert})}
                    onIsChildSetMenuChange={(isChildSetMenu) => onChange({ ...values, isChildSetMenu})} />
                <DrinksPreferenceFields
                    age={values.age}
                    inviteType={values.inviteType}
                    drinkPreferenceRed={values.drinkPreferenceRed}
                    drinkPreferenceWhite={values.drinkPreferenceWhite}
                    drinkPreferenceRose={values.drinkPreferenceRose}
                    onDrinkPreferenceRedChange={(drinkPreferenceRed) =>
                        onChange({ ...values, drinkPreferenceRed})}
                    onDrinkPreferenceWhiteChange={(drinkPreferenceWhite) =>
                        onChange({ ...values, drinkPreferenceWhite})}
                    onDrinkPreferenceRoseChange={(drinkPreferenceRose) =>
                        onChange({ ...values, drinkPreferenceRose})} />
                <DietaryRequirementField
                    age={values.age}
                    value={values.dietaryRequirements}
                    onChange={(dietaryRequirements) => onChange({ ...values, dietaryRequirements})} />
                <SongRequestField
                    age={values.age}
                    value={values.songRequest}
                    onChange={(songRequest) => onChange({ ...values, songRequest})} />
            </div>
        </div>
    );
}

export interface GuestRsvpFormModel {
    inviteId: string;
    firstName: string;
    lastName: string;
    inviteType: InviteTypeFormModel;
    attending: AttendingFormModel;
    eligibleForRoom: boolean;
    age: AgeFormModel;
    isChildSetMenu: boolean;
    starter: StarterFormModel;
    main: MainFormModel;
    dessert: DessertFormModel;
    dietaryRequirements: string;
    drinkPreferenceRed?: boolean;
    drinkPreferenceWhite?: boolean;
    drinkPreferenceRose?: boolean;
    songRequest: string;
}

export type InviteTypeFormModel = "Day" | "Evening";

export type AgeFormModel = "Infant" | "Child" | "YoungAdult" | "Adult";
