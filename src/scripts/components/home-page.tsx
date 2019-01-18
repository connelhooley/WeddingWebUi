import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import { InviteIdForm } from "./home-page/invite-id-form";

export class HomePage extends Component<RouteComponentProps<{}>> {
    constructor(props: RouteComponentProps<{}>) {
        super(props);
        this.onSaved = this.onSaved.bind(this);
    }

    public render(): JSX.Element {
        return (
            <InviteIdForm onSaved={this.onSaved} />
        );
    }

    private onSaved(): void {
        this.props.history.push("/rsvp");
    }
}
