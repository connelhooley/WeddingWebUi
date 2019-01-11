import { Attending, Dessert, Main, Starter } from "./shared";

export interface Rsvp {
    rsvps: RsvpGuest[];
}

export interface RsvpGuest {
    inviteId: string;
    firstName: string;
    attending: Attending;
    starter: Starter;
    main: Main;
    dessert: Dessert;
    dietaryRequirements: string;
    drinkPreferenceRed?: boolean;
    drinkPreferenceWhite?: boolean;
    drinkPreferenceRose?: boolean;
    songRequest: string;
}
