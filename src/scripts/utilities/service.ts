import { getConfig } from "./config";

export async function getInvite(inviteId: string): Promise<InviteDto> {
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
    const {serviceBaseUrl, serviceValidateInviteIdToken} =  getConfig();
    const url = `${serviceBaseUrl}/api/invite-id?inviteId=${inviteId}&code=${serviceValidateInviteIdToken}`;
    const method = "GET";
    const res = await  fetch(new Request(url, { method }));
    return res.ok && JSON.parse(await res.json());
}

export async function sendRsvp(rsvp: RsvpDto): Promise<void>  {
    const {serviceBaseUrl, serviceSendRsvpToken} =  getConfig();
    const url = `${serviceBaseUrl}/api/invite?code=${serviceSendRsvpToken}`;
    const method = "PUT";
    const body = JSON.stringify(rsvp);
    const res = await fetch(new Request(url, { method, body }));
    if (!res.ok) {
        throw new Error("Service call failed");
    }
}

export interface InviteDto {
    guests: InviteGuestDto[];
}

export interface InviteGuestDto {
    inviteId: string;
    firstName: string;
    lastName: string;
    inviteType: InviteTypeDto;
    attending: AttendingDto;
    eligibleForRoom: boolean;
    age: AgeDto;
    starter: StarterDto;
    main: MainDto;
    dessert: DessertDto;
    dietaryRequirements: string;
    drinkPreferenceRed?: boolean;
    drinkPreferenceWhite?: boolean;
    drinkPreferenceRose?: boolean;
    songRequest: string;
}

export interface RsvpDto {
    rsvps: RsvpGuestDto[];
}

export interface RsvpGuestDto {
    inviteId: string;
    firstName: string;
    attending: AttendingDto;
    starter: StarterDto;
    main: MainDto;
    dessert: DessertDto;
    dietaryRequirements: string;
    drinkPreferenceRed?: boolean;
    drinkPreferenceWhite?: boolean;
    drinkPreferenceRose?: boolean;
    songRequest: string;
}

export type InviteTypeDto = "Day" | "Evening";

export type AttendingDto = "NotAttending" | "Day" | "Evening";

export type AgeDto = "Infant" | "Child" | "YoungAdult" | "Adult";

export type StarterDto = "PrawnCocktail" | "Asparagus" | "ChildSetMenu";

export type MainDto = "CodAndChips" | "HuntersChicken"| "StuffedCourgette" | "ChildSetMenu";

export type DessertDto = "EtonMess" | "ChocolateBrownie" | "ChildSetMenu";
