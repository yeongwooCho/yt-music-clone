import React from 'react';
import Image from "next/image";
import UserIcon from "@/components/UserIcon";
import PagePadding from "@/components/PagePadding";
import {FaChromecast} from "react-icons/fa";
import {FiSearch} from "react-icons/fi";

const Header = ({children}: { children: React.ReactNode }) => {
  return (
    <header className="relative overflow-y-auto w-full h-full">
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image fill src="https://images.unsplash.com/photo-1487956382158-bb926046304a" alt="bg-image"
                 className="object-cover"/>
          {/*<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"/>*/}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black"/>
        </div>
      </section>
      <section className="sticky">
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between items-center">
            <article className="h-[42px] min-w-[480px] flex flex-row items-center
            bg-[rgba(0,0,0,0.14)] rounded-2xl px-4 gap-4">
              <div>
                <FiSearch size={20}/>
              </div>
              <input className="h-full w-full bg-transparent" type="text" placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"/>
            </article>
            <article className="flex flex-row gap-6 items-center">
              <FaChromecast size={26}/>
              <UserIcon/>
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="relative">
        {children}
      </section>
    </header>
  );
};

export default Header;
