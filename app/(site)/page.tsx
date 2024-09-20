import {sleep} from "@/lib/utils";
import Category from "@/app/(site)/components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import {dummyPlaylistArray} from "@/lib/dummyData";
import UserIcon from "@/components/UserIcon";

const home = async function Home() {

  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  await sleep(2000);
  // throw new Error("ERROR");
  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9">
          <Category/>
          <div className="mt-12"></div>
          <PlayListCarousel
            title="다시듣기"
            subTitle="도도"
            playListArray={dummyPlaylistArray1}
            Thumbnail={(
              <div className="w-[56px] h-[56px]">
                <UserIcon size="lg"/>
              </div>
            )}/>
        </div>
      </div>
    </PagePadding>
  );

};

export default home;
