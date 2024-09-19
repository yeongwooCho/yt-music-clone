import {sleep} from "@/lib/utils";
import Category from "@/app/(site)/components/Category";

const home = async function Home() {
  await sleep(2000);
  // throw new Error("ERROR");
  return <div className="min-h-[600px]">
    <div className="mt-9">
      <Category/>
      HOMEPAGE
    </div>
  </div>;
};

export default home;
