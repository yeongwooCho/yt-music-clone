"use client";

import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import UserIcon from "@/components/UserIcon";
import PagePadding from "@/components/PagePadding";
import {FaChromecast} from "react-icons/fa";
import {FiSearch} from "react-icons/fi";
import {Drawer, DrawerContent, DrawerTrigger,} from "@/components/ui/drawer"
import Logo from "@/components/elements/Logo";
import Navigator from "@/components/elements/Navigator";
import {cn} from "@/lib/utils";
import {useUIState} from "@/app/hooks/useUIState";

const HeaderDrawer = ({children}: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        <div className="py-3">
          <div className="px-3">
            <Logo isInDrawer onClickClose={() => {
              setIsOpen(false);
            }}/>
            <Navigator></Navigator>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}


const Header = ({children}: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const headRef = useRef<HTMLElement | null>(null);
  const {headerImageSrc, setHeaderImageSrc} = useUIState();

  useEffect(() => {
    const current = headRef.current;
    if (!current) return;

    const handleScroll = () => {
      const scrollValue = current.scrollTop;
      console.log(scrollValue);
      setIsScrolled(scrollValue !== 0);
    };
    current.addEventListener("scroll", handleScroll);
    return () => {
      current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={headRef} className="relative overflow-y-auto w-full h-full">
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image fill src={headerImageSrc || "https://images.unsplash.com/photo-1487956382158-bb926046304a"}
                 alt="bg-image"
                 className="object-cover"/>
          {/*<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"/>*/}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black"/>
        </div>
      </section>
      <section className={
        cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")}>
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between items-center">
            <article className="h-[42px] min-w-[480px] hidden lg:flex flex-row items-center
            bg-[rgba(0,0,0,0.14)] rounded-2xl px-4 gap-4 border border-neutral-500">
              <div>
                <FiSearch size={20}/>
              </div>
              <input className="h-full w-full bg-transparent" type="text" placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"/>
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo/>
              </article>

            </HeaderDrawer>
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
