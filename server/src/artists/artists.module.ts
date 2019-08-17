import { Module } from '@nestjs/common';
import ArtistsController from './artists.controller';
import ArtistsService from './services';

@Module({
  controllers: [ArtistsController],
  providers: [ArtistsService],
})
export default class ArtistsModule {}