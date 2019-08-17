import { Injectable } from '@nestjs/common';
import wiki from 'wikijs';
import { isEmpty, get } from 'lodash';
import * as config from 'config';

import { ICache } from '../interfaces/cache.interface';

/**
 * Service for getting data from Wikipedia
 */
@Injectable()
export default class WikiService {
  constructor() {
    this.wikiCache = {};
    this.cacheLifeTime = config.get('wiki').cacheLifeTime;
  }

  /**
   * Cache for artists info from Wiki
   */
  wikiCache: {[key:string]: ICache};

  /**
   * Life duration for fresh cache
   */
  cacheLifeTime: number;

  /**
   * Fetch Artists info from Wiki
   * @param {string} name - Artists name
   * @returns {Promise<string>}
   */
  async getArtistInfo(name: string): Promise<string> {
    if (!isEmpty(this.wikiCache[name]) && this.isCacheFresh(this.wikiCache[name])) {
      return this.wikiCache[name].value;
    }
    let summary = '';
    try {
      const page = await wiki().find(name);
      summary = await await page.summary();
      this.wikiCache[name] = {
        value: summary,
        timestamp: Math.floor(Date.now() / 1000),
      };
    } catch (e) {
      console.log(e);
    }
    return summary;
  }

  /**
   * Checks if cache age does not exceed allowed lifetime
   * @param {ICache} cache
   * @returns {boolean}
   */
  private isCacheFresh(cache: ICache): boolean {
    return get(cache, 'timestamp', 0) + this.cacheLifeTime > Math.floor(Date.now() / 1000);
  }
}
