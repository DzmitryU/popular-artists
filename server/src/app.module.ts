import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { ArtistsModule } from './artists/artists.module';

@Module({
  imports: [
    ArtistsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'docs'),
    }),
  ],
})
export class AppModule {}
