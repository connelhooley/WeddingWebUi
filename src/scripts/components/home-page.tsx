import React from "react";

// tslint:disable-next-line:no-var-requires
import img from "../../images/all-daisies-ds.png";
import { InviteIdForm } from "./home-page/invite-id-form";

export function HomePage(): JSX.Element {
    return (
        <div id="home-page">
            <img id="home-banner-img" src={img} />
            <div id="invite-id-form-wrapper">
                <InviteIdForm />
            </div>
        </div>
    );
}
