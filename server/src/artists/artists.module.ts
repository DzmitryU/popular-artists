import { Module } from '@nestjs/common';
import ArtistsController from './artists.controller';
import ArtistsService from './services/artists.service';
import WikiService from './services/wiki.service';
import SpotifyService from './services/spotify.service';

@Module({
  controllers: [ArtistsController],
  providers: [ArtistsService, WikiService, SpotifyService],
})
export class ArtistsModule {}