import { Module } from '@nestjs/common';

import ArtistsModule from './modules/artists/module';

@Module({
  imports: [ArtistsModule],
})
export class AppModule {}