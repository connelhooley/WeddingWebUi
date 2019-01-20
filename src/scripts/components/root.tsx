import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./home-page";
import { RsvpPage } from "./rsvp-page";

export function Root() {
    return (
        <BrowserRouter>
            <>
                <h1>Wedding Coming Soon</h1>
                <main>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/rsvp" component={RsvpPage} />
                    </Switch>
                </main>
            </>
        </BrowserRouter>
    );
}
