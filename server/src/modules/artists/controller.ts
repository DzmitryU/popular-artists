import { Controller, Get, Param } from '@nestjs/common';

import { IArtist } from './types';
import ArtistsService from './services';

@Controller('top')
export default class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}
  /**
   * Get info about artist and his most popular songs
   */
  @Get(':name')
  async getArtistTop(@Param() params): Promise<IArtist> {
    console.log(params.name);
    return await this.artistsService.getArtist(params.name);
  }
}