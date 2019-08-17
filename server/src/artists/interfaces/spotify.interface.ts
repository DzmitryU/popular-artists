export interface ISpotify {
  clientCredentialsGrant: () => Promise<{ body: object }>;
  setAccessToken: (token: string) => void;
  searchArtists: (artistName: string, { limit: number }) => Promise<object>;
  getArtistTopTracks: (id: string, locale: string) => Promise<object>;
}

export interface ISpotifyConfig {
  numberOfBestSongs: number;
  locale: string;
}
