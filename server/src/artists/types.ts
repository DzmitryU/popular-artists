export interface ITrack {
  title: string;
  spotifyLink?: string;
  albumCover?: string;
}

export interface IArtist {
  name: string;
  wikipediaDescription: string;
  topTracks?: ITrack[];
}

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

export interface ICache {
  value: string;
  timestamp?: number;
}