"use client";

import React, {useMemo} from 'react';
import {usePathname} from "next/navigation";
import {GoHome} from "react-icons/go";
import {FiCompass, FiMusic, FiPlus} from "react-icons/fi";
import Link from "next/link";
import {cn} from "@/lib/utils";

const Navigator = () => {
  const pathName = usePathname(); // client component 지정 필요
  const routes = useMemo(() => {
    return [
      // href: 어디로 이동할 것인가
      {icon: <GoHome size={24}/>, label: "홈", isActive: pathName === "/", href: "/"},
      {icon: <FiCompass size={24}/>, label: "둘러보기", isActive: pathName === "/explore", href: "/explore"},
      {icon: <FiMusic size={24}/>, label: "보관함", isActive: pathName === "/library", href: "/library"},
    ];
  }, [pathName]);

  return (
    <div>
      <section className="flex flex-col gap-2 p-4">
        {routes.map((route, index) => {
          return (
            <Link key={route.label} href={route.href}>
              <div
                className={cn("text-[16px] flex flex-row gap-4 items-center  hover:bg-neutral-700 rounded-lg p-2",
                  route.isActive && "bg-neutral-800"
                )}>
                {route.icon}
                <span>
                  {route.label}
                </span>
              </div>
            </Link>
          );
        })}
      </section>
      <section className="px-6">
        <div className="w-full h-[1px] bg-neutral-700"></div>
      </section>
      <section className="px-6">
        <div
          className="hover:bg-neutral-600 cursor-pointer flex flex-row items-center bg-neutral-700 my-6 p-2 font-[200] justify-center gap-2 rounded-3xl">
          <FiPlus size={24}/>
          <span>새 재생목록</span>

        </div>
      </section>
    </div>
  );
};

export default Navigator;
