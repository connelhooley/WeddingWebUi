import React from "react";
import { InviteIdForm } from "./home-page/invite-id-form";

export interface InviteIdForm {
    inviteId: string;
}

export function HomePage() {
    return (
        <InviteIdForm />
    );
}
