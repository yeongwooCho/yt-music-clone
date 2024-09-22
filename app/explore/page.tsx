import React from 'react';
import PagePadding from "@/components/PagePadding";
import Category from "@/app/explore/components/Category";
import PlayListCarousel from "@/components/PlayListCarousel";
import UserIcon from "@/components/UserIcon";
import {getAllPlaylist} from "@/lib/dummyData";

const page = async () => {
  const playListArray = await getAllPlaylist();

  return (
    <PagePadding>
      <div>
        <Category></Category>

        <div className="mt-20"></div>

        <PlayListCarousel
          title="커버 및 리믹스"
          subTitle=""
          playListArray={playListArray}
          Thumbnail={(
            <div className="w-[56px] h-[56px]">
              <UserIcon size="lg"/>
            </div>
          )}/>
      </div>
    </PagePadding>

  );
};

export default page;

