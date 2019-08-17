import { Injectable } from '@nestjs/common';

import IArtist from '../interfaces/artist.interface';
import ITrack from '../interfaces/track.interface';
import WikiService from './wiki.service';
import SpotifyService from './spotify.service';

@Injectable()
export default class ArtistsService {
  constructor(
    private wikiService: WikiService,
    private spotifyService: SpotifyService,
  ) {
    this.artistNamesCache = [];
  }

  /**
   * Cache for artist names from S3
   */
  artistNamesCache: string[];

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
