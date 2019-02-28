import React from "react";

export interface ListItemProps {
    title: string;
    telephoneUri: string;
    telephoneNumber: string;
    website?: string;
}

export function Taxi({title, telephoneUri, telephoneNumber, website}: ListItemProps): JSX.Element {
    return (
        <div className="location-list-item">
            <div className="title">
                {title}
            </div>
            <div className="telephone">
                <a href={`tel:+${telephoneUri}`}>{telephoneNumber}</a>
            </div>
            <div hidden={!website} className="website">
                <a href={website}>{website}</a>
            </div>
        </div>
    );
}
