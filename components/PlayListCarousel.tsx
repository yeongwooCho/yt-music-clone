import React from 'react';
import {IPlayList} from "@/types";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import PlayListCard from "@/components/PlayListCard";

interface IPlayListCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  playListArray?: IPlayList[];
}

const PlayListCarousel: React.FC<IPlayListCarouselProps> = ({
                                                              title,
                                                              subTitle,
                                                              Thumbnail,
                                                              playListArray,
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
        <CarouselContent>
          {playListArray?.map((playList, index) => {
            return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <PlayListCard key={index} playlist={playList}></PlayListCard>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

      </Carousel>
    </div>
  );
};

export default PlayListCarousel;
