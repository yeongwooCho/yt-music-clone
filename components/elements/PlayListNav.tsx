"use client"

import React from 'react';
import {IoMdPlayCircle} from "react-icons/io";

interface IPlayList {
  id: string;
  owner: string;
  playlistName: string;
  songList: string[];
}

const PlayListNav = ({playlist}: { playlist: IPlayList }) => {
  const {owner, playlistName} = playlist;

  const onClickPlay = () => {
    console.log("play");
  };

  return (
    <li className="mx-3 px-4 h-[56px] flex flex-row justify-between items-center hover:bg-neutral-700 rounded-lg group">
      <div>
        <div className="text-[14px]">
          {playlistName}
        </div>
        <div className="text-[12px] text-neutral-500">
          {owner}
        </div>
      </div>
      <div>
        <div className="hidden group-hover:block cursor-pointer" onClick={onClickPlay}>
          <IoMdPlayCircle size={30}/>
        </div>
      </div>
    </li>
  );
};

export default PlayListNav;
