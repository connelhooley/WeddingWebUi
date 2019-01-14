import React, { Component } from "react";
import { RouteComponentProps } from "react-router";

import { getInviteId } from "../utilities/local-storage";
import { getInvite, Invite } from "../utilities/service";
import { RsvpForm } from "./rsvp-page/rsvp-form";

interface RsvpPageState {
    invite: Invite;
    loading: boolean;
}

export class RsvpPage extends Component<RouteComponentProps<{}>, RsvpPageState> {
    constructor(props: RouteComponentProps<{}>) {
        super(props);
        this.onSaved = this.onSaved.bind(this);
    }

    public async componentDidMount(): Promise<void> {
        this.setState({ loading: true });
        const inviteId = getInviteId();
        if (!inviteId) {
            this.props.history.push("/");
            return;
        }
        const invite = await getInvite(inviteId);
        this.setState({
            invite,
            loading: false,
        });
    }

    public render(): JSX.Element {
        if (this.state.loading) {
            return (
                <span>Loading</span>
            );
        } else {
            return (
                <RsvpForm invite={this.state.invite} onSaved={this.onSaved} />
            );

        }
    }

    private onSaved(): void {
        this.props.history.push("/");
    }
}
