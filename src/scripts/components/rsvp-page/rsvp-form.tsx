import React, { Component } from "react";

import { Invite } from "../../utilities/service";

export interface RsvpFormProps {
    invite: Invite;
    onSaved: () => void;
    saving: boolean;
}

export class RsvpForm extends Component<RsvpFormProps> {
    constructor(props: RsvpFormProps) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    public render(): JSX.Element {
        return (
            <form onSubmit={this.onSubmit}>
                
            </form>
        );
    }

    private async onFormSubmit(): Promise<void> {
        this.props.onSaved();
    }

    private async onSubmit(): void {
        
    }

    private getFormValidationSchema(): ObjectSchema<Invite> {
        // return object<Rsvp>().shape({
        //     inviteId: string()
        //         .required("Please enter your RSVP code")
        //         .min(6, "Please enter a RSVP code that contains 6 characters")
        //         .max(6, "Please enter a RSVP code that contains 6 characters")
        //         .matches(/^[A-z0-9]{6}$/, "Please enter a valid RSVP code")
        //         .test(
        //             "is-valid-invite-id",
        //             "Sorry, we couldn't find that RSVP code. Please ensure you typed it in correctly",
        //             validateInviteId),
        // });
        return null;
    }
}
