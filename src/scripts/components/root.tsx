import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { FoodMenuPage } from "./food-menu-page";
import { HomePage } from "./home-page";
import { LocationPage } from "./location-page";
import { OrderOfTheDayPage } from "./order-of-the-day-page";
import { RsvpPage } from "./rsvp-page";
import { Nav } from "./shared/nav";

export function Root() {
    return (
        <BrowserRouter>
            <>
                <Nav />
                <main id="site-content">
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/rsvp" component={RsvpPage} />
                        <Route path="/order-of-the-day" component={OrderOfTheDayPage} />
                        <Route path="/food-menu" component={FoodMenuPage} />
                        <Route path="/location" component={LocationPage} />
                        <Route component={HomePage} />
                    </Switch>
                </main>
            </>
        </BrowserRouter>
    );
}
