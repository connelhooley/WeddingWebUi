import { Formik, FormikActions, FormikProps } from "formik";
import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { object, ObjectSchema, string } from "yup";

import { storeInviteId } from "../../utilities/local-storage";
import { validateInviteId } from "../../utilities/service";

interface InviteIdFormModel {
    inviteId: string;
}

class InviteIdFormRoute extends Component<RouteComponentProps<{}>> {
    constructor(props: RouteComponentProps<{}>) {
        super(props);
        this.renderForm = this.renderForm.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.getFormInitialValues = this.getFormInitialValues.bind(this);
        this.getFormValidationSchema = this.getFormValidationSchema.bind(this);
    }

    public render(): JSX.Element {
        return (
            <Formik<InviteIdFormModel>
                render={this.renderForm}
                onSubmit={this.onFormSubmit}
                initialValues={this.getFormInitialValues()}
                validationSchema={this.getFormValidationSchema()} />
        );
    }

    private renderForm(
        { errors, handleChange, isSubmitting }: FormikProps<InviteIdFormModel>,
    ): JSX.Element {
        return (
            <div id="invite-id-form">
                <input
                    name="inviteId"
                    type="text"
                    placeholder="Enter your RSVP code here..."
                    required
                    onChange={handleChange} />
                <span className="form-error">
                    {errors.inviteId}
                </span>
                <button type="submit">
                    {isSubmitting ? "Loading" : "Submit"}
                </button>>
            </div>
        );
    }

    private async onFormSubmit(
        { inviteId }: InviteIdFormModel,
        { setSubmitting }: FormikActions<InviteIdFormModel>,
    ): Promise<void> {
        storeInviteId(inviteId);
        setSubmitting(false);
        this.props.history.push("/rsvp");
    }

    private getFormInitialValues(): InviteIdFormModel {
        return {
            inviteId: "",
        };
    }

    private getFormValidationSchema(): ObjectSchema<InviteIdFormModel> {
        return object<InviteIdFormModel>().shape({
            inviteId: string()
                .required("Please enter your RSVP code")
                .min(6, "Please enter a RSVP code that contains 6 characters")
                .max(6, "Please enter a RSVP code that contains 6 characters")
                .matches(/^[A-z0-9]{6}$/, "Please enter a valid RSVP code")
                .test(
                    "is-valid-invite-id",
                    "Sorry, we couldn't find that RSVP code. Please ensure you typed it in correctly",
                    validateInviteId),
        });
    }
}

const InviteIdForm = withRouter(InviteIdFormRoute);

export {
    InviteIdForm,
};
