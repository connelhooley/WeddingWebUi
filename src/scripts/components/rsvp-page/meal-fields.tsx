import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <div className="guest-meal">
            <div
                className={"guest-meal-menu" + (isChildSetMenu ? "" : " guest-meal-menu-selected")}
                onClick={() => onIsChildSetMenuChange(false)}>
                <header className="guest-meal-menu-header">
                    Adult Menu
                </header>
                <div className="guest-meal-menu-selected-indicator">
                    <div className="chevron"></div>
                </div>
                <div className="guest-meal-menu-fields">
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
            <div
                className={"guest-meal-menu" + (isChildSetMenu ? " guest-meal-menu-selected" : "")}
                onClick={() => onIsChildSetMenuChange(true)}>
                <header className="guest-meal-menu-header">
                    Child's Menu
                </header>
                <div className="guest-meal-menu-selected-indicator">
                    <div className="chevron"></div>
                </div>
                <div className="guest-meal-menu-fields">
                    <div className="guest-meal-menu-child-field">
                        <div className="guest-meal-menu-child-field-label">
                            Starter
                        </div>
                        <div className="guest-meal-menu-child-field-value">
                            Cheesey bread
                        </div>
                    </div>
                    <div className="guest-meal-menu-child-field">
                        <div className="guest-meal-menu-child-field-label">
                            Main
                        </div>
                        <div className="guest-meal-menu-child-field-value">
                            Chicken goujons served potato wedges
                        </div>
                    </div>
                    <div className="guest-meal-menu-child-field">
                        <div className="guest-meal-menu-child-field-label">
                            Dessert
                        </div>
                        <div className="guest-meal-menu-child-field-value">
                            Homemade ice cream with wafer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
