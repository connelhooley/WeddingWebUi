import config from "../../configs/config.CURRENT_ENV.json";

export interface Config {
    serviceBaseUrl: string;
    serviceGetInviteToken: string;
    serviceSendRsvpToken: string;
    serviceValidateInviteIdToken: string;
}

export function getConfig(): Config {
    return config;
}
