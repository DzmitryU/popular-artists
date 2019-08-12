import { Module } from '@nestjs/common';
import ArtistsController from './controller';
import ArtistsService from './services';

@Module({
  controllers: [ArtistsController],
  providers: [ArtistsService],
})
export default class ArtistsModule {}