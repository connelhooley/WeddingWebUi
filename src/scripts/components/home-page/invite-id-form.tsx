import React, { ChangeEvent, Component, FormEvent } from "react";
import { Redirect } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getInviteId, storeInviteId } from "../../utilities/local-storage";
import { validateInviteId } from "../../utilities/service";

interface InviteIdFormState {
    inviteId: string;
    failed: boolean;
    saving: boolean;
    saved: boolean;
    errored: boolean;
}

export class InviteIdForm extends Component<{}, InviteIdFormState> {
    constructor(props: {}) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            inviteId: "",
            failed: false,
            saving: false,
            saved: false,
            errored: false,
        };
    }

    public componentDidMount(): void {
        const inviteId = getInviteId();
        this.setState({
            inviteId,
        });
    }

    public render(): JSX.Element {
        if (this.state.saved) {
            return (
                <Redirect to="/rsvp" />
            );
        } else {
            return (
                <form id="invite-id-form" onSubmit={this.handleSubmit} >
                    <header id="invite-id-header">
                        Send RSVP
                    </header>
                    <div hidden={!this.state.failed} id="invite-id-error">
                        Sorry, we couldn't find that RSVP code<br />
                        Please try again
                    </div>
                    <div hidden={!this.state.errored} id="invite-id-error">
                        Sorry, there was a problem sending your request<br />
                        Please try again
                    </div>
                    <input
                        id="invite-id-input"
                        value={this.state.inviteId}
                        name="inviteId"
                        type="text"
                        placeholder="Enter your RSVP code here..."
                        required
                        onChange={this.handleChange}
                        data-lpignore="true"/>
                    <button id="invite-id-button" type="submit" disabled={this.state.saving}>
                        {this.state.saving
                            ? <>Loading&nbsp;<FontAwesomeIcon icon="spinner" pulse={true} /></>
                            : <>Continue&nbsp;<FontAwesomeIcon icon="arrow-right" /></>}
                    </button>
                </form>
            );
        }
    }

    public handleChange(event: ChangeEvent<HTMLInputElement>): void {
        this.setState({
            inviteId: event.target.value,
        });
    }

    public async handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        this.setState({
            failed: false,
            saving: true,
            saved: false,
            errored: false,
        });
        const inviteId = this.state.inviteId.replace(/\s/, "").toLocaleUpperCase();
        try {
            const isValid = await validateInviteId(inviteId);
            if (isValid) {
                storeInviteId(inviteId);
                this.setState({
                    failed: false,
                    saving: false,
                    saved: true,
                    errored: false,
                });
            } else {
                this.setState({
                    failed: true,
                    saving: false,
                    saved: false,
                    errored: false,
                });
            }
        } catch {
            this.setState({
                failed: false,
                saving: false,
                saved: false,
                errored: true,
            });
        }
    }
}
