import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, FormEvent } from "react";
import { Link } from "react-router-dom";

import { getInviteId } from "../../utilities/local-storage";
import { mapDto, mapForm } from "../../utilities/mapper";
import { getInvite, sendRsvp } from "../../utilities/service";
import { GuestFields, GuestRsvpFormModel } from "./guest-fields";

import completedSeparatorImg from "../../../images/daisy-chain-ds-h.png";
import formSeparatorImg from "../../../images/long-stem-and-leaves-ds-h.png";

export interface RsvpFormState {
    rsvp: RsvpFormModel;
    loading: boolean;
    saving: boolean;
    saved: boolean;
}

export class RsvpForm extends Component<{}, RsvpFormState> {
    constructor(props: {}) {
        super(props);
        this.handleGuestChange = this.handleGuestChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            rsvp: null,
            loading: true,
            saving: false,
            saved: false,
        };
    }

    public async componentDidMount(): Promise<void> {
        const inviteId = getInviteId();
        const inviteDto = await getInvite(inviteId);
        const rsvp = mapDto(inviteDto);
        this.setState({
            rsvp,
            loading: false,
            saving: false,
            saved: false,
        });
    }

    public render(): JSX.Element {
        if (this.state.saved) {
            return (
                <div id="rsvp-form-finished">
                    <img src={completedSeparatorImg} />
                    <p>Thanks for sending us your reply.</p>
                    <p>Click <Link to="/"> here</Link> to go back to the home page.</p>
                    <img src={completedSeparatorImg} />
                </div>
            );
        } else if (this.state.loading) {
            return (
                <div id="rsvp-form-loading">
                    <FontAwesomeIcon icon="spinner" pulse={true} />
                </div>
            );
        } else {
            return (
                <form id="rsvp-form" onSubmit={this.handleSubmit}>
                    {this.state.rsvp.guests.map((guest) =>
                        <div key={guest.firstName}>
                            <img className="guest-separator" src={formSeparatorImg} />
                            <GuestFields
                                guest={guest}
                                onChange={this.handleGuestChange} />
                        </div>,
                    )}
                    <img className="guest-separator" src={formSeparatorImg} />
                    <div id="rsvp-form-submit">
                        <button id="rsvp-form-submit-button" type="submit" disabled={this.state.saving}>
                            {this.state.saving ? "Loading" : "Submit"}
                        </button>
                    </div>
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

    public async handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        this.setState({
            saving: true,
        });
        const rsvpDto = mapForm(this.state.rsvp);
        await sendRsvp(rsvpDto);
        this.setState({
            saving: false,
            saved: true,
        });
    }
}

export interface RsvpFormModel {
    guests: GuestRsvpFormModel[];
}
