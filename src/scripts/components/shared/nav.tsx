import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import siteTitleImg from "../../../images/corner-daisy-ds.png";

interface INavState {
    isMobileMenuOpen: boolean;
}

export class Nav extends Component<{}, INavState> {
    constructor(props: {}) {
        super(props);
        this.handleMobileToggle = this.handleMobileToggle.bind(this);
        this.state = {
            isMobileMenuOpen: false,
        };
    }

    public render(): JSX.Element {
        return (
            <header id="site-header">
                <div id="site-title">
                    <Link id="site-title-link" to="/">
                        <img id="site-title-link-img" src={siteTitleImg} />
                        <div id="site-title-link-text">
                            Fowler Hooley Wedding
                        </div>
                    </Link>
                    <div id="site-nav-button-wrapper">
                        <button
                            id="site-nav-button"
                            type="button"
                            onClick={this.handleMobileToggle}>
                            <span className="site-nav-item-text"><FontAwesomeIcon icon="bars" /></span>
                        </button>
                    </div>
                </div>
                <nav id="site-nav" className={this.state.isMobileMenuOpen ? "site-nav-open" : ""}>
                    <NavLink className="site-nav-item" activeClassName="site-nav-item-active" to="/order-of-the-day" >
                        <span className="site-nav-item-text">Order of the day</span>
                    </NavLink>
                    <NavLink className="site-nav-item" activeClassName="site-nav-item-active" to="/food-menus" >
                        <span className="site-nav-item-text">Food menu</span>
                    </NavLink>
                    <NavLink className="site-nav-item" activeClassName="site-nav-item-active" to="/location" >
                        <span className="site-nav-item-text">Location</span>
                    </NavLink>
                </nav>
            </header>
        );
    }

    private handleMobileToggle(): void {
        this.setState({
            isMobileMenuOpen: !this.state.isMobileMenuOpen,
        });
    }
}
