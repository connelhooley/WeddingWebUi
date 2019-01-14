import React, { ChangeEvent, Component } from "react";

export interface Radio<T extends string> {
    label: string;
    value: T;
}

export interface RadioButtonsProps<T extends string> {
    value?: T;
    radios: Array<Radio<T>>;
    onChange: (value: T) => void;
}

export interface RadioButtonsState<T extends string> {
    value?: T;
}

export class RadioButtons<T extends string> extends Component<RadioButtonsProps<T>, RadioButtonsState<T>> {
    constructor(props: RadioButtonsProps<T>) {
        super(props);
        this.state = { value: props.value };
    }

    public render(): JSX.Element {
        return <>{this.props.radios.map(this.renderRadio)}</>;
    }

    private renderRadio({ label, value }: Radio<T>) {
        return (
            <label>
                <input
                    type="radio"
                    value={value}
                    checked={this.state.value === value}
                    onChange={this.handleChange} />
                {label}
            </label>
        );
    }

    private handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const newValue = event.target.value as T;
        this.setState({
            value: newValue,
        });
        this.props.onChange(newValue);
    }
}
