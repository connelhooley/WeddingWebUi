// tslint:disable:max-line-length

import React from "react";

import { Pescetarian } from "./shared/pescetarian";
import { Vegetarian } from "./shared/vegetarian";

import separatorImg from "../../images/daisy-2-ds.png";

export function FoodMenuPage(): JSX.Element {
    return (
        <div id="food-menu-page">
            <h1>Wedding Breakfast Menu</h1>
            <div id="wedding-breakfast-menus">
                <div id="food-menu-adult">
                    <h2>Adult's Menu</h2>

                    <h3>Starter</h3>
                    <p>Prawn cocktail served with Marie Rose sauce&nbsp;<Pescetarian /></p>
                    <p>Mini asparagus wrapped with Parma ham</p>
                    <p>Asparagus in goat's cheese tart, accompanied with balsamic dressing<Vegetarian /></p>

                    <h3>Main Course</h3>
                    <p>Beer battered cod served with lemon wedge, hand cut chips &amp; peas&nbsp;<Pescetarian /></p>
                    <p>Hunters chicken - chicken breast wrapped in bacon filled with mature cheese &amp; topped with BBQ sauce served with hand cut chips &amp; peas</p>
                    <p>Stuffed courgette with sweet pepper, aubergine &amp; tomatoes topped with mozzarella served with a tomato salsa&nbsp;<Vegetarian /></p>

                    <h3>Dessert</h3>
                    <p>Eton mess&nbsp;<Vegetarian /></p>
                    <p>Chocolate brownie served with warm chocolate sauce &amp; vanilla ice cream&nbsp;<Vegetarian /></p>
                </div>
                <div id="food-menu-separator">
                    <img src={separatorImg} />
                </div>
                <div id="food-menu-child">
                    <h2>Child's Set Menu</h2>

                    <h3>Starter</h3>
                    <p>Cheesy bread&nbsp;<Vegetarian /></p>

                    <h3>Main Course</h3>
                    <p>Chicken goujons served with potato wedges</p>

                    <h3>Dessert</h3>
                    <p>Homemade ice cream with wafer&nbsp;<Vegetarian /></p>
                </div>
            </div>
        </div>
    );
}
