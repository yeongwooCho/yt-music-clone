import React from 'react';
import PagePadding from "@/components/PagePadding";
import Category from "@/app/explore/components/Category";
import PlayListCarousel from "@/components/PlayListCarousel";
import UserIcon from "@/components/UserIcon";
import {getAllPlaylist, getSongListTop10} from "@/lib/dummyData";
import SongListCarousel from "@/components/SongListCarousel";

const page = async () => {
  // 병렬처리
  // const playListArray = await getAllPlaylist();
  // const songListTop10 = await getSongListTop10();
  const [playListArray, songListTop10] = await Promise.all(
    [getAllPlaylist(), getSongListTop10()]
  );

  return (
    <PagePadding>
      <div>
        <div className="mt-4"></div>
        <Category></Category>
        <div className="mt-20"></div>
        <PlayListCarousel
          title="커버 및 리믹스" subTitle="" playListArray={playListArray} Thumbnail={(
          <div className="w-[56px] h-[56px]">
            <UserIcon size="lg"/>
          </div>
        )}/>

        <SongListCarousel
          title="커버 및 리믹스" subTitle="" songListTop10={songListTop10} Thumbnail={(
          <div className="w-[56px] h-[56px]">
            <UserIcon size="lg"/>
          </div>
        )}/>
      </div>
    </PagePadding>

  );
};

export default page;

