import React from "react";

import { Hotel } from "./location-page/hotel";
import { Map } from "./location-page/map";
import { Taxi } from "./location-page/taxi";

export function LocationPage(): JSX.Element {
    return (
        <div id="location-page">
            <div id="location-map">
                <h1>Venue</h1>
                <Map id="google-map" />
            </div>
            <div className="location-list">
                <h1>Taxis</h1>
                <Taxi
                    title="Enterprise Taxis"
                    telephoneUri="441603868788"
                    telephoneNumber="01603 868 788"
                    website="http://www.enterpriseprivatehire.com/" />
                <Taxi
                    title="Goldstar Taxis Norwich"
                    telephoneUri="441603700700"
                    telephoneNumber="01603 700 700"
                    website="http://www.goldstartaxis.org/" />
                <Taxi
                    title="ABC Taxis"
                    telephoneUri="441603666333"
                    telephoneNumber="01603 666 333"
                    website="http://abctaxisnorwich.co.uk/" />
                <Taxi
                    title="Bestway Taxis"
                    telephoneUri="441603666666"
                    telephoneNumber="01603 666 666"
                    website="http://www.bestwaytaxis.co.uk/" />
                <Taxi
                    title="Allstar Taxis"
                    telephoneUri="441603744444"
                    telephoneNumber="01603 744 444" />
            </div>
            <div className="location-list">
                <h1>Hotels</h1>
                <Hotel
                    title="Round the Woods"
                    address="Fairfield House, Morton Ln, Weston Longville, Norwich, NR9 5JL"
                    carTravelMins="5"
                    distanceMiles="1.6"
                    telephoneUri="441603870394"
                    telephoneNumber="01603 870 394"
                    website="http://www.roundthewoods.co.uk" />
                <Hotel
                    title="Wensum Valley Hotel, Golf & Country Club"
                    address="Beech Ave, Taverham, Norwich, NR8 6HP"
                    carTravelMins="11"
                    distanceMiles="5.7"
                    telephoneUri="+441603261012"
                    telephoneNumber="01603 261 012"
                    website="https://www.wensumvalleyhotel.co.uk/" />
                <Hotel
                    title="The Parson Woodforde"
                    address="Church St, Norwich, NR9 5JU"
                    carTravelMins="7"
                    distanceMiles="3.2"
                    telephoneUri="+441603881675"
                    telephoneNumber="01603 881 675"
                    website="http://theparsonwoodforde.com/" />
                <Hotel
                    title="Bartles Lodge"
                    address="Church St, Elsing, Dereham, NR20 3EA"
                    carTravelMins="10"
                    distanceMiles="4.2"
                    telephoneUri="+441362637177"
                    telephoneNumber="01362 637 177"
                    website="http://bartleslodge.co.uk/" />
                <Hotel
                    title="Premier Inn Norwich Showground"
                    address="Dereham Rd, Norwich NR5 0TP"
                    carTravelMins="20"
                    distanceMiles="9.7"
                    telephoneUri="+448715278834"
                    telephoneNumber="0871 527 8834"
                    website="http://www.premierinn.com" />
            </div>
        </div>
    );
}
