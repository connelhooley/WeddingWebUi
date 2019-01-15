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
    const onChildMenu = () => {
        onStarterChange("ChildSetMenu");
        onMainChange("ChildSetMenu");
        onDessertChange("ChildSetMenu");
    };
    return (
        <>
            <div>
                <div>
                    Adult Menu
                </div>
                <div hidden={childMenuIsSelected}>
                    <StarterField
                        value={starter}
                        onChange={onStarterChange} />
                    <MainField
                        value={main}
                        onChange={onMainChange} />
                    <DessertField
                        value={dessert}
                        onChange={onDessertChange} />
                </div>
            </div>
            <div onClick={onChildMenu}>
                <div>
                    Child's Menu
                </div>
                <div>
                    <div>
                        Starter:<br />
                        Cheesey Bread
                    </div>
                    <div>
                        Main course:
                        <br />Chicken goujons served potato wedges
                    </div>
                    <div>
                        Dessert:
                        <br />Homemade ice cream with wafer
                    </div>
                </div>
            </div>
        </>
    );
}
