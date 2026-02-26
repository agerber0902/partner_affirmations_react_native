export interface AffirmationUser {
    id: string | undefined;
    uid: string;
    name: string;
    displayNameForPartner: string;
}

export const AffirmationUserMap = (data: any, id: string): AffirmationUser => {
    return {
        id: id,
        uid: data.uid,
        name: data.uid,
        displayNameForPartner: data.displayNameForPartner
    };
}