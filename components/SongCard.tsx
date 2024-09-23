import React from 'react';
import Image from "next/image";
import {ITopSong} from "@/types";
import {FaCircle} from "react-icons/fa";
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai";
import {FiMoreVertical, FiPlayCircle, FiThumbsDown, FiThumbsUp} from "react-icons/fi";
import IconButton from "@/components/elements/IconButton";

interface ISongCardProps {
  song: ITopSong;
}

const SongCard: React.FC<ISongCardProps> = ({song}) => {
  return (
    <article className="relative group flex flex-row items-center gap-4 h-[48px] w-full">
      <div className=" w-[48px] h-[48px] relative">
        <Image src={song.imageSrc} alt="img" fill className=" object-cover"/>
        <section className="hidden group-hover:flex absolute h-[48px] w-[48px] top-0
        justify-center items-center bg-black cursor-pointer">
          <FiPlayCircle/>
        </section>
      </div>
      <div className="flex flex-row items-center gap-4">
        {song.rank === song.prevRank ? (
          <FaCircle size={10}/>
        ) : song.rank > song.prevRank ? (
          <AiOutlineCaretUp color="#3CA63F" size={10}/>
        ) : (
          <AiOutlineCaretDown color="#FF0000" size={10}/>
        )}
      </div>
      <div>
        {song.rank + 1}
      </div>
      <div>
        {song.name}
      </div>
      <div>
        {song.channel}
      </div>
      <section className="hidden group-hover:flex absolute top-0 flex-row items-center justify-end h-[48px] w-1/2 bg-[rgba(0,0,0,0.7)]">
        <IconButton icon={<FiThumbsDown size={20}/>}/>
        <IconButton icon={<FiThumbsUp size={20}/>}/>
        <IconButton icon={<FiMoreVertical size={20}/>}/>
      </section>
    </article>
  );
};

export default SongCard;
