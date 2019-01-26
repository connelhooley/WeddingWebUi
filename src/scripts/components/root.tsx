import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./home-page";
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
                    </Switch>
                </main>
            </>
        </BrowserRouter>
    );
}
