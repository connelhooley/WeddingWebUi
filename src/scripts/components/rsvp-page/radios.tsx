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
export class RadioButtons<T extends string> extends Component<RadioButtonsProps<T>> {
    constructor(props: RadioButtonsProps<T>) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    public render(): JSX.Element {
        return (
            <>
                {this.props.radios.map(({ label, value }) => {
                    return (
                        <label>
                            <input
                                type="radio"
                                value={value}
                                checked={this.props.value === value}
                                onChange={this.handleChange} />
                            {label}
                        </label>
                    );
                })}
            </>
        );
    }

    private handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const newValue = event.target.value as T;
        this.props.onChange(newValue);
    }
}
