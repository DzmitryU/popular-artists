import { Application, static as ExpressStatic } from 'express';

import artistsRouter from './modules/artists/routes';

/** Express Router that includes all nested sub routes */
export class Router {
    /**
     * Adds middleware handlers with specified routes
     * @param {e.Application} app
     */
    public static setRoutes(app: Application): void {
        app.use('/api/v1',  artistsRouter);
        app.use('/docs', ExpressStatic('docs'));
    }
}