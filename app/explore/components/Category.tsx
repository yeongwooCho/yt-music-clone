import React from 'react';
import {FiBarChart, FiMusic, FiSmile} from "react-icons/fi";

interface ICategoryMenuProps {
  icon: React.ReactNode;
  label: string;
}

const CategoryMenu: React.FC<ICategoryMenuProps> = ({icon, label,}) => {
  return (
    <div className="w-full flex flex-row gap-4 items-center bg-neutral-800 pt-4 pb-4 pl-6 rounded-sm cursor-pointer
    hover:bg-neutral-900 transition">
      <div>
        {icon}

      </div>
      <div className="font-bold text-[20px]">
        {label}
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <div className="w-full flex flex-col gap-4 lg:flex-row">
      <CategoryMenu label={'최신음악'} icon={<FiMusic color="#AAAAAA" size={20}/>}/>
      <CategoryMenu label={'차트'} icon={<FiBarChart color="#AAAAAA" size={20}/>}/>
      <CategoryMenu label={'분위기 및 장르'} icon={<FiSmile color="#AAAAAA" size={20}/>}/>
    </div>
  );
};

export default Category;
