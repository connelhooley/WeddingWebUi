import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import image from "../../../images/corner-daisy-ds.png";

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
                        <img id="site-title-link-img" src={image} />
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
                    <Link className="site-nav-item" to="/order-of-the-day" >
                        <span className="site-nav-item-text">Order of the day</span>
                    </Link>
                    <Link className="site-nav-item" to="/food-menu" >
                        <span className="site-nav-item-text">Food menu</span>
                    </Link>
                    <Link className="site-nav-item" to="/location" >
                        <span className="site-nav-item-text">Location</span>
                    </Link>
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
