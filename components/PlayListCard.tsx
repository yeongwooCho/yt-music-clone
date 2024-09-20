"use client";

import React from 'react';
import {IPlayList, ISong} from "@/types";
import Image from 'next/image';
import {getRandomElementFromArray} from "@/lib/utils";
import {useRouter} from "next/navigation";

const PlayListCard = ({playlist}: { playlist: IPlayList }) => {
  const {push} = useRouter();

  const {id, owner, playlistName, songList} = playlist;
  const randomSong = getRandomElementFromArray(songList) as ISong;

  const onClickCard = () => {
    push(`/playlist?list=${id}`);
  }

  return (
    <article className="h-[240px] cursor-pointer" onClick={onClickCard}>
      <section className="relative h-[136px]">
        <Image src={randomSong.imageSrc} alt='thumbnail' fill={true} className="object-cover"/>
      </section>
      <section>
        <div className="mt-2">{playlistName}</div>
        <div className="text-neutral-500">{`${owner} - 트랙 ${songList.length}개`}</div>
      </section>
    </article>
  );
};

export default PlayListCard;
