import {sleep} from "@/lib/utils";
import Category from "@/app/(site)/components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import {dummyPlaylistArray, getPlaylistById} from "@/lib/dummyData";
import UserIcon from "@/components/UserIcon";

const home = async function Home() {

  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  const dummyPlaylistArray2 = [await getPlaylistById(1)];
  const dummyPlaylistArray3 = [await getPlaylistById(2)];
  const dummyPlaylistArray4 = [await getPlaylistById(3)];
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
          <div className="mt-20"></div>
          <PlayListCarousel
            title="아이유"
            subTitle="새로운 앨범"
            playListArray={dummyPlaylistArray2}
            Thumbnail={(
              <div className="w-[56px] h-[56px]">
                <UserIcon size="lg"/>
              </div>
            )}/>
          <div className="mt-20"></div>

          <PlayListCarousel
            title="커뮤니티 제공"
            subTitle=""
            playListArray={dummyPlaylistArray3}
            Thumbnail={(
              <div className="w-[56px] h-[56px]">
                <UserIcon size="lg"/>
              </div>
            )}/>
          <div className="mt-20"></div>

          <PlayListCarousel
            title="커버 및 리믹스"
            subTitle=""
            // playListArray={}
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
