import React from 'react';
import {getPlaylistById} from "@/lib/dummyData";
import {permanentRedirect} from "next/navigation";

interface IPlayListPageProps {
  searchParams: { list: string };
}

const page = async (props: IPlayListPageProps) => {
  const playlist = await getPlaylistById(Number(props.searchParams.list));

  if (!playlist) {
    permanentRedirect("/"); // 홈으로 이동
  }

  return (
    <div>
      playlist: {JSON.stringify(playlist)}
    </div>
  );
};

export default page;

