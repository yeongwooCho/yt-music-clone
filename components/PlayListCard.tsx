"use client";

import React from 'react';
import {IPlayList, ISong} from "@/types";
import Image from 'next/image';
import {getRandomElementFromArray} from "@/lib/utils";
import {useRouter} from "next/navigation";
import {MdMoreVert} from "react-icons/md";
import {FiPlay} from "react-icons/fi";
import IconButton from "@/components/elements/IconButton";
import {red} from "next/dist/lib/picocolors";

const PlayListCard = ({playlist}: { playlist: IPlayList }) => {
  const {push} = useRouter();

  const {id, owner, playlistName, songList} = playlist;
  const randomSong = getRandomElementFromArray(songList) as ISong;

  const onClickCard = () => {
    push(`/playlist?list=${id}`);
  }

  const onClickPlay = () => {
    // TODO: play song
    console.log('play song');
  }

  return (
    <article className="group h-[240px] cursor-pointer" onClick={onClickCard}>
      <section className="relative h-[136px]">
        <Image src={randomSong.imageSrc} alt='thumbnail' fill={true} className="object-cover"/>
        <div className="hidden relative group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-[136px]">
          <div className="absolute top-2 right-3">
            <IconButton icon={
              <MdMoreVert size={20}/>
            }/>
          </div>
          <div className="absolute bottom-2 right-2 flex items-center justify-center transform-gpu
          transition-transform hover:scale-110 rgba(0,0,0,0.7) hover:bg-[rgba(0,0,0,0.9)] h-[45px] w-[45px] rounded-full
          pl-1" onClick={onClickPlay}>
            <FiPlay size={20} color="red"/>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-2">{playlistName}</div>
        <div className="text-neutral-500">{`${owner} - 트랙 ${songList.length}개`}</div>
      </section>
    </article>
  );
};

export default PlayListCard;
