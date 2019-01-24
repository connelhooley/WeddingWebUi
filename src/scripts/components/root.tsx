import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./home-page";
import { RsvpPage } from "./rsvp-page";

export function Root() {
    return (
        <BrowserRouter>
            <>
                <header id="site-header">
                    <h1>Fowler-Hooley Wedding</h1>
                </header>
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
