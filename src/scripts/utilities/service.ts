import { getConfig } from "./config";

export async function getInvite(inviteId: string): Promise<Invite> {
    const {serviceBaseUrl, serviceGetInviteToken} = getConfig();
    const url = `${serviceBaseUrl}/api/invite?inviteId=${inviteId}&code=${serviceGetInviteToken}`;
    const method = "GET";
    const res = await fetch(new Request(url, { method }));
    if (res.ok) {
        return await res.json();
    } else {
        throw new Error("Service call failed");
    }
}

export async function validateInviteId(inviteId: string): Promise<boolean> {
    const {serviceBaseUrl, serviceValidateInviteIdToken} = getConfig();
    const url = `${serviceBaseUrl}/api/invite-id?inviteId=${inviteId}&code=${serviceValidateInviteIdToken}`;
    const method = "GET";
    const res = await  fetch(new Request(url, { method }));
    return res.ok && JSON.parse(await res.json());
}

export async function sendRsvp(rsvp: Rsvp): Promise<void>  {
    const {serviceBaseUrl, serviceSendRsvpToken} = getConfig();
    const url = `${serviceBaseUrl}/api/invite?code=${serviceSendRsvpToken}`;
    const method = "PUT";
    const body = JSON.stringify(rsvp);
    const res = await fetch(new Request(url, { method, body }));
    if (!res.ok) {
        throw new Error("Service call failed");
    }
}

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

export type InviteType = "Day" | "Evening";

export type Attending = "NotAttending" | "Day" | "Evening";

export type Age = "Infant" | "Child" | "YoungAdult" | "Adult";

export type Starter = "PrawnCocktail" | "Asparagus" | "ChildSetMenu";

export type Main = "CodAndChips" | "HuntersChicken" | "ChildSetMenu";

export type Dessert = "EtonMess" | "ChocolateBrownie" | "ChildSetMenu";
