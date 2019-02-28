import React from "react";

export interface ListItemProps {
    title: string;
    address: string;
    carTravelMins: string;
    distanceMiles: string;
    telephoneUri: string;
    telephoneNumber: string;
    website: string;
}

export function Hotel(
    {
        title,
        address,
        carTravelMins,
        distanceMiles,
        telephoneUri,
        telephoneNumber,
        website,
    }: ListItemProps,
): JSX.Element {
    return (
        <div className="location-list-item">
            <div className="title">
                {title}
            </div>
            <div className="address">
                {address}
            </div>
            <div className="distance">
                {carTravelMins} minute drive away from venue ({distanceMiles} miles)
            </div>
            <div className="telephone">
                <a href={`tel:+${telephoneUri}`}>{telephoneNumber}</a>
            </div>
            <div className="website">
                <a href={website}>{website}</a>
            </div>
        </div>
    );
}
