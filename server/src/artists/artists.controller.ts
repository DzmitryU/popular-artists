import { Controller, Get, Param } from '@nestjs/common';

import ArtistsService from './services';
import IArtist from './interfaces/artist.interface';

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