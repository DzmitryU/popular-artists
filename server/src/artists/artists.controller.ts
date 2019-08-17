import { Controller, Get, Param } from '@nestjs/common';

import IArtist from './interfaces/artist.interface';
import ArtistsService from './services/artists.service';

@Controller('top')
export default class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}
  /**
   * Get info about artist and his most popular songs
   */
  @Get(':name')
  async getArtistTop(@Param('name') name): Promise<IArtist> {
    return await this.artistsService.getArtist(name);
  }
}