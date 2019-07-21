import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import { Router } from './routes';

/**
 * Class that is used for storing express application. All configuration, routing, middleware are handled in constructor
 */
class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        App.config(this.app);
        Router.setRoutes(this.app);
    }

    /**
     * Chain of middleware configuration
     * @param {e.Application} app
     */
    private static config(app: express.Application): void {
        app.use(cors());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: false,
        }));
    }
}

export default new App().app;