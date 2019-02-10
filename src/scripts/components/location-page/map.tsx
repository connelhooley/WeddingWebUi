import React, { Component, RefObject } from "react";

import { setupMapsApi } from "../../utilities/maps";

interface MapProps {
    id: string;
}

export class Map extends Component<MapProps, {}> {
    private ref: RefObject<HTMLDivElement>;

    constructor(props: MapProps) {
        super(props);
        this.ref = React.createRef();
    }

    public componentDidMount(): void {
        setupMapsApi(this.ref.current);
    }

    public render(): JSX.Element {
        return (
            <div id={this.props.id} ref={this.ref} />
        );
    }
}
