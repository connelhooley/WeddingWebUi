import React, { ChangeEvent, Component, FormEvent } from "react";
import { Redirect } from "react-router-dom";

import { getInviteId, storeInviteId } from "../../utilities/local-storage";
import { validateInviteId } from "../../utilities/service";

interface InviteIdFormState {
    inviteId: string;
    failed: boolean;
    saving: boolean;
    saved: boolean;
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
                <div>
                    <div>
                        Send RSVP
                    </div>
                    <form onSubmit={this.handleSubmit} >
                        <label>
                            RSVP Code
                            <input
                                value={this.state.inviteId}
                                name="inviteId"
                                type="text"
                                required
                                onChange={this.handleChange} />
                        </label>
                        <span hidden={!this.state.failed} className="form-error">
                            Sorry, we couldn't find that RSVP code. Please try again.
                        </span>
                        <button type="submit" disabled={this.state.saving}>
                            {this.state.saving ? "Loading" : "Continue"}
                        </button>
                    </form>
                </div>
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
        });
        const inviteId = this.state.inviteId.replace(/\s/, "").toLocaleUpperCase();
        const isValid = await validateInviteId(inviteId);
        if (isValid) {
            storeInviteId(inviteId);
            this.setState({
                failed: false,
                saving: false,
                saved: true,
            });
        } else {
            this.setState({
                failed: true,
                saving: false,
                saved: false,
            });
        }
    }
}
