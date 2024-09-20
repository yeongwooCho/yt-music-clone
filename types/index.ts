export interface ISong {
  name: string,
  channelId: number,
  channel: string,
  src: string,
  imageSrc: string,
}

export interface ITopSong extends ISong {
  rank: number,
  prevRank: number,
}

export interface IPlayList {
  id: number,
  owner: string,
  playlistName: string,
  songList: ISong[],
}

export interface IChannel {
  id: number,
  subscribers: number,
  name: string,
  songList: ISong[],
  playlistArray: IPlayList[],
}
