export class Ode {
    _id: string;
    snippet: string;
    songName: string;
    artist: string;
    spotify: {
        name: string;
        image: string;
        preview: string;
        artist: string;
        uri: string
      };
      musixmatch: {
        lyrics: [string];
        fullLink: string
      };
      genius: {
        annotation: [any]
      };
      owner: {
        type: string;
      };
}
