import React from 'react';
import {generateRandomHex} from "@/lib/utils";

interface IGenreCardProps {
  genre: string;
}

const GenreCard: React.FC<IGenreCardProps> = ({genre}) => {
  const hex = generateRandomHex()

  return (
    <div className="flex flex-row h-[48px] w-full items-center cursor-pointer bg-neutral-800 rounded-lg">
      <div style={{backgroundColor: hex}} className="h-full w-2 rounded-l-lg mr-2"></div>
      {genre}
    </div>
  );
};

export default GenreCard;
