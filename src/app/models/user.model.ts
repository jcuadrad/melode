export class User {
    name: string;
    username: string;
    spotifyId: string;
    photos: [string];
    emails: [{}];
    odesLiked: [{}];
    odesCreated: [{}];

    constructor(obj: Object = {}) {
        Object.assign(this, obj);
      }
}
