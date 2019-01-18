import React, { Component } from "react";
import { mapDto, mapForm } from "../../utilities/mapper";
import { getInvite, sendRsvp } from "../../utilities/service";
import { GuestFields, GuestRsvpFormModel } from "./guest-fields";

export interface RsvpFormProps {
    inviteId: string;
    onSaved: () => void;
}

export interface RsvpFormState {
    rsvp: RsvpFormModel;
    loading: boolean;
    saving: boolean;
}

export class RsvpForm extends Component<RsvpFormProps, RsvpFormState> {
    constructor(props: RsvpFormProps) {
        super(props);
        this.handleGuestChange = this.handleGuestChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setState({
            rsvp: null,
            loading: true,
            saving: false,
        });
    }

    public async componentDidMount(): Promise<void> {
        const inviteDto = await getInvite(this.props.inviteId);
        const rsvp = mapDto(inviteDto);
        this.setState({
            rsvp,
            loading: false,
        });
    }

    public render(): JSX.Element {
        if (this.state.loading) {
            return (
                <p>Loading...</p>
            );
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    {this.state.rsvp.guests.map((guest) =>
                        <GuestFields
                            key={guest.firstName}
                            guest={guest}
                            onChange={this.handleGuestChange} />)};
                    <button type="submit" disabled={this.state.saving}>
                        {this.state.saving ? "Loading" : "Submit"}
                    </button>
                </form>
            );
        }
    }

    public handleGuestChange(newGuestModel: GuestRsvpFormModel): void {
        const guestsCopy = [... this.state.rsvp.guests];
        const indexToReplace = guestsCopy.findIndex((guestModel) =>
            guestModel.firstName === newGuestModel.firstName);
        guestsCopy[indexToReplace] = newGuestModel;
        this.setState({
            rsvp: {
                guests: guestsCopy,
            },
        });
    }

    public async handleSubmit(): Promise<void> {
        this.setState({
            saving: true,
        });
        const rsvpDto = mapForm(this.state.rsvp);
        await sendRsvp(rsvpDto);
        this.setState({
            saving: false,
        });
        this.props.onSaved();
    }
}

export interface RsvpFormModel {
    guests: GuestRsvpFormModel[];
}
