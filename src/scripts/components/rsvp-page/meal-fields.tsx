import React from "react";

import { Age, Dessert, InviteType, Main, Starter } from "../../utilities/service";
import { DessertField } from "./dessert-field";
import { MainField } from "./main-field";
import { StarterField } from "./starter-field";

export interface MealFieldsProps {
    age: Age;
    inviteType: InviteType;
    starter: Starter;
    main: Main;
    dessert: Dessert;
    onStarterChange: (value: Starter) => void;
    onMainChange: (value?: Main) => void;
    onDessertChange: (value?: Dessert) => void;
}

export function MealFields(
    {
        age,
        inviteType,
        starter,
        main,
        dessert,
        onStarterChange,
        onMainChange,
        onDessertChange,
    }: MealFieldsProps,
): JSX.Element {
    if (inviteType === "Evening" || age === "Infant") {
        return <></>;
    }
    const childMenuIsSelected =
        starter === "ChildSetMenu" ||
        main === "ChildSetMenu" ||
        dessert === "ChildSetMenu";
    return (
        <>
            <StarterField
                age={age}
                inviteType={inviteType}
                value={starter}
                onChange={onStarterChange} />
            <MainField
                age={age}
                inviteType={inviteType}
                value={main}
                onChange={onMainChange} />
            <DessertField
                age={age}
                inviteType={inviteType}
                value={dessert}
                onChange={onDessertChange} />
        </>
    );
}
