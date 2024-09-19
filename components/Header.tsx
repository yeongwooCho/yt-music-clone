import React from 'react';
import Image from "next/image";
import UserIcon from "@/components/UserIcon";
import PagePadding from "@/components/PagePadding";

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
          search section
          <UserIcon/>
        </PagePadding>
      </section>
      <section className="relative">
        {children}
      </section>
    </header>
  );
};

export default Header;
