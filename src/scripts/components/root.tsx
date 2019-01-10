import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { HomePage } from "./home-page";
import { RsvpPage } from "./rsvp-page";

export function Root() {
    return (
        <BrowserRouter>
            <div>
                <h1>Wedding Coming Soon</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rsvp">Rsvp</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/rsvp" component={RsvpPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}
