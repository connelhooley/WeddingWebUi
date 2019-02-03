import React from "react";

import { InviteIdForm } from "./home-page/invite-id-form";

import bannerImg from "../../images/all-daisies-ds-cropped.png";

export function HomePage(): JSX.Element {
    return (
        <div id="home-page">
            <img id="home-banner-img" src={bannerImg} />
            <div id="invite-id-form-wrapper">
                <InviteIdForm />
            </div>
        </div>
    );
}
