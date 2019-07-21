import { Router } from 'express';
import { getArtistTop } from './controller';

const router = Router();

router.get('/top/:name', getArtistTop);

export default router;