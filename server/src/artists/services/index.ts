import { Injectable } from '@nestjs/common';

import SpotifyService from './spotify';
import WikiService from './wiki';
import IArtist from '../interfaces/artist.interface';
import ITrack from '../interfaces/track.interface';

@Injectable()
export default class ArtistsService {
  constructor() {
    this.artistNamesCache = [];
    this.spotifyService = new SpotifyService();
    this.wikiService = new WikiService();
  }

  /**
   * Cache for artist names from S3
   */
  artistNamesCache: string[];
  /**
   * Service for fetching data from Spotify
   */
  spotifyService: SpotifyService;

  /**
   * Service for fetching data from Wikipedia
   */
  wikiService: WikiService;

  async getArtist(name: string): Promise<IArtist> {
    const artistInfo: string = await this.wikiService.getArtistInfo(name);
    const topTracks: ITrack[] = await this.spotifyService.getTopSongs(name);

    return ({
      name,
      topTracks,
      wikipediaDescription: artistInfo,
    });
  }
}