import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEvent } from "react";

import { Link } from "react-router-dom";
import { Vegetarian } from "../shared/vegetarian";
import { AttendingFormModel } from "./attending-field";
import { DessertField, DessertFormModel } from "./dessert-field";
import { AgeFormModel, InviteTypeFormModel } from "./guest-fields";
import { MainField, MainFormModel } from "./main-field";
import { StarterField, StarterFormModel } from "./starter-field";

export interface MealFieldsProps {
    firstName: string;
    age: AgeFormModel;
    attending: AttendingFormModel;
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
        firstName,
        age,
        attending,
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
    if (attending !== "Day" || inviteType === "Evening" || age === "Infant") {
        return <></>;
    }
    const handleIsChildSetMenuChangeTrue = (e: MouseEvent<HTMLDivElement>): void => {
        if (!isChildSetMenu) {
            e.preventDefault();
            onIsChildSetMenuChange(true);
        }
    };
    const handleIsChildSetMenuChangeFalse = (e: MouseEvent<HTMLDivElement>): void => {
        if (isChildSetMenu) {
            e.preventDefault();
            onIsChildSetMenuChange(false);
        }
    };
    const adultMenuClass = !isChildSetMenu
        ? "guest-meal-menu-selected"
        : "guest-meal-menu-unselected";
    const childMenuClass = isChildSetMenu
        ? "guest-meal-menu-selected"
        : "guest-meal-menu-unselected";
    return (
        <>
            <div className="guest-field">
                <label className="hint">
                    You can order from the adult menu <b>or</b> the child set menu.
                    Click <Link to="/food-menu" target="_BLANK">here&nbsp;
                    <FontAwesomeIcon icon="external-link-alt"/></Link> to see the menus in full.
                </label>
            </div>
            <div className="guest-meal-menus">
                <div
                    className={`guest-meal-menu ${adultMenuClass}`}
                    onClick={handleIsChildSetMenuChangeFalse}>
                    <header className="guest-meal-menu-header">
                        Adult's Menu&nbsp;<FontAwesomeIcon icon="check-circle" />
                    </header>
                    <div className="guest-meal-menu-selected-indicator">
                        <div className="chevron"></div>
                    </div>
                    <div className="guest-meal-menu-fields">
                        <label className="hint">
                            Children can still order from this menu and they will get child sized portions
                        </label>
                        <StarterField
                            value={starter}
                            firstName={firstName}
                            disabled={isChildSetMenu}
                            onChange={onStarterChange} />
                        <MainField
                            value={main}
                            firstName={firstName}
                            disabled={isChildSetMenu}
                            onChange={onMainChange} />
                        <DessertField
                            value={dessert}
                            firstName={firstName}
                            disabled={isChildSetMenu}
                            onChange={onDessertChange} />
                    </div>
                </div>
                <div
                    className={`guest-meal-menu ${childMenuClass}`}
                    onClick={handleIsChildSetMenuChangeTrue}>
                    <header className="guest-meal-menu-header">
                        Child's Menu&nbsp;<FontAwesomeIcon icon="check-circle" />
                    </header>
                    <div className="guest-meal-menu-selected-indicator">
                        <div className="chevron"></div>
                    </div>
                    <div className="guest-meal-menu-fields">
                        <label className="hint">
                            Adults can still order from this menu and they will get adult sized portions
                        </label>
                        <div className="guest-meal-menu-child-field">
                            <div className="guest-meal-menu-child-field-label">
                                Starter
                            </div>
                            <div className="guest-meal-menu-child-field-value">
                                Cheesey bread&nbsp;<Vegetarian />
                            </div>
                        </div>
                        <div className="guest-meal-menu-child-field">
                            <div className="guest-meal-menu-child-field-label">
                                Main
                            </div>
                            <div className="guest-meal-menu-child-field-value">
                                Chicken goujons
                            </div>
                        </div>
                        <div className="guest-meal-menu-child-field">
                            <div className="guest-meal-menu-child-field-label">
                                Dessert
                            </div>
                            <div className="guest-meal-menu-child-field-value">
                                Ice cream&nbsp;<Vegetarian />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
