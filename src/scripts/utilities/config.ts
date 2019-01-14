export function getConfig(): Config {
    if (process.env.NODE_ENV === "production") {
        return {
            serviceBaseUrl: "https://hooleywedding.azurewebsites.net",
            serviceGetInviteToken: "IyY2bNg6hrFLUUozgZOVccKpDVrEERfp95SgmeWipS619sGqPBXOaA==",
            serviceSendRsvpToken: "7qhATyx5sfM/7C2zKNKvDqoiqkk0d8OZ4hX4CJ22spWAFqlgxgcS2Q==",
            serviceValidateInviteIdToken: "zD8sRmavJ6hOm0cFqzpSGiTWWuSyzevA4Lh2w42Trrxn/EOPw2/ptw==",
        };
    } else {
        return {
            serviceBaseUrl: "http://localhost:7071",
            serviceGetInviteToken: "",
            serviceSendRsvpToken: "",
            serviceValidateInviteIdToken: "",
        };
    }
}

export interface Config {
    serviceBaseUrl: string;
    serviceGetInviteToken: string;
    serviceSendRsvpToken: string;
    serviceValidateInviteIdToken: string;
}
