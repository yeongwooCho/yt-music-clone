import {sleep} from "@/lib/utils";

const home = async function Home() {
  await sleep(2000);
  // throw new Error("ERROR");
  return <div className="min-h-[600px]">
    <div className="h-[500px] bg-neutral-700">HOMEPAGE</div>
    <div className="h-[500px] bg-neutral-700">HOMEPAGE</div>
    <div className="h-[500px] bg-neutral-700">HOMEPAGE</div>
    <div className="h-[500px] bg-neutral-700">HOMEPAGE</div>
  </div>;
};

export default home;
