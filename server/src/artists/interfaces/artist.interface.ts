import ITrack from './track.interface';

export default interface IArtist {
  name: string;
  wikipediaDescription: string;
  topTracks?: ITrack[];
}