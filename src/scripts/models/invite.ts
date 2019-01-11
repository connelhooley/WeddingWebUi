import { Age, Attending, Dessert, InviteType, Main, Starter } from "./shared";

export interface Invite {
    guests: Guest[];
}

export interface Guest {
    inviteId: string;
    firstName: string;
    lastName: string;
    inviteType: InviteType;
    attending: Attending;
    eligibleForRoom: boolean;
    age: Age;
    starter: Starter;
    main: Main;
    dessert: Dessert;
    dietaryRequirements: string;
    drinkPreferenceRed?: boolean;
    drinkPreferenceWhite?: boolean;
    drinkPreferenceRose?: boolean;
    songRequest: string;
}
