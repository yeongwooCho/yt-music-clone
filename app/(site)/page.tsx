import {sleep} from "@/lib/utils";

const home = async function Home() {
  await sleep(2000);
  // throw new Error("ERROR");
  return <div>HOME</div>;
};

export default home;
