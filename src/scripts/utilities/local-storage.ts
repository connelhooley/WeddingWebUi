const key = "inviteId";

export function getInviteId(): string {
    return localStorage.getItem(key);
}

export function storeInviteId(inviteId: string): void {
    localStorage.setItem(key, inviteId);
}
