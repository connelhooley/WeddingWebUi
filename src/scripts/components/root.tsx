import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { HomePage } from "./home-page";
import { RsvpPage } from "./rsvp-page";

export function Root() {
    return (
        <BrowserRouter>
            <>
                <nav id="site-header">
                    <Link id="site-header-title" to="/">
                        Fowler-Hooley Wedding
                    </Link>
                    <Link className="site-nav-item" to="/order-of-the-day" >
                        <span className="site-nav-item-text">Order of the day</span>
                    </Link>
                    <Link className="site-nav-item" to="/menus" >
                        <span className="site-nav-item-text">Food Menu</span>
                    </Link>
                    <Link className="site-nav-item" to="/menus" >
                        <span className="site-nav-item-text">Location</span>
                    </Link>
                </nav>
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
