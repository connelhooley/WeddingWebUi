import React, { ChangeEvent, Component } from "react";

export interface Radio<T extends string> {
    label: string;
    value: T;
}

export interface RadiosProps<T extends string> {
    mainLabel: string;
    value?: T;
    radios: Array<Radio<T>>;
    onChange: (value: T) => void;
}
export class Radios<T extends string> extends Component<RadiosProps<T>> {
    constructor(props: RadiosProps<T>) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="guest-field">
                <label>{this.props.mainLabel}</label>
                {this.props.radios.map(({ label, value }) => {
                    return (
                        <label key={value}>
                            <input
                                type="radio"
                                value={value}
                                checked={this.props.value === value}
                                onChange={this.handleChange} />
                            {label}
                        </label>
                    );
                })}
            </div>
        );
    }

    private handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const newValue = event.target.value as T;
        this.props.onChange(newValue);
    }
}
