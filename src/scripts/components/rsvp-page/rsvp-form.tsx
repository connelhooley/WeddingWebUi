import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, FormEvent } from "react";
import { Link, Redirect } from "react-router-dom";

import { getInviteId } from "../../utilities/local-storage";
import { mapDto, mapForm } from "../../utilities/mapper";
import { getInvite, sendRsvp } from "../../utilities/service";
import { GuestFields, GuestRsvpFormModel } from "./guest-fields";

import completedSeparatorImg from "../../../images/daisy-chain-ds-h.png";
import formSeparatorImg from "../../../images/long-stem-and-leaves-ds-h.png";

export interface RsvpFormState {
    rsvp: RsvpFormModel;
    loading: boolean;
    loadingErrored: boolean;
    saving: boolean;
    saved: boolean;
    savingErrored: boolean;
    redirect: boolean;
}

export class RsvpForm extends Component<{}, RsvpFormState> {
    constructor(props: {}) {
        super(props);
        this.handleGuestChange = this.handleGuestChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            rsvp: null,
            loading: true,
            loadingErrored: false,
            saving: false,
            saved: false,
            savingErrored: false,
            redirect: false,
        };
    }

    public async componentDidMount(): Promise<void> {
        const inviteId = getInviteId();
        if (!inviteId) {
            this.setState({
                loading: false,
                loadingErrored: false,
                saving: false,
                saved: false,
                savingErrored: false,
                redirect: true,
            });
        } else {
            try {
                const inviteDto = await getInvite(inviteId);
                const rsvp = mapDto(inviteDto);
                this.setState({
                    rsvp,
                    loading: false,
                    loadingErrored: false,
                    saving: false,
                    saved: false,
                    savingErrored: false,
                    redirect: false,
                });
            } catch {
                this.setState({
                    loading: false,
                    loadingErrored: true,
                    saving: false,
                    saved: false,
                    savingErrored: false,
                    redirect: false,
                });
            }
        }
    }

    public render(): JSX.Element {
        if (this.state.redirect) {
            return (
                <Redirect to="/" />
            );
        } else if (this.state.saved) {
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
        } else if (this.state.loadingErrored) {
            return (
                <div id="rsvp-form-errored">
                    Sorry, there was a problem loading your details.<br />
                    Please refresh the page and if the problem persists please reply via post.
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
                        <div hidden={!this.state.savingErrored} id="rsvp-form-error">
                            Sorry, there was a problem saving your response.<br />
                            Please try again and if the problem persists please reply via post.
                        </div>
                        <button id="rsvp-form-submit-button" type="submit" disabled={this.state.saving}>
                            {this.state.saving
                                ? <>Sending&nbsp;<FontAwesomeIcon icon="spinner" pulse={true} /></>
                                : <>Submit</>}
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
            loading: false,
            loadingErrored: false,
            saving: true,
            saved: false,
            savingErrored: false,
            redirect: false,
        });
        const rsvpDto = mapForm(this.state.rsvp);
        try {
            await sendRsvp(rsvpDto);
            this.setState({
                loading: false,
                loadingErrored: false,
                saving: false,
                saved: true,
                savingErrored: false,
                redirect: false,
            });
        } catch {
            this.setState({
                loading: false,
                loadingErrored: false,
                saving: false,
                saved: false,
                savingErrored: true,
                redirect: false,
            });
        }
    }
}

export interface RsvpFormModel {
    guests: GuestRsvpFormModel[];
}
