import React from "react";

import { DessertField, DessertFormModel } from "./dessert-field";
import { AgeFormModel, InviteTypeFormModel } from "./guest-fields";
import { MainField, MainFormModel } from "./main-field";
import { StarterField, StarterFormModel } from "./starter-field";

export interface MealFieldsProps {
    age: AgeFormModel;
    inviteType: InviteTypeFormModel;
    isChildSetMenu: boolean;
    starter: StarterFormModel;
    main: MainFormModel;
    dessert: DessertFormModel;
    onStarterChange: (value: StarterFormModel) => void;
    onMainChange: (value?: MainFormModel) => void;
    onDessertChange: (value?: DessertFormModel) => void;
    onIsChildSetMenuChange: (value?: boolean) => void;
}

export function MealFields(
    {
        age,
        inviteType,
        isChildSetMenu,
        starter,
        main,
        dessert,
        onStarterChange,
        onMainChange,
        onDessertChange,
        onIsChildSetMenuChange,
    }: MealFieldsProps,
): JSX.Element {
    if (inviteType === "Evening" || age === "Infant") {
        return <></>;
    }
    return (
        <>
            <div onClick={() => onIsChildSetMenuChange(false)}>
                <div>
                    Adult Menu {isChildSetMenu ? "" : "(Selected)"}
                </div>
                <div>
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
            <div onClick={() => onIsChildSetMenuChange(true)}>
                <div>
                    Child's Menu {isChildSetMenu ? "(Selected)" : ""}
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
