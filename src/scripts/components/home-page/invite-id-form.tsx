import React, { ChangeEvent, Component } from "react";

import { getInviteId, storeInviteId } from "../../utilities/local-storage";
import { validateInviteId } from "../../utilities/service";

interface InviteIdFormProps {
    onSaved: () => void;
}

interface InviteIdFormState {
    inviteId: string;
    isError: boolean;
    loading: boolean;
}

export class InviteIdForm extends Component<InviteIdFormProps, InviteIdFormState> {
    constructor(props: InviteIdFormProps) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            isError: false,
            loading: false,
            inviteId: "",
        };
    }

    public componentDidMount(): void {
        const inviteId = getInviteId();
        this.setState({
            inviteId,
        });
    }

    public render(): JSX.Element {
        return (
            <form onSubmit={this.handleSubmit} >
                <p>
                    Send RSVP
                </p>
                <label>
                    RSVP Code
                    <input
                        value={this.state.inviteId}
                        name="inviteId"
                        type="text"
                        required
                        onChange={this.handleChange} />
                </label>
                <span hidden={!this.state.isError} className="form-error">
                    Sorry, we couldn't find that RSVP code. Please try again.
                </span>
                <button type="submit" disabled={this.state.loading}>
                    {this.state.loading ? "Loading" : "Continue"}
                </button>
            </form>
        );
    }

    public handleChange(event: ChangeEvent<HTMLInputElement>): void {
        this.setState({
            inviteId: event.target.value,
        });
    }

    public async handleSubmit(): Promise<void> {
        this.setState({
            loading: true,
            isError: false,
        });
        const rsvpCode = this.state.inviteId.replace(/\s/, "").toLocaleUpperCase();
        const isValid = await validateInviteId(rsvpCode);
        if (isValid) {
            storeInviteId(rsvpCode);
            this.props.onSaved();
            this.setState({
                isError: false,
                loading: false,
            });
        } else {
            this.setState({
                isError: true,
                loading: false,
            });
        }
    }
}
