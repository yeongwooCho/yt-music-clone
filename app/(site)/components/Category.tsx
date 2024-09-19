"use client";

import React from 'react';
import {useUIState} from "@/app/hooks/useUIState";
import {homeCategoryList} from "@/lib/dummyData";
import {cn} from "@/lib/utils";

const Category = () => {
  const {homeCategory, setHomeCategory, setHeaderImageSrc} = useUIState();

  const onClickCategory = (category: { src: string; label: string }) => () => {
    if (homeCategory === category.label) {
      setHomeCategory("");
      setHeaderImageSrc("");
    } else {
      setHomeCategory(category.label);
      setHeaderImageSrc(category.src);
    }
  };

  return (
    <ul className="flex flex-row gap-4 max-w-full overflow-x-auto">
      {homeCategoryList.map((category) => {
        return (
          <li key={category.label} className={
            cn(
              "min-w-fit px-3 py-1 justify-center items-center border border-transparent rounded-lg" +
              " bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer",
              category.label === homeCategory && "bg-white text-black hover:bg-white"
            )
          } onClick={onClickCategory(category)}>
            {category.label}
          </li>
        )
      })}
    </ul>
  );
};

export default Category;
