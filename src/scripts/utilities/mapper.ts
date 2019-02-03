import { DessertFormModel } from "../components/rsvp-page/dessert-field";
import { AgeFormModel, GuestRsvpFormModel } from "../components/rsvp-page/guest-fields";
import { MainFormModel } from "../components/rsvp-page/main-field";
import { RsvpFormModel } from "../components/rsvp-page/rsvp-form";
import { StarterFormModel } from "../components/rsvp-page/starter-field";
import { DessertDto, InviteDto, InviteGuestDto, MainDto, RsvpDto, StarterDto } from "./service";

export function mapDto(invite: InviteDto): RsvpFormModel  {
    const mapIsChildSetMenu = (g: InviteGuestDto): boolean =>
        g.starter === "ChildSetMenu" ||
        g.main === "ChildSetMenu" ||
        g.dessert === "ChildSetMenu";

    const mapStarter = (g: InviteGuestDto): StarterFormModel =>
        g.starter === "ChildSetMenu" ? undefined : g.starter;

    const mapMain = (g: InviteGuestDto): MainFormModel =>
        g.main === "ChildSetMenu" ? undefined : g.main;

    const mapDessert = (g: InviteGuestDto): DessertFormModel =>
        g.dessert === "ChildSetMenu" ? undefined : g.dessert;

    return {
        guests: invite.guests
            .map((g) => ({
                ...g,
                isChildSetMenu: mapIsChildSetMenu(g),
                starter: mapStarter(g),
                main: mapMain(g),
                dessert: mapDessert(g),
            }))
            .sort((a: GuestRsvpFormModel, b: GuestRsvpFormModel) => {
                if (a.firstName < b.firstName) {
                    return -1;
                }
                if (a.firstName > b.firstName) {
                    return 1;
                }
                return 0;
            })
            .sort((a: GuestRsvpFormModel, b: GuestRsvpFormModel) => {
                function mapAgeToInt(age: AgeFormModel) {
                    if (age === "Infant") {
                        return 3;
                    }
                    if (age === "Child") {
                        return 2;
                    }
                    if (age === "YoungAdult") {
                        return 1;
                    }
                    if (age === "Adult") {
                        return 0;
                    }
                }
                return mapAgeToInt(a.age) - mapAgeToInt(b.age);
            }),
    };
}

export function mapForm(form: RsvpFormModel): RsvpDto  {
    const mapStarter = (g: GuestRsvpFormModel): StarterDto =>
        g.isChildSetMenu  ? "ChildSetMenu" : g.starter;

    const mapMain = (g: GuestRsvpFormModel): MainDto =>
        g.isChildSetMenu  ? "ChildSetMenu" : g.main;

    const mapDessert = (g: GuestRsvpFormModel): DessertDto =>
        g.isChildSetMenu  ? "ChildSetMenu" : g.dessert;

    const mapDrinkPreferenceRed = (g: GuestRsvpFormModel): boolean =>
        g.drinkPreferenceRed === null || g.drinkPreferenceRed === undefined
            ? false
            : g.drinkPreferenceRed;

    const mapDrinkPreferenceWhite = (g: GuestRsvpFormModel): boolean =>
        g.drinkPreferenceWhite === null || g.drinkPreferenceWhite === undefined
            ? false
            : g.drinkPreferenceWhite;

    const mapDrinkPreferenceRose = (g: GuestRsvpFormModel): boolean =>
        g.drinkPreferenceRose === null || g.drinkPreferenceRose === undefined
            ? false
            : g.drinkPreferenceRose;
    return {
        rsvps: form.guests.map((g) => ({
            inviteId: g.inviteId,
            firstName: g.firstName,
            attending: g.attending,
            starter: mapStarter(g),
            main: mapMain(g),
            dessert: mapDessert(g),
            dietaryRequirements: g.dietaryRequirements,
            drinkPreferenceRed: mapDrinkPreferenceRed(g),
            drinkPreferenceWhite: mapDrinkPreferenceWhite(g),
            drinkPreferenceRose: mapDrinkPreferenceRose(g),
            songRequest: g.songRequest,
        })),
    };
}
