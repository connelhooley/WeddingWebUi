import React, { Component } from "react";
import { Redirect, RouteComponentProps } from "react-router";

import { getInviteId } from "../utilities/local-storage";
import { RsvpForm } from "./rsvp-page/rsvp-form";

interface RsvpFormState {
    inviteId: string;
    saved: boolean;
}

export class RsvpPage extends Component<RouteComponentProps<{}>, RsvpFormState> {
    constructor(props: RouteComponentProps<{}>) {
        super(props);
        this.onSaved = this.onSaved.bind(this);
        this.state = {
            inviteId: "",
            saved: false,
        };
    }

    public componentDidMount(): void {
        const inviteId = getInviteId();
        if (!inviteId) {
            this.setState({
                inviteId: "",
                saved: true,
            });
        } else {
            this.setState({
                inviteId,
                saved: false,
            });
        }
    }

    public render(): JSX.Element {
        if (this.state.saved) {
            return (
                <Redirect to="/" />
            );
        } else {
            return (
                <RsvpForm inviteId={this.state.inviteId}  onSaved={this.onSaved} />
            );
        }
    }

    private onSaved(): void {
        this.setState({
            saved: true,
        });
    }
}
