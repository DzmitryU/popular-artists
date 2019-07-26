import * as SpotifyWebApi from 'spotify-web-api-node';
import { get } from 'lodash';
import * as config from 'config';

import { ITrack, ISpotify, ISpotifyConfig } from '../types';

const spotifyConfig: ISpotifyConfig = config.get('spotify');

/**
 * Service for getting data from Spotify
 */
export default class SpotifyService {
    constructor() {
        this.spotify = new SpotifyWebApi(
            {
                clientId: process.env.clientId,
                clientSecret: process.env.clientSecret,
            });
    }

    /**
     * External module for making request to spotify API
     */
    spotify: ISpotify;

    /**
     * Updates Access token for User before making request
     * @returns {Promise<void>}
     */
    async updateAccessToken(): Promise<void> {
        try {
            const response = await this.spotify.clientCredentialsGrant();
            this.spotify.setAccessToken(response.body['access_token']);
        } catch (e) {
            console.log('Error during Access Token update');
        }
    }

    /**
     * Finds id for artist
     * @param {string} artistName
     * @returns {Promise<string>} - id
     */
    async getArtistId(artistName: string): Promise<string> {
        let id = '';
        try {
            const response = await this.spotify.searchArtists(artistName, { limit: 1 });
            const items = get(response, ['body', 'artists', 'items'], []);
            id = get(items[0], 'id', '');
        } catch (e) {
            console.log('Error during getting artist id from Spotify');
            console.log(e);
        }
        return id;
    }

    /**
     * Fetches for best artists songs
     * @param {string} artistName
     * @returns {Promise<ITrack[]>} - best songs
     */
    async getTopSongs(artistName: string): Promise<ITrack[]> {
        try {
            await this.updateAccessToken();
            const id = await this.getArtistId(artistName);
            const response = await this.spotify.getArtistTopTracks(id, spotifyConfig.locale);
            return get(response, ['body', 'tracks'], [])
                .slice(0, spotifyConfig.numberOfBestSongs)
                .map(track => ({
                    title: track.name,
                    spotifyLink: get(track, ['external_urls', 'spotify']),
                    albumCover: get(
                        get(track, ['album', 'images'], [])[0],
                        'url',
                    ),
                }));
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}