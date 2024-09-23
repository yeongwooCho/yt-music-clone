import React from 'react';
import {ITopSong} from "@/types";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import {chunkArray} from "@/lib/utils";
import SongCard from "@/components/SongCard";

interface ISongListCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  songListTop10: ITopSong[];
}

const SongColumn = ({songList}: { songList: ITopSong[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {songList.map((song, index) => {
        return <SongCard key={index} song={song}/>;
      })}
    </div>
  );
}

const SongListCarousel: React.FC<ISongListCarouselProps> = ({
                                                              title,
                                                              subTitle,
                                                              Thumbnail,
                                                              songListTop10,
                                                            }) => {

  const chunkedTop10SongList = chunkArray(songListTop10, 4) as ITopSong[][];

  return (
    <div className="w-full">
      <Carousel>
        <div className="flex flex-row justify-between items-end my-2">
          <article className="flex flex-row gap-3 ">
            {Thumbnail}
            <div className="flex flex-col justify-center">
              {subTitle && <div className="text-neutral-500">{subTitle}</div>}
              <div className="text-[34px] font-bold leading-[34px]">{title}</div>
            </div>
          </article>
          <div className="relative left-[-45px]">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious className="right-2"/>
              <CarouselNext className="left-2"/>
            </div>

          </div>
        </div>
        <CarouselContent className="mt-4">
          {chunkedTop10SongList?.map((songList, index) => {
            return (
              <CarouselItem key={index} className="lg:basis-1/2">
                <div className="p-1">
                  <SongColumn songList={songList}/>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

      </Carousel>
    </div>
  );
};

export default SongListCarousel;
