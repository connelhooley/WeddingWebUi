import { Invite } from "../models/invite";
import { Rsvp } from "../models/rsvp";

export async function getInvite(inviteId: string): Promise<Invite> {
    const getKey = "IyY2bNg6hrFLUUozgZOVccKpDVrEERfp95SgmeWipS619sGqPBXOaA==";
    const url = `https://hooleywedding.azurewebsites.net/api/invite?inviteId=${inviteId}&code=${getKey}`;
    const method = "GET";
    const res = await fetch(new Request(url, { method }));
    if (res.ok) {
        return await res.json();
    } else {
        throw new Error("Service call failed");
    }
}

export async function sendRsvp(rsvp: Rsvp): Promise<void>  {
    const setKey = "7qhATyx5sfM/7C2zKNKvDqoiqkk0d8OZ4hX4CJ22spWAFqlgxgcS2Q==";
    const url = `https://hooleywedding.azurewebsites.net/api/invite?code=${setKey}`;
    const method = "PUT";
    const body = JSON.stringify(rsvp);
    const res = await fetch(new Request(url, { method, body}));
    if (!res.ok) {
        throw new Error("Service call failed");
    }
}
