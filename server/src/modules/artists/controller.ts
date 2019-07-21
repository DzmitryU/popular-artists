import { Request, Response } from 'express';

import ArtistsService from './services';

const artistsService = new ArtistsService();

/**
 * Get info about artist and his most popular songs
 */
export const getArtistTop = async (req: Request, res: Response) => {
    const artist = await artistsService.getArtist(req.params.name);
    res.json(artist);
};