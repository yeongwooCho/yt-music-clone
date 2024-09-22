import React from 'react';
import {ITopSong} from "@/types";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"

interface ISongListCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  songListTop10?: ITopSong[];
}

const SongListCarousel: React.FC<ISongListCarouselProps> = ({
                                                              title,
                                                              subTitle,
                                                              Thumbnail,
                                                              songListTop10,
                                                            }) => {
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
          {songListTop10?.map((playList, index) => {
            return (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="p-1">
                  {JSON.stringify(songListTop10)}
                  {/*<PlayListCard key={index} playlist={playList}></PlayListCard>*/}
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
