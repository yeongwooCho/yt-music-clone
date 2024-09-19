"use client";

import React from 'react';
import Image from "next/image";
import {RxHamburgerMenu} from "react-icons/rx";
import {useRouter} from "next/navigation";
import IconButton from "@/components/elements/IconButton";
import {cn} from "@/lib/utils";
import {IoCloseOutline} from "react-icons/io5";

const Logo = ({isInDrawer = false, onClickClose = () => {}}) => {
  const {push} = useRouter();
  const onClickLogo = () => {
    push("/"); // 홈으로 이동
  };

  const onClickMenu = () => {};

  return (
    <section className="flex flex-row items-center gap-3">
      {
        isInDrawer ? <IconButton
          icon={
            <div className={cn()}>
              <IoCloseOutline size={30}/>
            </div>
          }
          onClickIcon={onClickClose}/> : <IconButton
          icon={
            <div className={cn()}>
              <RxHamburgerMenu size={24}/>
            </div>
          }
          onClickIcon={onClickMenu}/>
      }
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image width={100} height={30} src={"/main-logo.svg"} alt={"로고 이미지"}/>
      </div>
    </section>
  );
};

export default Logo;
