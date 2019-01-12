import React from "react";
import { getInviteId } from "../utilities/local-storage";

export function RsvpPage() {
    const inviteId = getInviteId();
    return(
        <span>RSVP page - {inviteId}</span>
    );
}
